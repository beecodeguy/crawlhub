import React from "react";
import AboutUsStory from "./_components/AboutUsStory";
import ContactUsBanner from "@/components/containers/Banner/contact-us-banner";
import AboutUsBanner from "./_components/AboutUsBanner";

const AboutUs = () => {
  return (
    <>
      <AboutUsStory />
      <ContactUsBanner />
      <AboutUsBanner />
    </>
  );
};

export default AboutUs;
