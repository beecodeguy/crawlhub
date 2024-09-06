import { CharmPick } from "@/assets/icons";
import Image from "next/image";
import React from "react";

interface TListItem {
  text: string;
}

const ListItem: React.FC<TListItem> = ({ text }) => (
  <span className="flex gap-1">
    <span className="bg-[#ffeeff] rounded-full p-[2px]">
      <Image src={CharmPick} height={18} width={18} alt="" />
    </span>{" "}
    <span>{text}</span>
  </span>
);

const ContactUsDescription = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-2">
        <span className="typography-h5">
          Your Data, Our Expertise. Simplified for Success.
        </span>
        <p className="leading-[20px] text-[14px]">
          At Crawlerhub, we specialize in delivering customized data extraction
          solutions that are built around your needs. Whether you're dealing
          with massive datasets or just need a specific extraction, our
          streamlined process ensures you get accurate, actionable data—fast.
        </p>
      </div>
      <div className="flex flex-col gap-2 mt-2">
        <span className="typography-h5">Why Choose Us?</span>
        <div className="leading-[20px] text-[14px] flex flex-col gap-3">
          <ListItem text="Tailored to your needs and requirements" />
          <ListItem text="Transparent Pricing, No Surprises" />
          <ListItem text="Data at any Scale to any industries" />
          <ListItem text="Simplified, accurate and fast!" />
        </div>
      </div>
      <div className="flex flex-col gap-2 mt-6">
        <span className="typography-h5">
          Ready to Extract the Data You Need?
        </span>
        <p className="leading-[20px] text-[14px]">
          Get in touch with us today and experience a hassle-free approach to
          data extraction.{" "}
          <span className="text-primary">
            Let us handle the complexity while you focus on making data-driven
            decisions that grow your business.
          </span>{" "}
          Fill out the form, and let’s start your project!
        </p>
      </div>
    </div>
  );
};

export default ContactUsDescription;
