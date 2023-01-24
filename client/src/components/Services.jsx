import React from "react";
import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";

const ServiceCard = ({ color, title, icon, subtitle }) => (
  <div className="flex flex-row justify-start items-start white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl">
    <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>
      {icon}
    </div>
    <div className="ml-5 flex flex-col flex-1">
      <h3 className="mt-2 text-white text-lg">{title}</h3>
      <p className="mt-1 text-white text-sm md:w-9/12">
        {subtitle}
      </p>
    </div>
  </div>
);

const Services = () => (
  <div className="flex w-full justify-center items-center gradient-bg-services">
    <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
      <div className="flex-1 flex flex-col justify-start items-start">
        <h1 className="text-white text-3xl sm:text-5xl py-2 text-gradient ">
        Our exchange offers 
          <br />
          low trading fees
        </h1>
        <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base">
        Our security protocols are top-notch and have been designed to keep your funds safe.
        We also offer 24/7 customer support and a quick and easy signup process.
        </p>
      </div>

      <div className="flex-1 flex flex-col justify-start items-center">
        <ServiceCard
          color="bg-[#2952E3]"
          title="Best transaction rate"
          icon={<BsShieldFillCheck fontSize={21} className="text-red" />}
          subtitle="Our exchange rate offers the best value on the market, guaranteeing you the best rates for your currency exchange needs."
        />
  
        <ServiceCard
          color="bg-[#F84550]"
          title="Fastest transactions"
          icon={<RiHeart2Fill fontSize={21} className="text-white" />}
          subtitle="Send your crypto quickly and securely with our state-of-the-art crypto exchange platform,
          offering fast transactions and low fees."
        />
      </div>
    </div>
  </div>
);

export default Services;
