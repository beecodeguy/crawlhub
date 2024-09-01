import ContactUsBanner from "@/components/containers/Banner/ContactUs";
import ManageCrawlers from "./_components/ManageCrawlers";
import OurServices from "./_components/OurServices";
import WhyChooseCrawler from "./_components/WhyChooseCrawler";
import OurProcess from "./_components/OurProcess";
import WhatWouldYou from "./_components/WhatWouldYou";
import Header from "@/components/containers/Header";
import Footer from "@/components/containers/Footer";

export default function Home() {
  return (
    <section>
      <Header />
      <ManageCrawlers />
      <WhyChooseCrawler />
      <OurServices />
      <ContactUsBanner className="container mx-auto mb-[128px]" />
      <OurProcess />
      <WhatWouldYou />
      <Footer />
    </section>
  );
}
