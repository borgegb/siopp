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

import {
  ExternalLink,
  NotepadText,
  PhoneIncoming,
  XOctagon,
} from "lucide-react";
import Image from "next/image";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Step() {
  const router = useRouter();

  // Function to handle navigation
  const navigateToForm = () => {
    router.push("/form");
  };

  return (
    <div className="w-full py-6">
      <div className="container grid max-w-3xl gap-6 px-4 md:px-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold tracking-tighter">
            Billig på{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400 sm:text-5xl">
              1-2-3!
            </span>
          </h1>
          <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">
            Slik får du kampanjepris på bredbånd og TV. Tilgjengelig for alle.
            Nye kunder starter på steg 2.
          </p>
        </div>
        <div className="grid items-stretch gap-6 lg:grid-cols-3 lg:gap-12">
          <div className="flex flex-col items-center justify-center space-y-2 text-center bg-white rounded-lg p-4 shadow flex-grow">
            <div className="flex items-center justify-center w-12 h-12 rounded-full border  border-gray-200 bg-gray-50 text-gray-900  dark:border-gray-800 dark:bg-gray-950 dark:text-gray-50">
              <XOctagon />
            </div>
            <div className="space-y-2">
              <h2 className="text-xl font-bold">Steg 1</h2>
              <p className=" text-gray-500 dark:text-gray-400 md:text-base md:leading-tight lg:text-lg lg:leading-tight">
                Avslutt ditt nåværende Telenor abonnement.
              </p>
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
            </div>
          </div>
          <div className="flex flex-col items-center justify-center space-y-2 text-center bg-white rounded-lg p-4 shadow flex-grow">
            {" "}
            <div className="flex items-center justify-center w-12 h-12 rounded-full border  border-gray-200 bg-gray-50 text-gray-900  dark:border-gray-800 dark:bg-gray-950 dark:text-gray-50">
              <NotepadText />
            </div>
            <div className="space-y-2">
              <h2 className="text-xl font-bold">Steg 2</h2>
              <p className=" text-gray-500 dark:text-gray-400 md:text-base md:leading-tight lg:text-lg lg:leading-tight">
                Velg ditt nye abonnement og registrer deg hos oss.
              </p>
              <div className="self-start w-full">
                <Button
                  variant="ghost"
                  className="text-sm"
                  size={"sm"}
                  onClick={navigateToForm}
                >
                  <a className="text-blue-500">Registrer deg</a>
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center space-y-2 text-center bg-white rounded-lg p-4 shadow flex-grow">
            {" "}
            <div className="flex items-center justify-center w-12 h-12 rounded-full border  border-gray-200 bg-gray-50 text-gray-900 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-50">
              <PhoneIncoming />
            </div>
            <div className="space-y-2">
              <h2 className="text-xl font-bold">Steg 3</h2>
              <p className=" text-gray-500 dark:text-gray-400 md:text-base md:leading-tight lg:text-lg lg:leading-tight">
                Bli oppringt av en kundebehandlere for å bekrefte bestillingen.
              </p>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-2xl text-center">
          <Button
            size={"lg"}
            variant={"outline"}
            className="text-lg"
            onClick={navigateToForm}
          >
            Bestill Nå!
          </Button>
        </div>
      </div>
    </div>
  );
}
