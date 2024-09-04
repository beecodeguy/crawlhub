import AuthBanner from "@/components/containers/Banner/auth-banner";
import { Metadata } from "next";
import React from "react";

interface IProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "CrawlerHub",
  description: "Web data extraction service",
};

const AuthLayout: React.FC<IProps> = ({ children }) => {
  return (
    <div className="flex flex-col gap-6 items-center justify-center h-screen bg-gradient-custom">
      <span className="typography-h3 text-primary">CrawlerHub</span>
      <div className="p-3 bg-white flex gap-4 rounded-2xl">
        <AuthBanner />
        <div className="space-y-4 w-[424px]">{children}</div>
      </div>
    </div>
  );
};

export default AuthLayout;
