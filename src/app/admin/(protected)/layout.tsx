import Sidebar from "@/components/sidebar";
import React from "react";

const AdminProtectedLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex">
      <Sidebar />
      {children}
    </div>
  );
};

export default AdminProtectedLayout;
