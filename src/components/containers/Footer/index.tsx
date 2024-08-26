import React from "react";
import FooterColumn from "./FooterColumn";

const Footer = () => {
  return (
    <footer className="h-[340px] bg-primary text-white px-[80px] py-[48px] flex flex-col gap-4">
      <div className="flex gap-5 justify-between">
        <span className="typography-h4">Footer</span>
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
      <div className="h-1 bg-[#F2F2F2]" />
      <div className="flex justify-between">
        <div className="flex gap-2">
          <span>Terms of Service</span>
          <span>Privacy Policy</span>
        </div>
        <div>2024 CrawlerHub. All rights reserved.</div>
        <div>Icons</div>
      </div>
    </footer>
  );
};

export default Footer;
