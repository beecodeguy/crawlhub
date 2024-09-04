import LoginForm from "@/containers/LoginForm";
import React from "react";
import LoginBanner from "./_components/login-banner";

const LogInPage = () => {
  return (
    <div className="flex flex-col gap-6 items-center justify-center h-screen bg-gradient-custom">
      <span className="typography-h3 text-primary">CrawlerHub</span>
      <div className="p-3 bg-white flex gap-4 rounded-2xl">
        <LoginBanner />
        <LoginForm />
      </div>
    </div>
  );
};

export default LogInPage;
