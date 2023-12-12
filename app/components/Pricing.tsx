import React from "react";
import PricingCard from "./PricingCard";
import { plans } from "../data/plans";



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
          {plans.map((plan) => (
            <PricingCard {...plan} key={plan.title} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
