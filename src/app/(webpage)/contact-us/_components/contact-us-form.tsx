"use client";

import SelectComponent from "@/components/SelectComponent";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { contactUsSchema } from "@/constants/validationSchemas";
import axiosInstance from "@/lib/axiosConfig";
import { ErrorMessage } from "@hookform/error-message";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

type IContact = z.infer<typeof contactUsSchema>;

const ContactUsForm = () => {
  const method = useForm<IContact>({ resolver: zodResolver(contactUsSchema) });
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
    reset,
  } = method;

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit: SubmitHandler<IContact> = async (data) => {
    setIsLoading(true);
    try {
      await axiosInstance.post("/api/contact-us", data);
      reset();
      toast.success("Message has been sent!!");
    } catch (err) {
      //
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-3 bg-white-foreground flex flex-col gap-3 justify-center lg:w-[2000px] sm:w-full shadow-custom">
      <span className="typography-h4">Unlock the Power of Your Data?</span>
      <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex gap-2 lg:flex-row sm:flex-col">
          <div className="w-full">
            <Label>Full Name</Label>
            <Input {...register("name")} placeholder="Your full name" />
            <ErrorMessage name="name" errors={errors} />
          </div>
          <div className="w-full">
            <Label>Business Email</Label>
            <Input
              {...register("businessEmail")}
              placeholder="Your business email"
            />
            <ErrorMessage name="businessEmail" errors={errors} />
          </div>
        </div>
        <div className="flex gap-2 lg:flex-row sm:flex-col">
          <div className="w-full">
            <Label>Company</Label>
            <Input
              {...register("companyName")}
              placeholder="Your company name"
            />
            <ErrorMessage name="companyName" errors={errors} />
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
              {...register("dataSource")}
              placeholder="Paste your web URLs or specify your data sources"
            />
          </div>
          <ErrorMessage name="dataSource" errors={errors} />
        </div>
        <div className="flex gap-2 lg:flex-row sm:flex-col">
          <div className="w-full">
            <Label>Volume of Data</Label>
            <Controller
              name="dataVolume"
              control={control}
              render={({ field: { name, value, onChange } }) => (
                <SelectComponent
                  name={name}
                  onChange={onChange}
                  items={[
                    { label: "Up to 5,000", value: "up_to_5000" },
                    { label: "More than 10,000", value: "more_than_10000" },
                  ]}
                  value={value}
                />
              )}
            />
            <ErrorMessage name="dataVolume" errors={errors} />
          </div>
          <div className="w-full">
            <Label>Frequency of Data Extraction</Label>
            <Controller
              name="dataExtractionFrequency"
              control={control}
              render={({ field: { name, value, onChange } }) => (
                <SelectComponent
                  name={name}
                  onChange={onChange}
                  items={[
                    { label: "One Time", value: "one_time" },
                    { label: "Two Time", value: "two_time" },
                  ]}
                  value={value}
                />
              )}
            />
            <ErrorMessage name="dataExtractionFrequency" errors={errors} />
          </div>
        </div>
        <div className="w-full">
          <Label>About your project</Label>
          <div>
            <Textarea
              {...register("aboutProject")}
              placeholder="Write about your project"
            />
            <ErrorMessage name="aboutProject" errors={errors} />
          </div>
        </div>
        <Button type="submit" disabled={isLoading} className="lg:w-fit xs:w-full ml-auto">
          {isLoading ? "Loading..." : "Contact Us"}
        </Button>
      </form>
    </div>
  );
};

export default ContactUsForm;
