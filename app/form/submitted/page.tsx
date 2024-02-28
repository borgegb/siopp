import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function Component() {
  return (
    <div className="flex items-center justify-center min-h-screen flex-col space-y-4 p-4 text-center">
      <div className="space-y-2 flex flex-col items-center justify-center">
        <span role="img" aria-label="celebration" className="text-8xl">
          🥳
        </span>
        <h1 className="text-3xl font-bold tracking-tighter">
          Takk for din hendvendelse!
        </h1>
        <p className="text-gray-500 dark:text-gray-400">
          Du blir kontaktet av en kundebehandlere for å sluttføre bestilling av
          abonement.
        </p>
      </div>
      <Link href="/" className="mt-4">
        <Button variant={"link"} className="text-blue-400">
          <ArrowLeft className="mr-2" />
          Tilbake til hovedsiden
        </Button>
      </Link>
    </div>
  );
}
