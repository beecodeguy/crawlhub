import { Button } from "@/components/ui/button";
import React from "react";

interface IProps {
  className?: string;
}

const ContactUsBanner: React.FC<IProps> = ({ className }) => {
  return (
    <div
      className={`flex justify-between items-center bg-primary px-[40px] py-6 rounded-lg ${className}`}
    >
      <span className="text-white">
        Get in touch for tailored data solutions—your <br />
        project starts with a click!
      </span>
      <Button className="bg-white text-primary">Contact Us</Button>
    </div>
  );
};

export default ContactUsBanner;
