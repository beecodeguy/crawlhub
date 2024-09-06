import ContactUsBanner from "@/components/containers/Banner/contact-us-banner";
import ManageCrawlers from "./_components/ManageCrawlers";
import OurServices from "./_components/OurServices";
import WhyChooseCrawler from "./_components/WhyChooseCrawler";
import OurProcess from "./_components/OurProcess";
import WhatWouldYou from "./_components/WhatWouldYou";

export default function Home() {
  return (
    <>
      <ManageCrawlers />
      <WhyChooseCrawler />
      <OurServices />
      <ContactUsBanner  />
      <OurProcess />
      <WhatWouldYou />
    </>
  );
}
