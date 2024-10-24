import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Lazy load the Inter font
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <meta name="theme-color" content="#FF6B35" />
        <meta
          name="description"
          content="VG Software provides innovative software solutions for businesses. Custom development, AI integration, cloud services, and more."
        />
        <meta
          property="og:title"
          content="VG Software - Innovative Software Solutions"
        />
        <meta
          property="og:description"
          content="Empowering businesses with cutting-edge software solutions that drive growth and efficiency."
        />
        <meta
          property="og:image"
          content="https://www.vgsoftware.tech/og-image.jpg"
        />
        <meta property="og:url" content="https://www.vgsoftware.tech" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="VG Software - Innovative Software Solutions"
        />
        <meta
          name="twitter:description"
          content="Empowering businesses with cutting-edge software solutions that drive growth and efficiency."
        />
        <meta
          name="twitter:image"
          content="https://www.vgsoftware.tech/og-image.jpg"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
