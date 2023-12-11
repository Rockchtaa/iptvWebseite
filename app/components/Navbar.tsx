import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import { useRouter } from "next/router";

function Navbar() {
  // "use client"
  // // const router = useRouter();
  // console.log(router.pathname);

  return (
    <header className=" antialiased max-w-screen-2xl ">
      <nav className="absolute px-4 lg:px-6 bg-transparent top-0 left-0 right-0   w-full hover:bg-primary-950/20 ">
        <div className="flex flex-wrap justify-between lg:mx-52 h-20">
          <div className="flex py-2 justify-start items-center">
            <button
              aria-expanded="true"
              aria-controls="sidebar"
              className="p-2 mr-2 text-gray-600 rounded-lg cursor-pointer lg:hidden hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 dark:focus:bg-gray-700 focus:ring-2 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <svg
                className="w-[18px] h-[18px]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
              <span className="sr-only">Toggle sidebar</span>
            </button>
            <a
              href="/"
              className="flex mr-4 items-center justify-center"
            >
              <Logo />
              <span className="translate-y-1 text-2xl font-semibold whitespace-nowrap dark:text-white">
                IPTV
              </span>
            </a>
          </div>
          <div className="hidden gap-3 sm:flex h-full">
            <Link
              href={"/#pricing"}
              className="px-5 h-full hover:bg-bgPrimary/30  hover:cursor-pointer flex justify-center items-center "
            >
              Plans
            </Link>
            <Link
              href={"/#pricing"}
              className="px-5 h-full hover:bg-bgPrimary/30  hover:cursor-pointer flex justify-center items-center "
            >
              Tutorial
            </Link>
            <Link
              href="/privacy-policy"
              className="px-5 h-full hover:bg-bgPrimary/30  hover:cursor-pointer flex justify-center items-center "
            >
              Privacy Policy
            </Link>
            <Link
              href={"/#pricing"}
              className="px-5 h-full hover:bg-bgPrimary/30  hover:cursor-pointer flex justify-center items-center "
            >
              About
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
