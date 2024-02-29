"use client";

import Navbar from "@/components/navbar";
import Banner from "@/components/banner";
import AccordionComponent from "@/components/accordion";
import Hero from "@/components/hero";
import Step from "@/components/step";
import Rating from "@/components/rating";
import Footer from "@/components/footer";
import CTA from "@/components/cta";
import Price from "@/components/price";
import PartnersLogos from "@/components/partnersLogos";

export default function Home() {
  return (
    <>
      <Banner />
      <Navbar />
      <div className="mb-0 md:mb-0">
        <Hero />
      </div>
      <main className="mx-auto max-w-4xl">
        <div className="">
          <PartnersLogos />
        </div>
        <div id="price">
          <Price />
        </div>

        <div id="how">
          <Step />
        </div>
        <CTA />
        <div className="mb-4">
          <Rating />
        </div>

        <div className="mt-4 mb-4">
          <CTA />
        </div>
        <div id="faq" className="mb-8 mt-8">
          <AccordionComponent />
        </div>
      </main>
      <Footer />
    </>
  );
}
