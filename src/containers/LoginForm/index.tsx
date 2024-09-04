"use client";

import React, { useRef } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import ReCAPTCHA from "react-google-recaptcha";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const loginFormSchema = z.object({
  email: z.string().min(4),
  password: z.string().min(4),
});

type TLoginForm = z.infer<typeof loginFormSchema>;

const LoginForm = () => {
  const { register, handleSubmit } = useForm<TLoginForm>({
    resolver: zodResolver(loginFormSchema),
  });

  const recaptchaRef = useRef<any>(null);

  const router = useRouter();

  const onSubmit: SubmitHandler<TLoginForm> = async (data) => {
    const token = await recaptchaRef.current.getValue();
    if (!token) {
      return;
    }
    const { email, password } = data;
    signIn("credentials", {
      email,
      password,
      redirect: false,
    })
      .then((res) => {
        if (res?.status !== 401) {
          router.push("/admin/dashboard"); // TODO: we get the response and redirect to the schoolID:
        }
      })
      .catch(() => {
        // toast.error("Something went wrong");
      });
  };

  return (
    <div className="space-y-4">
      <span className="typography-h4">Login In</span>
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

        <div>
          <div className="flex items-center justify-between">
            <Label>Password</Label>
          </div>
          <div className="mt-2">
            <Input
              {...register("password")}
              id="password"
              name="password"
              type="password"
              placeholder="Enter password"
            />
          </div>
          <div className="text-sm mt-2">
            <Link
              href="/forgot-password"
              className="leading-[20px] text-[14px] float-right text-primary"
            >
              Forgot password?
            </Link>
          </div>
        </div>

        <Button className="w-full mt-2" type="submit">
          Log In
        </Button>

        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey="6LclYy0qAAAAAN-RJ6ajLzWa5y7y-sqj17GOqACN"
        />
      </form>
    </div>
  );
};

export default LoginForm;
