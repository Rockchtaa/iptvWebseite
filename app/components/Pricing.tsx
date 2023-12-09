import React from "react";

function Pricing() {
  return (
    <section className="bg-white dark:bg-bgPrimary" id="pricing">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold  text-white">
            Choose your plan
          </h2>
          <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
            We have the plan that matched you need.
          </p>
        </div>
        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
          {/* Pricing Card */}
          <div className="flex w-full flex-col p-6 mx-auto max-w-lg text-center rounded-lg border  shadow border-primary-950 xl:p-8 bg-primary-950/30 text-white">
            <h3 className="mb-4 text-2xl font-semibold">
              LIMITED OFFER !!
            </h3>
            <p className="font-light sm:text-lg text-gray-400">
              Starter plan
            </p>
            <div className="flex justify-center items-baseline my-8">
              <span className="mr-2 text-5xl font-extrabold">
                $29
              </span>
              <span className="text-gray-500 dark:text-gray-400">
                for 3 month
              </span>
            </div>
            {/* List */}
            <PlanDescription />
            <a
              href="#"
              className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900"
            >
              Get started
            </a>
          </div>
          {/* Pricing Card */}
          <div className="flex w-full flex-col p-6 mx-auto max-w-lg text-center rounded-lg border  shadow border-primary-950 xl:p-8 bg-primary-950/30 text-white">
            <h3 className="mb-4 text-2xl font-semibold">
              LIMITED OFFER !!
            </h3>
            <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
              Professional plan.
            </p>
            <div className="flex justify-center items-baseline my-8">
              <span className="mr-2 text-5xl font-extrabold">
                $69
              </span>
              <span className="text-gray-500 dark:text-gray-400">
                for 6 month
              </span>
            </div>
            {/* List */}
            <PlanDescription />
            <a
              href="#"
              className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900"
            >
              Get started
            </a>
          </div>
          {/* Pricing Card */}
          <div className="flex w-full flex-col p-6 mx-auto max-w-lg text-center rounded-lg border  shadow border-primary-950 xl:p-8 bg-primary-950/30 text-white">
            <h3 className="mb-4 text-2xl font-semibold">
              LIMITED OFFER !!
            </h3>
            <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
              Premium plan.
            </p>
            <div className="flex justify-center items-baseline my-8">
              <span className="mr-2 text-5xl font-extrabold">
                $499
              </span>
              <span className="text-gray-500 dark:text-gray-400">
                for 12 month
              </span>
            </div>
            {/* List */}
            <PlanDescription />
            <a
              href="#"
              className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900"
            >
              Get started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

const PlanDescription = () => {
  const List: string[] = [
    "+ 21.000 Premium Channels",
    "+ 93.000 Movies & TV Shows (VOD)",
    "Hulu, Pluto, Videoland, Disney, HBO, Apple TV",
    "Quality 4K/FHD/HD/SD",
    "Compatible with ALL DEVICES!",
    "PPV Live Channels",
    "NBA, NHL, NFL Package",
    "Anti-Freeze Technology",
    "Active Support 24/7",
    "Adults Channels",
  ];

  return (
    <ul role="list" className="mb-8 space-y-4 text-left">
      {List.map((desc, idx) => (
        <li key={idx} className="flex items-center space-x-3">
          {/* Icon */}
          <svg
            className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
          <span>{desc}</span>
        </li>
      ))}
    </ul>
  );
};

export default Pricing;
