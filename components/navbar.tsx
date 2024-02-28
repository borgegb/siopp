"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import Head from "next/head";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const menuRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const menus = [
    { title: "Hvordan", path: "/#how" },
    { title: "Priser", path: "/#price" },
    { title: "Spørsmål", path: "/#faq" },
    { title: "Bestill Nå", path: "/form" },
  ];

  // Function to handle menu item click
  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="bg-white w-full border-b">
        <div className="items-center px-4 max-w-screen-xl mx-auto">
          <div className="flex items-center justify-between py-3">
            <div className="sm:relative invisible">
              <Button variant="ghost" className="opacity-0">
                {/* Placeholder for spacing */}
              </Button>
            </div>
            <Link href="/">
              <h1
                style={{ fontFamily: "'Work Sans', sans-serif" }}
                className="text-2xl tracking-tight md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400 py-1 px-2 border-2 border-blue-300 rounded shadow-md transform rotate-2 transition-transform duration-200 ease-in-out"
              >
                siOpp
              </h1>
            </Link>
            <div className="sm:relative">
              <Button
                variant="ghost"
                className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
                style={{ width: "40px", height: "40px" }} // Adjusted to a smaller fixed width and height
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}{" "}
                {/* Icons size adjusted if necessary */}
              </Button>
              {/* Conditional rendering of the menu */}
              {isMenuOpen && (
                <div
                  ref={menuRef}
                  className="absolute right-0 mt-2 py-2 md:w-48 w-full bg-white rounded-md shadow-xl z-20 flex justify-center items-center"
                >
                  <ul className="">
                    {menus.map((item, idx) => (
                      <li key={idx} className="mb-2 last:mb-0">
                        <Link href={item.path}>
                          <span onClick={handleMenuItemClick}>
                            <Button
                              variant={
                                item.title === "Bestill Nå"
                                  ? "default"
                                  : "ghost"
                              }
                            >
                              {item.title}
                            </Button>
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
