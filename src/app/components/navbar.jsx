"use client";

import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const isMenuOpenClass = isMenuOpen ? "h-auto" : "h-0";

  return (
    <>
      <div className="flex row items-center justify-between py-8 px-12 bg-primary">
        <div className="text-2xl text-white font-montserrat font-bold">
          PixGenerator
        </div>
        <div className="hidden lg:flex row items-center gap-4 text-base font-lato font-bold">
          <div className="text-white px-6 py-4 rounded-2xl">FAQ</div>
          <div className="text-white px-6 py-4 rounded-2xl">About Us</div>
          <div className="text-white px-6 py-4 rounded-2xl">Pricing</div>
          <div className="text-white border border-gray-500 border-solid px-6 py-4 border-4 rounded-2xl">
            Start Using AI
          </div>
        </div>
        <div className="block lg:hidden">
          {isMenuOpen ? (
            <button onClick={() => setMenuOpen(false)}>
              <Image src="/images/close_icon.png" width={48} height={48} />
            </button>
          ) : (
            <button onClick={() => setMenuOpen(true)}>
              <Image src="/images/menu_icon.png" width={48} height={48} />
            </button>
          )}
        </div>
      </div>
      <div className={"overflow-hidden " + isMenuOpenClass}>
        <div className="flex flex-col justify-between py-8 px-12 bg-primary">
          <div className="text-white px-6 py-4 rounded-2xl">FAQ</div>
          <div className="text-white px-6 py-4 rounded-2xl">About Us</div>
          <div className="text-white px-6 py-4 rounded-2xl">Pricing</div>
          <div className="text-white border border-gray-500 border-solid px-6 py-4 border-4 rounded-2xl">
            Start Using AI
          </div>
        </div>
      </div>
    </>
  );
}
