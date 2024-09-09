"use client";

import SelectComponent from "@/components/SelectComponent";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ErrorMessage } from "@hookform/error-message";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";

const contactUsSchema = z.object({
  name: z.string().min(1, { message: "Please enter your name" }),
  business_email: z
    .string()
    .min(1, "Please enter your email")
    .email("This is not a valid email"),
  company_name: z.string().min(1, { message: "Please enter the company name" }),
  position: z.string().min(1, { message: "Please enter your position" }),
  data_source: z.string().min(1, { message: "Please enter the data source" }),
  data_volume: z.string().min(1, { message: "Please provide data volume" }),
  data_extraction_frequency: z
    .string()
    .min(1, { message: "Please provide data extraction frequency" }),

  about_project: z
    .string()
    .min(10, { message: "Minimum length is 10 characters" }),
});

const ContactUsForm = () => {
  const method = useForm({ resolver: zodResolver(contactUsSchema) });
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = method;

  const onSubmit = () => {};

  return (
    <div className="p-3 bg-white-foreground flex flex-col gap-3 justify-center w-[2000px] shadow-custom">
      <span className="typography-h4">Unlock the Power of Your Data?</span>
      <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex gap-2">
          <div className="w-full">
            <Label>Full Name</Label>
            <Input {...register("name")} placeholder="Your full name" />
            <ErrorMessage name="name" errors={errors} />
          </div>
          <div className="w-full">
            <Label>Business Email</Label>
            <Input
              {...register("business_email")}
              placeholder="Your business email"
            />
            <ErrorMessage name="business_email" errors={errors} />
          </div>
        </div>
        <div className="flex gap-2">
          <div className="w-full">
            <Label>Company</Label>
            <Input
              {...register("company_name")}
              placeholder="Your company name"
            />
            <ErrorMessage name="company_name" errors={errors} />
          </div>
          <div className="w-full">
            <Label>Position</Label>
            <Input {...register("position")} placeholder="Your position" />
            <ErrorMessage name="position" errors={errors} />
          </div>
        </div>
        <div className="w-full">
          <Label>Source of Data</Label>
          <div>
            <Input
              {...register("data_source")}
              placeholder="Paste your web URLs or specify your data sources"
            />
          </div>
          <ErrorMessage name="data_source" errors={errors} />
        </div>
        <div className="flex gap-2">
          <div className="w-full">
            <Label>Volume of Data</Label>
            <Controller
              name="data_volume"
              control={control}
              render={({ field: { value, onChange } }) => (
                <SelectComponent
                  onChange={onChange}
                  items={[{ label: "One", value: "one" }]}
                  value={value}
                />
              )}
            />
            <ErrorMessage name="data_volume" errors={errors} />
          </div>
          <div className="w-full">
            <Label>Frequency of Data Extraction</Label>
            <Controller
              name="data_extraction_frequency"
              control={control}
              render={({ field: { value, onChange } }) => (
                <SelectComponent
                  onChange={onChange}
                  items={[{ label: "One", value: "one" }]}
                  value={value}
                />
              )}
            />
            <ErrorMessage name="data_extraction_frequency" errors={errors} />
          </div>
        </div>
        <div className="w-full">
          <Label>About your project</Label>
          <div>
            <Textarea
              {...register("about_project")}
              placeholder="Write about your project"
            />
            <ErrorMessage name="about_project" errors={errors} />
          </div>
        </div>
        <Button type="submit" className="w-fit ml-auto">
          Contact Us
        </Button>
      </form>
    </div>
  );
};

export default ContactUsForm;
