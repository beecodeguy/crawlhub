import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

const ContactUsForm = () => {
  return (
    <div className="p-3 bg-white flex flex-col gap-3 w-full justify-center">
      <span className="typography-h4">Unlock the Power of Your Data?</span>
      <div className="flex gap-2">
        <div>
          <Label>Full Name</Label>
          <Input />
        </div>
        <div>
          <Label>Business Email</Label>
          <Input />
        </div>
      </div>
      <div className="flex gap-2">
        <div>
          <Label>Company</Label>
          <Input />
        </div>
        <div>
          <Label>Position</Label>
          <Input />
        </div>
      </div>
      <div>
        <Label>Source of Data</Label>
        <Input />
      </div>
      <div className="flex gap-2">
        <div>
          <Label>Volume of Data</Label>
          <Input />
        </div>
        <div>
          <Label>Frequency of Data Extraction</Label>
          <Input />
        </div>
      </div>
      <div>
        <Label>About your project</Label>
        <Input />
      </div>
    </div>
  );
};

export default ContactUsForm;
