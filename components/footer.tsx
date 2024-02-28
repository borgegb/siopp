import Link from "next/link";
import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-4 py-6 max-w-4xl">
        <div className="flex flex-col items-center text-center :space-y-0 md:flex-row md:justify-between md:text-left">
          <div className="text-gray-700 flex items-center justify-center mb-4 md:mb-0">
            Laget med
            <Heart className="mx-1 text-red-500" />
            av siOpp
          </div>
          <div className="flex flex-row items-center space-x-4">
            <Link href="/privacy">
              <span className="text-gray-700 hover:text-gray-900 transition-colors cursor-pointer">
                Personvern & Tjenestevilkår
              </span>
            </Link>
          </div>
          <div className="text-gray-700 mt-4 md:mt-0">
            &copy; {new Date().getFullYear()} siOpp
          </div>
        </div>
      </div>
    </footer>
  );
}
