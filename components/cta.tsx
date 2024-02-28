"use client";

import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

export default function CTA() {
  const router = useRouter();

  // Function to handle navigation
  const navigateToForm = () => {
    router.push("/form");
  };
  return (
    <div className="w-full bg-blue-100  p-6 shadow-sm flex flex-col items-center text-center">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
        Kampanjepriser!
      </h2>
      <p className="text-xl">
        Fra <span className="bg-yellow-200 p-0.5 text-2xl">599,-</span>{" "}
        inkludert leie av utstyr!
      </p>
      <p className="text-lg mb-6">
        Spar <span className="text-red-500 font-bold text-2xl">8244,-</span> i
        året!
      </p>

      <Button
        size={"lg"}
        variant={"salesButton"}
        className="text-lg"
        onClick={navigateToForm}
      >
        Bestill Nå!
      </Button>
    </div>
  );
}
