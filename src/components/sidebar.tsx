"use client";

import React, { useState } from "react";
import { Icons } from "./icons";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { signOut, useSession } from "next-auth/react";

const MenuItems = [
  {
    title: "Dashboard",
    link: "/admin/dashboard",
    icon: <Icons.home />,
    role: ["user", "admin"],
  },
  {
    title: "Users",
    link: "/admin/users",
    icon: <Icons.users />,
    role: ["admin"],
  },
  {
    title: "Blogs",
    link: "/admin/blogs",
    icon: <Icons.blog />,
    role: ["user", "admin"],
  },
  {
    title: "Contacts",
    link: "/admin/contacts",
    icon: <Icons.userPen />,
    role: ["admin"],
  },
  {
    title: "Logout",
    icon: <Icons.logout />,
    role: ["user", "admin"],
  },
];

const Sidebar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const session = useSession();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const logOut = async () => {
    await signOut({ redirect: false });
    router.push("/");
  };

  return (
    <motion.aside
      className={`top-0 h-screen bg-gray-100 text-gray-800 p-4 relative`}
      initial={{ width: isCollapsed ? 100 : 224 }}
      animate={{ width: isCollapsed ? 100 : 224 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center mb-4 space-x-1 w-3/5">
        <Icons.logo />
        <button
          onClick={toggleCollapse}
          className="rounded-full bg-gray-400 absolute left-[calc(100%-16px)]"
        >
          {isCollapsed ? <ChevronRight /> : <ChevronLeft />}
        </button>
      </div>
      <nav className="space-y-2">
        {MenuItems.filter((i) => i.role.includes(session.data?.user.role)).map(
          (item) => (
            <Link
              href={item.link ? item.link : "#"}
              className={`w-full flex items-center space-x-2 hover:bg-gray-200 py-2 ${
                isCollapsed ? "pl-[14px] pr-[36px]" : "px-2"
              } rounded-lg text-gray-800 ${
                item.link === pathname ? "bg-gray-200" : ""
              }`}
              key={item.title}
              onClick={item.title === "Logout" ? logOut : () => {}}
            >
              {isCollapsed ? (
                <motion.span
                  className="text-sm font-medium"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {item.icon}
                </motion.span>
              ) : (
                <>
                  {" "}
                  <span>{item.icon}</span>
                  &nbsp;{item.title}
                </>
              )}
            </Link>
          )
        )}
      </nav>
    </motion.aside>
  );
};

export default Sidebar;
