import dynamic from "next/dynamic";
import Head from "next/head";
import Header from "@/components/Header";
import ServicesHero from "@/components/ServicesHero";
import Footer from "@/components/Footer";

const ServiceCategories = dynamic(
  () => import("@/components/ServiceCategories")
);
const ConnectSection = dynamic(() => import("@/components/ConnectSection"));
const ResourcesSupport = dynamic(() => import("@/components/ResourcesSupport"));
// const IndustryExpertise = dynamic(() => import('@/components/IndustryExpertise'))

export default function Services() {
  return (
    <>
      <Head>
        <title>VG Software Services - Innovative Software Solutions</title>
        <meta
          name="description"
          content="Explore VG Software's comprehensive range of services including UI/UX Design, Web Development, Cloud Services, SEO, App Development, and more. Tailored solutions to drive your business success."
        />
        <meta
          name="keywords"
          content="VG Software, Software Services, UI/UX Design, Web Development, Cloud Services, SEO, App Development, Automation, AI/ML, Custom Software, Graphic Design, Cyber Security, IT Consulting"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen bg-white">
        <Header />
        <ServicesHero />
        <ServiceCategories />
        <ConnectSection />
        <ResourcesSupport />
        {/* <IndustryExpertise /> */}
        <Footer />
      </main>
    </>
  );
}
