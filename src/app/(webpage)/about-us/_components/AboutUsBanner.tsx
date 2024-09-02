import { JoinUsJourney, OurExpertise } from "@/assets/images";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React from "react";

interface IProps {
  reverse?: boolean;
  children: React.ReactNode;
  title: string;
  icon: string | StaticImport;
}

const BannerComponent: React.FC<IProps> = ({
  reverse,
  children,
  title,
  icon,
}) => (
  <div className={`flex ${reverse ? "flex-row-reverse" : ""} gap-3`}>
    <div className="flex flex-col gap-2">
      <span className="typography-h2">{title}</span>
      <p className="typography-h5">
        {children}
      </p>
    </div>
    <Image src={icon} height={595} width={584} alt="" />
  </div>
);

const AboutUsBanner = () => {
  return (
    <div className="container mx-auto flex flex-col gap-[128px]">
      <BannerComponent reverse title="Our Expertise" icon={OurExpertise}>
        At CrawlerHub, we specialize in extracting data from the web in a way
        that is precise, efficient, and tailored to your specific needs. Our
        expertise spans across a variety of industries, including e-commerce,
        finance, healthcare, travel, and market research. Whether you need
        real-time data monitoring, historical data retrieval, or custom web
        crawlers, we have the skills and technology to deliver exactly what you
        need, when you need it. <br />
        <br /> Our team is composed of experienced professionals with deep
        technical knowledge and a passion for data. We stay ahead of the curve
        by continuously updating our tools and techniques, ensuring that we can
        handle even the most complex data extraction challenges. But it’s not
        just about the technology—we believe in building strong, lasting
        relationships with our clients, based on trust, transparency, and a
        shared commitment to success.
      </BannerComponent>
      <BannerComponent
        title="Join Us on This Journey"
        icon={JoinUsJourney}
      >
        We are always committed to pushing the boundaries of what’s possible
        with data, helping businesses around the world to unlock new
        opportunities, optimize their operations, and achieve their goals. With
        CrawlerHub by your side, the future is full of promise. Hence, we invite
        you to join us on this exciting journey. Whether you’re a business
        looking to leverage data for growth, an organization seeking customized
        data solutions, or a partner interested in collaboration, we are here to
        help you succeed.
      </BannerComponent>
    </div>
  );
};

export default AboutUsBanner;
