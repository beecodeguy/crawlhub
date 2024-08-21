import Sidebar from "@/components/sidebar";
import NextAuthSessions from "@/providers/NextAuthSessions";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

const AdminProtectedLayout = async ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const session = await getServerSession();

  if (!session) {
    redirect("/");
  }

  return (
    <NextAuthSessions>
      <div className="flex">
        <Sidebar />
        <div className="p-5 w-full">{children}</div>
      </div>
    </NextAuthSessions>
  );
};

export default AdminProtectedLayout;
