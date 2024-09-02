import React from "react";
import AboutUsStory from "./_components/AboutUsStory";
import ContactUsBanner from "@/components/containers/Banner/ContactUs";
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
