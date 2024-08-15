"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const loginFormSchema = z.object({
  email: z.string().min(4),
  password: z.string().min(4),
});

type TLoginForm = z.infer<typeof loginFormSchema>;

const LoginForm = () => {
  const { register, handleSubmit } = useForm<TLoginForm>({
    resolver: zodResolver(loginFormSchema),
  });

  const router = useRouter();

  const onSubmit: SubmitHandler<TLoginForm> = (data) => {
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
    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Label>
          Email address
        </Label>
        <div className="mt-2">
          <Input
            {...register("email")}
            id="email"
            name="email"
            type="email"
          />
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <Label>
            Password
          </Label>
          <div className="text-sm">
            <a
              href="#"
              className="font-semibold text-indigo-600 hover:text-indigo-500"
            >
              Forgot password?
            </a>
          </div>
        </div>
        <div className="mt-2">
          <Input
            {...register("password")}
            id="password"
            name="password"
            type="password"
          />
        </div>
      </div>

      <div>
        <button
          type="submit"
          className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Sign in
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
