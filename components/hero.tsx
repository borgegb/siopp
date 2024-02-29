"use client";

import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import Image from "next/legacy/image";

export default function Hero() {
  const router = useRouter();

  // Function to handle navigation
  const navigateToForm = () => {
    router.push("/form");
  };
  return (
    <section className="relative w-full">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/hero5-min.png"
          alt="Background"
          layout="fill"
          objectFit="cover"
        />
        {/* Black layer with opacity */}
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </div>
      <div className="container relative z-10 mx-auto px-4 md:px-6 max-w-4xl">
        <div className="flex flex-col items-center space-y-4 text-center py-12 md:py-24">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-white dark:text-blue-800">
            Kampanjepris på <br className="sm:hidden" /> Bredbånd & TV!
          </h1>
          <p className="mx-auto max-w-[700px] text-white md:text-xl dark:text-gray-400 ">
            Få laveste pris tilgjengelig.
          </p>
          <div className="w-full max-w-sm space-y-2">
            <Button
              size={"lg"}
              variant={"secondary"}
              className="text-lg"
              onClick={navigateToForm}
            >
              Bestill Nå!
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
