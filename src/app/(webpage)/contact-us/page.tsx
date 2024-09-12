import ScheduleMeetingBanner from "@/components/containers/Banner/schedule-meeting-banner";
import React from "react";
import ContactUsForm from "./_components/contact-us-form";
import ContactUsDescription from "./_components/contact-us-description";

const ContactUs = () => {
  return (
    <div className="container mx-auto flex flex-col gap-[128px]">
      <div className="flex lg:flex-row sm:flex-col items-center justify-between gap-[80px]">
        <ContactUsDescription />
        <ContactUsForm />
      </div>
      <ScheduleMeetingBanner />
    </div>
  );
};

export default ContactUs;
