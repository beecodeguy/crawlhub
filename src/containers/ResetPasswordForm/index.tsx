"use client";

import React from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const resetPasswordSchema = z.object({
  new_password: z.string().min(4),
  confirm_password: z.string().min(4),
});

interface TResetPassword {
  new_password: string;
  confirm_password: string;
}

const ResetPasswordForm = () => {
  const { register, handleSubmit } = useForm<TResetPassword>({
    resolver: zodResolver(resetPasswordSchema),
  });

  const onSubmit = () => {};

  return (
    <>
      <span className="typography-h4">Reset Your Password</span>
      <form className="space-y-2" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Label>New Password</Label>
          <div className="mt-2">
            <Input
              {...register("new_password")}
              id="password"
              name="password"
              type="password"
              placeholder="Enter password"
            />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <Label>Confirm Password</Label>
          </div>
          <div className="mt-2">
            <Input
              {...register("confirm_password")}
              id="password"
              name="password"
              type="password"
              placeholder="Re-enter password"
            />
          </div>
        </div>

        <Button className="w-full mt-2" type="submit">
          Reset Password
        </Button>
      </form>
    </>
  );
};

export default ResetPasswordForm;
