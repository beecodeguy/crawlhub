import LoginForm from "@/containers/LoginForm";
import React from "react";
import LoginBanner from "./_components/login-banner";

const LogInPage = () => {
  return (
    <div className="grid place-items-center h-screen bg-gradient-custom">
      <div className="p-3 bg-white flex gap-4 rounded-2xl">
        <LoginBanner />
        <LoginForm />
      </div>
    </div>
  );
};

export default LogInPage;
