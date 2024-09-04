"use client";

import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import * as z from "zod";
import SelectComponent from "@/components/SelectComponent";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useRouter } from "next/navigation";
import { ErrorMessage } from "@hookform/error-message";

const RegisterFormSchema = z.object({
  email: z.string().min(4),
  password: z.string().min(4),
  name: z.string().min(4),
  role: z.string().min(1),
});

type TRegisterForm = z.infer<typeof RegisterFormSchema>;

const RegisterForm = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<TRegisterForm>({
    resolver: zodResolver(RegisterFormSchema),
  });

  const router = useRouter();

  const onSubmit: SubmitHandler<TRegisterForm> = async (data) => {
    try {
      axios.post("/api/auth/register", data);
      router.push("/admin/users");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex gap-4">
        <div className="w-full">
          <Label>Name</Label>
          <div className="mt-2">
            <Input {...register("name")} name="name" />
            <ErrorMessage errors={errors} name="name" />
          </div>
        </div>

        <div className="w-full">
          <Label>Email address</Label>
          <div className="mt-2">
            <Input
              {...register("email")}
              id="email"
              name="email"
              type="email"
            />
            <ErrorMessage errors={errors} name="email" />
          </div>
        </div>
      </div>

      <div className="flex gap-4 items-center justify-center">
        <div className="w-full">
          <Label>Password</Label>
          <div className="mt-2">
            <Input {...register("password")} name="password" type="password" />
            <ErrorMessage errors={errors} name="password" />
          </div>
        </div>

        <div className="w-full">
          <Label>Role</Label>
          <div>
            <Controller
              name="role"
              control={control}
              render={({ field: { onChange, value } }) => (
                <SelectComponent
                  onChange={onChange}
                  value={value}
                  items={[
                    { label: "Admin", value: "admin" },
                    { label: "User", value: "user" },
                  ]}
                />
              )}
            />
            <ErrorMessage errors={errors} name="role" />
          </div>
        </div>
      </div>

      <div>
        <Button
          type="submit"
          className="flex w-full justify-center rounded-md bg-indigo-600 hover:bg-indigo-400 px-3 py-1.5 text-white"
        >
          Register
        </Button>
      </div>
    </form>
  );
};

export default RegisterForm;
