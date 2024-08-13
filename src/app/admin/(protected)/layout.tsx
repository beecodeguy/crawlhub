import Sidebar from "@/components/sidebar";
import React from "react";

const AdminProtectedLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="p-5 w-full">{children}</div>
    </div>
  );
};

export default AdminProtectedLayout;
