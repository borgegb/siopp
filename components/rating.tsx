import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { StarIcon } from "lucide-react";

export default function Rating() {
  return (
    <div className="py-2">
      <div className="text-center space-y-1 py-4">
        <h2 className="text-center text-3xl font-bold tracking-tighter sm:text-5xl">
          Kundeanmeldelser
        </h2>
        <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">
          Les hva våre kunder sier om oss.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 ">
        <div className="flex items-center justify-center gap-4 p-4 border rounded-lg w-full [&>img]:rounded-full bg-white">
          <div className="flex items-center justify-center gap-2">
            <Avatar className="w-16 h-16 border">
              <AvatarImage alt="@shadcn" src="/profil1-min.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
          <div className="grid gap-1.5 text-sm leading-loose w-full">
            <div className="flex justify-between items-center w-full">
              <div className="font-bold">Kari N.</div>
              <div className="flex items-center gap-2">
                <StarIcon className="w-5 h-5 fill-yellow-300 stroke-yellow-300" />
                <StarIcon className="w-5 h-5 fill-yellow-300 stroke-yellow-300" />
                <StarIcon className="w-5 h-5 fill-yellow-300 stroke-yellow-300" />
                <StarIcon className="w-5 h-5 fill-yellow-300 stroke-yellow-300" />
                <StarIcon className="w-5 h-5 fill-yellow-300 stroke-yellow-300" />
              </div>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Jeg er veldig fornøyd med min nye bredbånd og TV fra Telenor.
              Anbefales!
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-4 p-4 border rounded-lg w-full [&>img]:rounded-full bg-white">
          <div className="flex items-center justify-center gap-2">
            <Avatar className="w-16 h-16 border">
              <AvatarImage alt="@shadcn" src="/profil2-min.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
          <div className="grid gap-1.5 text-sm leading-loose w-full">
            <div className="flex justify-between items-center w-full">
              <div className="font-bold">Christian N.</div>
              <div className="flex items-center gap-2">
                <StarIcon className="w-5 h-5 fill-yellow-300 stroke-yellow-300" />
                <StarIcon className="w-5 h-5 fill-yellow-300 stroke-yellow-300" />
                <StarIcon className="w-5 h-5 fill-yellow-300 stroke-yellow-300" />
                <StarIcon className="w-5 h-5 fill-yellow-300 stroke-yellow-300" />
                <StarIcon className="w-5 h-5 fill-yellow-300 stroke-yellow-300" />
              </div>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Enkelt og greit. Fikk hjelp med alt jeg lurte på. Anbefales!
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-4 p-4 border rounded-lg w-full [&>img]:rounded-full bg-white">
          <div className="flex items-center justify-center gap-2">
            <Avatar className="w-16 h-16 border">
              <AvatarImage alt="@shadcn" src="/profil3-min.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
          <div className="grid gap-1.5 text-sm leading-loose w-full">
            <div className="flex justify-between items-center w-full">
              <div className="font-bold">Tore N.</div>
              <div className="flex items-center gap-2">
                <StarIcon className="w-5 h-5 fill-yellow-300 stroke-yellow-300" />
                <StarIcon className="w-5 h-5 fill-yellow-300 stroke-yellow-300" />
                <StarIcon className="w-5 h-5 fill-yellow-300 stroke-yellow-300" />
                <StarIcon className="w-5 h-5 fill-yellow-300 stroke-yellow-300" />
                <StarIcon className="w-5 h-5 fill-yellow-300 stroke-yellow-300" />
              </div>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Fikk kampanjepris som eksisterende kunde. Anbefales!
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-4 p-4 border rounded-lg w-full [&>img]:rounded-full bg-white">
          <div className="flex items-center justify-center gap-2">
            <Avatar className="w-16 h-16 border">
              <AvatarImage alt="@shadcn" src="/profil4-min.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
          <div className="grid gap-1.5 text-sm leading-loose w-full">
            <div className="flex justify-between items-center w-full">
              <div className="font-bold">Per N.</div>
              <div className="flex items-center gap-2">
                <StarIcon className="w-5 h-5 fill-yellow-300 stroke-yellow-300" />
                <StarIcon className="w-5 h-5 fill-yellow-300 stroke-yellow-300" />
                <StarIcon className="w-5 h-5 fill-yellow-300 stroke-yellow-300" />
                <StarIcon className="w-5 h-5 fill-yellow-300 stroke-yellow-300" />
                <StarIcon className="w-5 h-5 fill-yellow-300 stroke-yellow-300" />
              </div>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Etter mange år med orginal pris som eksisterende kunde, fikk jeg
              mulighet til å få kampanjepris. Sparer mye penger på å si opp mitt
              gamle abonnementet.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
