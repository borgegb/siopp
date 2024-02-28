"use client";

import React from "react";
import { useRouter } from "next/navigation"; // Correctly import useRouter from next/navigation

import { format } from "date-fns";
import { useEffect, useState } from "react";
import { supabase } from "@/api.js";
import Form from "@/components/form";
import { toast } from "sonner";
import Navbar from "@/components/navbar";

export default function Home() {
  const [subscriptionOptions, setSubscriptionOptions] = useState<
    { id: string; name: string; description?: string }[]
  >([]);

  useEffect(() => {
    fetchCustomers();
    fetchSubscriptions();
  }, []);

  const router = useRouter();

  const fetchCustomers = async () => {
    const { data, error } = await supabase.from("customers").select();
    if (error) {
      console.error("Error fetching customers:", error);
      return;
    }
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
      router.push("form/submitted");
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
    <div>
      <div className="mb-4">
        <Navbar />
      </div>

      <div className="flex justify-center items-center min-h-screen">
        <div className="w-full max-w-4xl px-4 mb-4 sm:py-8">
          <Form
            onFormSubmit={handleFormSubmit}
            subscriptionOptions={subscriptionOptions}
          />
        </div>
      </div>
    </div>
  );
}
