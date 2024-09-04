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
    <div className="space-y-4">
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
              placeholder="New Password"
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
              placeholder="Confirm Password"
            />
          </div>
        </div>

        <Button className="w-full mt-2" type="submit">
          Reset Password
        </Button>
      </form>
    </div>
  );
};

export default ResetPasswordForm;
