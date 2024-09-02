import { AboutUs } from "@/assets/images";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const OurStory = () => (
  <div className="container mx-auto py-3 flex flex-col gap-2 text-center mb-[128px]">
    <span className="typography-h2">Our Story</span>
    <p className="typography-h5">
      Our journey began with the recognition that businesses today often
      struggle to extract the right data from the web. We saw an opportunity to
      fill this gap by offering a service that’s both highly customizable and
      user-friendly. At CrawlerHUB, we don’t provide generic data. we extract
      the specific information you need from the websites you choose, delivering
      it in a format that suits your operations.
      <br /> <br />
      Since our inception, we’ve worked with a diverse range of clients, from
      startups to large enterprises, all of whom share a common need: precise,
      reliable data extracted from their chosen sources. Our growth and success
      are built on our commitment to delivering exceptional service, innovative
      solutions, and unmatched customer support.
    </p>
  </div>
);

const AboutUsStory = () => {
  return (
    <>
      <div className="container mx-auto bg-gradient-custom flex items-center mb-[24px]">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <span className="typography-h2">About Us</span>
            <p className="typography-h5">
              Welcome to CrawlerHub, a company founded in 2024 with a clear
              purpose to provide precise, customized data extraction services
              based on the specific websites and sources our clients provide.
              Our reach is global, serving businesses of all sizes and across
              various industries. Our goal is to help you transform the vast
              resources of the web into the exact data you need, tailored to
              your unique requirements.
            </p>
          </div>
          <Button className="primary w-fit">Join Us Today</Button>
        </div>
        <Image src={AboutUs} height={398} width={584} alt="" />
      </div>
      <OurStory />
    </>
  );
};

export default AboutUsStory;
