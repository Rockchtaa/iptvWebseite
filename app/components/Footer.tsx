import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import headerNavLinks from "../data/headerNavLinks";

function Footer() {
  return (
    <footer className="p-4 md:p-8 lg:p-10 bg-primary-950/10">
      <div className="mx-auto max-w-screen-xl text-center">
        <a
          href="/"
          className="flex items-center justify-center space-x-3 m-auto"
        >
          <Logo className="-translate-y-1 w-12 h-12" />
          <span className=" text-2xl font-semibold whitespace-nowrap text-white">
            IPTV
          </span>
        </a>
        <p className="my-6 text-gray-400">
          Enjoy your time with excellent image quality up to 4K, on any device,
          anytime and anywhere, with over +18,000 channels, +88,000 VOD and
          uptime 100%
        </p>
        <ul className="flex flex-wrap justify-center items-center mb-6 text-white">
          {headerNavLinks.map((link) => (
            <li key={link.title}>
              <Link
                href={link.href}
                className="block font-medium hover:cursor-pointer mr-4 hover:underline md:mr-6 "
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex  justify-center text-sm sm:text-center text-gray-400 space-x-2">
          <span>Copyright © 2023 |</span>
          <a href="/" className="flex items-center justify-center gap-2">
            <Logo className=" w-4 h-4" />
            <span className=" text-sm font-semibold whitespace-nowrap text-white">
              IPTV
            </span>
          </a>
          <span>- Buy Best Premium Subscription</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
