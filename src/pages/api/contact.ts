import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import { z } from 'zod';

// Contact form schema validation
const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  phone: z.string().regex(/^\+?[\d\s-]{10,}$/, "Invalid phone number."),
  serviceType: z.string().min(1, "Service type is required."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

// Rate limit setup
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS = 5;
const requestLog = new Map<string, { count: number; timestamp: number }>();

const isRateLimited = (ip: string): boolean => {
  const now = Date.now();
  const requestData = requestLog.get(ip);

  if (!requestData) {
    requestLog.set(ip, { count: 1, timestamp: now });
    return false;
  }

  if (now - requestData.timestamp > RATE_LIMIT_WINDOW) {
    requestLog.set(ip, { count: 1, timestamp: now });
    return false;
  }

  if (requestData.count >= MAX_REQUESTS) {
    return true;
  }

  requestData.count++;
  return false;
};

// Nodemailer transporter setup using environment variables
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || "465"),
  secure: process.env.SMTP_SECURE === "true", // true for SSL, false for TLS
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const clientIp = (req.headers['x-forwarded-for'] || req.socket.remoteAddress || 'unknown') as string;
  const ip = Array.isArray(clientIp) ? clientIp[0] : clientIp;

  if (isRateLimited(ip)) {
    return res.status(429).json({ message: "Too many requests. Please try again later." });
  }

  try {
    const data = contactFormSchema.parse(req.body);

    // Verify the SMTP connection before sending the email
    await transporter.verify();
    console.log("SMTP Server is ready to take messages.");

    const mailOptions = {
      from: process.env.SMTP_FROM,
      to: 'vighnarajendrasoftware@gmail.com',
      subject: `New Contact Form Submission - ${data.serviceType}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #f97316; color: white; padding: 20px; }
            .content { padding: 20px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #666; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>New Contact Form Submission</h2>
            </div>
            <div class="content">
              <div class="field">
                <p class="label">Name:</p>
                <p>${data.name}</p>
              </div>
              <div class="field">
                <p class="label">Email:</p>
                <p>${data.email}</p>
              </div>
              <div class="field">
                <p class="label">Phone:</p>
                <p>${data.phone}</p>
              </div>
              <div class="field">
                <p class="label">Service Type:</p>
                <p>${data.serviceType}</p>
              </div>
              <div class="field">
                <p class="label">Message:</p>
                <p>${data.message}</p>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log("Message sent:", info.messageId);

    res.status(200).json({ message: "Message sent successfully" });
  } catch (error) {
    console.error("Contact form error:", error);
    res.status(500).json({ message: "Failed to send message" });
  }
}
