import Link from "next/link";

interface PrincigCardProp {
  title: string;
  price: number;
  duration: number;
  link: string;
}
const PricingCard = ({ title, price, duration, link }: PrincigCardProp) => {
  return (
    <div className="flex w-full flex-col p-6 mx-auto max-w-lg text-center rounded-lg border  shadow border-primary-950 xl:p-8 bg-primary-950/30 text-white">
      <h3 className="mb-4 text-2xl font-semibold">LIMITED OFFER !!</h3>
      <p className="font-light sm:text-lg text-gray-400">
        {title}
      </p>
      <div className="flex justify-center items-baseline my-8">
        <span className="mr-2 text-5xl font-extrabold">${price}</span>
        <span className="text-gray-400">
          for {duration} month
        </span>
      </div>
      {/* List */}
      <PlanDescription />
      <Link
        rel="noopener noreferrer"
        target="_blank"
        href={link}
        className=" bg-primary-600 hover:bg-primary-700 focus:ring-4  font-medium rounded-lg text-sm px-5 py-2.5 text-center text-white  focus:ring-primary-900"
      >
        Buy
      </Link>
    </div>
  );
};

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
            className="flex-shrink-0 w-5 h-5 text-green-400"
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

export default PricingCard;
