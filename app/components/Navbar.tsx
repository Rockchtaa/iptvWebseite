import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import GoogleTranslate from "./GoogleTranslate";
import MobileNav from "./MobileNav";
import headerNavLinks from "../data/headerNavLinks";

function Navbar() {
  return (
    <header className="antialiased max-w-screen-2xl ">
      <nav className="absolute px-4 lg:px-6 bg-transparent top-0 left-0 right-0  w-full hover:bg-primary-950/20  ">
        <div className="flex flex-wrap  items-center  justify-between lg:mx-52 h-20 ">
          <div className="flex justify-center items-center ">
            <a href="/" className="flex items-center justify-center space-x-3 m-auto">
              <Logo  className="-translate-y-1 w-12 h-12"/>
              <span className=" text-2xl font-semibold whitespace-nowrap dark:text-white">
                IPTV
              </span>
            </a>
          </div>
          <div className="flex items-center justify-center leading-5 space-x-4 sm:space-x-6">
            {headerNavLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="hidden sm:block font-medium hover:cursor-pointer "
              >
                {link.title}
              </Link>
            ))}
            <GoogleTranslate />
          </div>
          <MobileNav />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
