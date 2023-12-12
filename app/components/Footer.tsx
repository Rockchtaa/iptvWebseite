import React from "react";
import Logo from "./Logo";

function Footer() {
  return (
    <footer className="p-4 md:p-8 lg:p-10 bg-primary-950/10">
      <div className="mx-auto max-w-screen-xl text-center">
       
        <a href="/" className="flex items-center justify-center space-x-3 m-auto">
              <Logo  className="-translate-y-1 w-12 h-12"/>
              <span className=" text-2xl font-semibold whitespace-nowrap dark:text-white">
                IPTV
              </span>
            </a>
        <p className="my-6 text-gray-500 dark:text-gray-400">
          Open-source library of over 400+ web components and interactive
          elements built for better web.
        </p>
        <ul className="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 ">
              About
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Premium
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 ">
              Campaigns
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Blog
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Affiliate Program
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              FAQs
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Contact
            </a>
          </li>
        </ul>
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2021-2022{" "}
          <a href="#" className="hover:underline">
            Logo
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
