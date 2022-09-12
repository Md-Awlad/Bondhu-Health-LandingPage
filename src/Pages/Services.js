import React from "react";
import ServiceInfo from "./ServiceInfo";

const Services = () => {
  return (
    <div className="bg-[#F7F7F7] md:space-y-10 space-y-5 md:px-24 px-4">
      <div>
        <p className="text-xl text-[#642DFF] text-center font-medium capitalize">
          our services
        </p>
        <h2 className="text-center lg:text-4xl md:text-2xl text-xl text-[#1E1E1E] font-semibold capitalize">
          services for your health
        </h2>
      </div>
      {/* --serviceInfo-- */}
      <ServiceInfo />
    </div>
  );
};

export default Services;
