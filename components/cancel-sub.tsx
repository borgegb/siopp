"use client";

import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function CancelSub() {
  const router = useRouter();

  // Function to handle navigation
  const navigateToForm = () => {
    router.push("/form");
  };
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="ghost" className="text-sm" size={"sm"}>
            <a className="text-blue-500"> Se hvordan</a>
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md rounded-lg">
          {" "}
          <DialogHeader>
            <DialogTitle>Avslutt abonnement</DialogTitle>
            <DialogDescription>
              Følg stegene for å avslutte ditt nåværende abonnement hos Telenor.
              Dette er viktig for at du skal få kampanjepris. Gjelder kun
              eksisterende Telenor kunder.
            </DialogDescription>
          </DialogHeader>
          <ScrollArea className="w-full max-h-[80vh] rounded-md border p-4">
            <div className="space-y-4">
              <div className="flex flex-col items-start space-y-2">
                <h3 className="text-lg font-semibold">
                  Steg 1: Gå til mine sider
                </h3>
                <p>
                  Følg linken og logg in på minesider Telenor.{" "}
                  <a
                    href="https://www.telenor.no/minesider"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-6 w-6 ml-1" />

                    <Image
                      src="/steg1-min.png"
                      alt="Steg 1"
                      width={500}
                      height={500}
                    />
                  </a>
                </p>
              </div>
              <div className="flex flex-col items-start space-y-2">
                <h3 className="text-lg font-semibold">
                  Steg 2: Velg Internett og TV
                </h3>
                <p>Trykk på "Internett og TV" ikonet.</p>
                <Image
                  src="/steg2-min.png"
                  alt="Steg 2"
                  width={500}
                  height={500}
                />
              </div>
              <div className="flex flex-col items-start space-y-2">
                <h3 className="text-lg font-semibold">
                  Steg 3: Velg abonnement
                </h3>
                <p>Velg det abonnementet du ønsker å avslutte.</p>
                <Image
                  src="/steg3-min.png"
                  alt="Steg 3"
                  width={500}
                  height={500}
                />
              </div>
              <div className="flex flex-col items-start space-y-2">
                <h3 className="text-lg font-semibold">
                  Steg 4: Avslutt abonnement
                </h3>
                <p>
                  Klikk på "Avslutt abonnement" og følg instruksjonene for å
                  bekrefte.
                </p>
              </div>
              <div className="flex flex-col items-stretch space-y-2">
                <h3 className="text-lg font-semibold">
                  Steg 5: Få Kampanjepris
                </h3>
                <p>
                  Velg og bestill ditt nye abonnement hos oss for å få
                  kampanjepris.
                </p>

                <Button
                  variant={"default"}
                  className="w-full"
                  onClick={navigateToForm}
                >
                  Til bestillingsskjema
                </Button>
              </div>
            </div>

            <DialogFooter className="sm:justify-start py-2">
              <DialogClose asChild>
                <Button type="button" variant="secondary" className="w-full">
                  Lukk
                </Button>
              </DialogClose>
            </DialogFooter>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </>
  );
}
