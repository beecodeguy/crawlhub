import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const ContactUsBanner = () => {
  return (
    <div className="container mx-auto mb-[128px] flex lg:flex-row xs:flex-col lg:gap-0 xs:gap-5 justify-between lg:items-center xs:items-start bg-primary px-[40px] py-6 rounded-lg">
      <span className="text-white typography-h3">
        Get in touch for tailored data solutions—your <br />
        project starts with a click!
      </span>
      <Link href="/contact-us">
        <Button className="bg-white text-primary hover:text-white">
          Contact Us
        </Button>
      </Link>
    </div>
  );
};

export default ContactUsBanner;
