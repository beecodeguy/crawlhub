import React from "react";
import AboutUsBanner from "./_components/AboutUsBanner";
import OurStory from "./_components/OurStory";
import ContactUsBanner from "@/components/containers/Banner/ContactUs";

const AboutUs = () => {
  return (
    <>
      <AboutUsBanner />
      <OurStory />
      <ContactUsBanner className="mb-[128px]" />
    </>
  );
};

export default AboutUs;
