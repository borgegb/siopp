"use client";

import { useRouter } from "next/navigation";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
import { Button } from "@/components/ui/button";

import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function AccordionComponent() {
  const router = useRouter();

  // Function to handle navigation
  const navigateToForm = () => {
    router.push("/form");
  };
  return (
    <div>
      <h2 className="text-xl md:text-4xl font-bold text-center my-4">
        Ofte Stilte Spørsmål
      </h2>
      <div>
        <Accordion type="single" collapsible className="bg-white px-4">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              Hvorfor må jeg avslutte mitt abonnement?
            </AccordionTrigger>
            <AccordionContent>
              Leverandørene sine kampanjer gjelder kun nye kunder. Når du
              avslutter ditt eksisterende abonnement, vil du bli regnet som en
              ny kunde og få tilgang til kampanjeprisen. Vi hjelper deg med å
              avslutte ditt eksisterende abonnement hos din nåværende
              leverandør.
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="ghost" className="text-sm" size={"sm"}>
                    <a className="text-blue-500"> Se hvordan</a>
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md md:max-w-xl lg:max-w-xl rounded-lg">
                  {" "}
                  <DialogHeader>
                    <DialogTitle>Avslutt abonnement</DialogTitle>
                    <DialogDescription>
                      Følg stegene for å avslutte ditt nåværende abonnement hos
                      Telenor. Dette er viktig for at du skal få kampanjepris.
                      Gjelder kun eksisterende Telenor kunder.
                    </DialogDescription>
                  </DialogHeader>
                  <ScrollArea className="w-full max-h-[80vh] rounded-md border p-4">
                    <div className="space-y-4">
                      <div className="flex flex-col items-start space-y-2">
                        <h3 className="text-lg font-semibold">
                          Steg 1: Gå til mine sider
                        </h3>
                        <p>
                          Følg linken og logg in på minesider Telenor.
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
                        <p>Trykk på Internett og TV ikonet.</p>
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
                          Klikk på Avslutt abonnement og følg instruksjonene for
                          å bekrefte.
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
                          variant={"salesButton"}
                          className="w-full"
                          onClick={navigateToForm}
                        >
                          Til bestillingsskjema
                        </Button>
                      </div>
                    </div>

                    <DialogFooter className="sm:justify-start py-2">
                      <DialogClose asChild>
                        <Button
                          type="button"
                          variant="secondary"
                          className="w-full"
                        >
                          Lukk
                        </Button>
                      </DialogClose>
                    </DialogFooter>
                  </ScrollArea>
                </DialogContent>
              </Dialog>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>
              Hvor mye kan jeg spare på kampanjeprisen?
            </AccordionTrigger>
            <AccordionContent>
              Du kan spare opptil 8244 kr i året på å velge kampanjeprisen.
              Dette er avhengig av hvilket abonnement du har i dag og hvilket
              abonnement du velger hos oss. Vi hjelper deg med å finne det beste
              tilbudet for deg.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              Hvorfor blir jeg oppringt av andre leverandører?
            </AccordionTrigger>
            <AccordionContent>
              For at du skal få det beste tilbudet, samarbeider vi med flere
              leverandører. Disse vil kontakte deg for å gi deg et tilbud. Ofte
              er det slik at du får et bedre/billigere tilbud enn det Telenor
              kan tilby. Du står fritt til å velge hvilket tilbud du ønsker å
              benytte deg av.
            </AccordionContent>
          </AccordionItem>

          {/* Add new AccordionItem here for additional information */}
          <AccordionItem value="item-4">
            <AccordionTrigger>
              Hvor lenge varer kampanjeprisen?
            </AccordionTrigger>
            <AccordionContent>
              Varigheten på kampanjeprisen varierer fra 6 til 12 måneder. Det er
              du i sammarbeid med kunderådgiveren som bestemmer varigheten på
              kampanjeprisen. Vanligvis er det 12 måneder, men vi har snakket
              med kunder som har fått kampanjepris i 24 måneder. Ettter
              kampanjeperioden vil prisen gå opp til ordinær pris.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>
              Er det farlig å avslutte mitt eksisterende abonnement?
            </AccordionTrigger>
            <AccordionContent>
              Nei, så lenge du ikke er i en bindingstid er det ingen
              konsekvenser for å avslutte ditt eksisterende abonnement. Du
              bestemmer over din egen infrastruktur og kan bytte leverandør når
              du vil.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>
              Tjener dere penger på at jeg avslutter mitt abonnement?
            </AccordionTrigger>
            <AccordionContent>
              Nei, vi tjener ikke penger på at du avslutter ditt abonnement. Vi
              samarbeider med flere leverandører og får en liten provisjon for å
              formidle deg videre til disse. Dette er en del av vår
              forretningsmodell. Vi har som mål å hjelpe deg med å finne det
              beste tilbudet for deg. Du står fritt til å takke ja eller nei til
              alle tilbudene du får.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
