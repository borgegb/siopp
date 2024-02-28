import Link from "next/link";
import { GiftIcon } from "lucide-react";
import { Button } from "./ui/button";

export default function Banner() {
  return (
    <div className="bg-blue-100 px-4">
      <div className="py-2 md:py-3 flex items-center justify-center">
        <GiftIcon className="h-5 w-5 mr-2 text-black hidden sm:block " />
        <p className="text-center text-lg font-semibold text-black dark:text-gray-50 leading-tight">
          Bredbånd & TV fra Telenor. Kampanjepris 599,-/mnd!!
        </p>
        <div className="ml-4">
          <Link href="/form" prefetch>
            <Button variant={"salesButton"}>Bestill Nå!</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
