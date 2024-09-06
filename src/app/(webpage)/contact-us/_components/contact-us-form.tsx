import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

const ContactUsForm = () => {
  return (
    <div className="p-3 bg-white flex flex-col gap-3 justify-center w-[2000px]">
      <span className="typography-h4">Unlock the Power of Your Data?</span>
      <div className="flex gap-2">
        <div className="w-full">
          <Label>Full Name</Label>
          <Input />
        </div>
        <div className="w-full">
          <Label>Business Email</Label>
          <Input />
        </div>
      </div>
      <div className="flex gap-2">
        <div className="w-full">
          <Label>Company</Label>
          <Input />
        </div>
        <div className="w-full">
          <Label>Position</Label>
          <Input />
        </div>
      </div>
      <div className="w-full">
        <Label>Source of Data</Label>
        <div>
          <Input />
        </div>
      </div>
      <div className="flex gap-2">
        <div className="w-full">
          <Label>Volume of Data</Label>
          <Input />
        </div>
        <div className="w-full">
          <Label>Frequency of Data Extraction</Label>
          <Input />
        </div>
      </div>
      <div className="w-full">
        <Label>About your project</Label>
        <div>
          <Textarea />
        </div>
      </div>
    </div>
  );
};

export default ContactUsForm;
