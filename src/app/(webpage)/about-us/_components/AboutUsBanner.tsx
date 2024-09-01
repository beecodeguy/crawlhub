import { AboutUs } from "@/assets/images";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const AboutUsBanner = () => {
  return (
    <div className="container mx-auto bg-gradient-custom flex items-center mb-[24px]">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <span className="typography-h2">About Us</span>
          <p className="typography-h5">
            Welcome to CrawlerHub, a company founded in 2024 with a clear
            purpose to provide precise, customized data extraction services
            based on the specific websites and sources our clients provide. Our
            reach is global, serving businesses of all sizes and across various
            industries. Our goal is to help you transform the vast resources of
            the web into the exact data you need, tailored to your unique
            requirements.
          </p>
        </div>
        <Button className="primary w-fit">Join Us Today</Button>
      </div>
      <Image src={AboutUs} height={398} width={584} alt="" />
    </div>
  );
};

export default AboutUsBanner;
