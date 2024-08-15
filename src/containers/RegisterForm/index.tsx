"use client";
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";

const RegisterForm = () => {
  const { register } = useForm();

  return (
    <form className="space-y-6">
      <div>
        <Label>Name</Label>
        <div className="mt-2">
          <Input {...register("name")} name="name" />
        </div>
      </div>

      <div>
        <Label>Email address</Label>
        <div className="mt-2">
          <Input {...register("email")} id="email" name="email" type="email" />
        </div>
      </div>

      <div>
        <Label>Password</Label>
        <div className="mt-2">
          <Input {...register("password")} name="password" type="password" />
        </div>
      </div>

      <div>
        <Button
          type="submit"
          className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-white"
        >
          Sign in
        </Button>
      </div>
    </form>
  );
};

export default RegisterForm;
