import React from "react";
import Devices from "./Devices";
import { CustomSwiper } from "./Swiper";
import Image from "next/image";

function Hero() {
  return (
    <section className="bg-image-1 h-screen bg-no-repeat bg-cover bg-bottom">
      <div className="bg-bgPrimary bg-opacity-70 h-full flex flex-col justify-end pb-10 items-center">
        <div className="lg:py-16 text-center max-w-3xl w-full py-6 px-10 mt-8">
          <a
            href="#pricing"
            className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-10 text-sm rounded-full bg-gray-800 text-white hover:bg-gray-700"
            role="alert"
          >
            <span className="text-xs bg-primary-600 rounded-full text-white px-4 py-1.5 mr-3">
              New
            </span>{" "}
            <span className="text-sm font-medium">
              New Monthly price
            </span>
            <svg
              className="ml-2 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <h1 className="mb-8 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl text-white">
            All-In-One Quality IPTV Service
          </h1>
          <p className="mb-12 text-lg font-normal lg:text-xl text-gray-400">
            Enjoy your time with excellent image quality up to 4K, on
            any device, anytime and anywhere, with over +18,000
            channels, +88,000 VOD and uptime 100%
          </p>
          <div className="flex flex-col mb-10 lg:mb-24 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <a
              href="#"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4  focus:ring-primary-900"
            >
              Free Trial
              <svg
                className="ml-2 -mr-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href="#pricing"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center rounded-lg border  focus:ring-4 text-white border-gray-700 hover:bg-gray-700 focus:ring-gray-800"
            >
              <svg
                className="mr-2 -ml-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
              </svg>
              Get you subscription
            </a>
          </div>
          <div>
            <Image
              className="m-auto"
              width={400}
              height={30}
              src="/images/devices.png"
              alt="devices"
            />
            {/* <Devices /> */}
          </div>
        </div>
        <CustomSwiper />
      </div>
    </section>
  );
}

export default Hero;
