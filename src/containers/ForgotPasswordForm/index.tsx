"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

const forgotPasswordSchema = z.object({
  email: z.string().min(4),
  password: z.string().min(4),
});

interface TForgotPasswordForm {
  email: string;
}

const ForgotPasswordForm = () => {
  const { register, handleSubmit } = useForm<TForgotPasswordForm>({
    resolver: zodResolver(forgotPasswordSchema),
  });

  const onSubmit = () => {};

  return (
    <>
      <div className="flex flex-col gap-1">
        <span className="typography-h4">Forgot Password?</span>
        <span>
          Enter your Business email, and we&apos;ll send a password reset link.
        </span>
      </div>
      <form className="space-y-2" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Label>Business Email</Label>
          <div className="mt-2">
            <Input
              {...register("email")}
              id="email"
              name="email"
              type="email"
              placeholder="Your business email"
            />
          </div>
        </div>

        <Button className="w-full mt-2" type="submit">
          Submit
        </Button>
      </form>
      <div className="typography-h5 text-center">
        Remember the password? Return to{" "}
        <Link href="/login" className="text-primary">
          Sign In
        </Link>
      </div>
    </>
  );
};

export default ForgotPasswordForm;
