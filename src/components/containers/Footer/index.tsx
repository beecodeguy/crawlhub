import React from "react";
import FooterColumn from "./FooterColumn";
import Image from "next/image";
import { FaceBookIcon, LinkedInIcon, TwitterIcon } from "@/assets/icons";

const Footer = () => {
  return (
    <footer className="bg-primary text-white px-[80px] py-6 flex flex-col gap-3">
      <div className="flex gap-5 justify-between">
        <span className="typography-h4">CrawlerHub</span>
        <FooterColumn
          name="Solutions"
          linkList={[
            { id: 1, name: "Web Scraping", link: "" },
            { id: 2, name: "Web Scraping API", link: "" },
            { id: 3, name: "Data Abstraction", link: "" },
            { id: 4, name: "Consulting Service", link: "" },
          ]}
        />

        <FooterColumn
          name="Industries"
          linkList={[
            { id: 1, name: "E-Commerce", link: "" },
            { id: 2, name: "Housing and Real Estate", link: "" },
            { id: 3, name: "Retail and Trading", link: "" },
            { id: 4, name: "Management and Consulting", link: "" },
            { id: 5, name: "Analytics", link: "" },
          ]}
        />

        <FooterColumn
          name="Support"
          linkList={[
            { id: 1, name: "Help Center", link: "" },
            { id: 2, name: "FAQs", link: "" },
            { id: 3, name: "Blog", link: "" },
          ]}
        />

        <FooterColumn
          name="Company"
          linkList={[
            { id: 1, name: "About Us", link: "" },
            { id: 2, name: "Careers", link: "" },
            { id: 3, name: "Pricing", link: "" },
          ]}
        />
      </div>
      <div className="h-[1px] bg-light-grey" />
      <div className="flex justify-between text-[14px] leading-[20px]">
        <div className="flex gap-2">
          <span className="underline">Terms of Service</span>
          <span className="underline">Privacy Policy</span>
        </div>
        <div>&copy; 2024 CrawlerHub. All rights reserved.</div>
        <div className="flex gap-4">
          <Image src={FaceBookIcon} height={10} width={20} alt="Facebook" />
          <Image src={LinkedInIcon} height={10} width={20} alt="LinkedIn" />
          <Image src={TwitterIcon} height={10} width={20} alt="Twitter" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
