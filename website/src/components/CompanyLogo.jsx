import React from "react";
import slack from "../assets/slack.png";
import amazon from "../assets/amazon.png";
import woocommerce from "../assets/woocommerce.png";
import meundies from "../assets/meundies.png";
import sitepoint from "../assets/sitepoint.png";
const CompanyLogo = () => {
  const logos = [slack, amazon, woocommerce, meundies, sitepoint];
  return (
    <div className="w-full overflow-hidden gap-8 container mx-auto py-20 flex sm:flex-row flex-col sm:items-center items-start">
      {/* text */}
      <div className="w-[300px] shrink-0 px-5 text-gray-600 border-l-4 border-blue-500 bg-white py-2 z-10 sm:text-base text-xl font-semibold text-left">
        Proud partner at <br />
        Hubspot & Segment
      </div>
      {/* logo */}
      <div className="flex animate-marquee whitespace-nowrap">
        {logos.map((logo, index) => (
          <img
            src={logo}
            alt=""
            className="mx-12 h-8 w-36 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
          />
        ))}
        {logos.map((logo, index) => (
          <img
            src={logo}
            alt=""
            className="mx-12 h-8 w-36 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
          />
        ))}
      </div>
    </div>
  );
};

export default CompanyLogo;
