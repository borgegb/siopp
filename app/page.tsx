"use client";
import { format } from "date-fns";
import { useEffect, useState } from "react";
import { supabase } from "@/api.js";
import { toast } from "sonner";
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
  const [customers, setCustomers] = useState<any[]>([]);
  const [subscriptionOptions, setSubscriptionOptions] = useState<
    { id: string; name: string; description?: string }[]
  >([]);

  useEffect(() => {
    fetchCustomers();
    fetchSubscriptions();
  }, []);

  const fetchCustomers = async () => {
    const { data, error } = await supabase.from("customers").select();
    if (error) {
      console.error("Error fetching customers:", error);
      return;
    }

    setCustomers(data);
  };

  const handleFormSubmit = async (formData: any) => {
    // Check if lastDayOfService exists and is a Date object, then format it
    if (
      formData.lastDayOfService &&
      formData.lastDayOfService instanceof Date
    ) {
      formData.lastDayOfService = format(
        formData.lastDayOfService,
        "yyyy-MM-dd"
      );
    }

    // Proceed with submitting the formatted formData to Supabase
    const { data, error } = await supabase.from("customers").insert([formData]);

    if (error) {
      console.error("Error submitting form:", error);
      toast("Error submitting form.", { description: error.message });
    } else {
      console.log("Form submitted successfully:", data);
      fetchCustomers(); // Optionally refresh the customers list
      toast("Customer saved successfully.");
    }
  };

  const fetchSubscriptions = async () => {
    const { data, error } = await supabase
      .from("subscriptions")
      .select("id, name, description, price, price_original, download, upload");
    if (error) {
      console.error("Error fetching subscriptions:", error);
      return;
    }
    setSubscriptionOptions(data); // Use setSubscriptionOptions here
  };

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

        {/* <h1>Customers</h1>
        <pre>{JSON.stringify(customers, null, 2)}</pre> */}
      </main>
      <Footer />
    </>
  );
}
