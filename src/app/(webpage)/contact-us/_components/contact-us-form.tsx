"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React from "react";
import { useForm } from "react-hook-form";

const ContactUsForm = () => {
  const method = useForm();
  const { handleSubmit } = method;

  const onSubmit = () => {};

  return (
    <div className="p-3 bg-white-foreground flex flex-col gap-3 justify-center w-[2000px] shadow-custom">
      <span className="typography-h4">Unlock the Power of Your Data?</span>
      <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex gap-2">
          <div className="w-full">
            <Label>Full Name</Label>
            <Input placeholder="Your full name" />
          </div>
          <div className="w-full">
            <Label>Business Email</Label>
            <Input placeholder="Your business email" />
          </div>
        </div>
        <div className="flex gap-2">
          <div className="w-full">
            <Label>Company</Label>
            <Input placeholder="Your company name" />
          </div>
          <div className="w-full">
            <Label>Position</Label>
            <Input placeholder="Your position" />
          </div>
        </div>
        <div className="w-full">
          <Label>Source of Data</Label>
          <div>
            <Input placeholder="Paste your web URLs or specify your data sources"/>
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
            <Textarea placeholder="Write about your project"/>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactUsForm;
