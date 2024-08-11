"use client";

import React, { useState } from "react";
import { Icons } from "./icons";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const MenuItems = [
  {
    title: "Dashboard",
    link: "/admin/dashboard",
    icon: <Icons.home />,
  },
  {
    title: "Users",
    link: "/admin/users",
    icon: <Icons.users />,
  },
];

const Sidebar = () => {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <motion.aside
      className={`sticky top-0 h-screen bg-gray-100 relative text-gray-800 p-4`}
      initial={{ width: isCollapsed ? 72 : 224 }}
      animate={{ width: isCollapsed ? 72 : 224 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center mb-4 space-x-1 w-3/5">
        <Icons.logo />
        <button
          onClick={toggleCollapse}
          className="rounded-full bg-gray-400 absolute left-[calc(100%-16px)]"
        >
          {!isCollapsed ? <ChevronRight /> : <ChevronLeft />}
        </button>
      </div>
      <nav className="space-y-2">
        {MenuItems.map((item) => (
          <Link
            href={item.link}
            className={`w-full flex items-center space-x-2 hover:bg-gray-200 py-2 px-2 rounded-lg text-gray-800 ${
              item.link === pathname ? "bg-gray-200" : ""
            }`}
            key={item.title}
          >
            <span>{item.icon}</span>
            {!isCollapsed && (
              <motion.span
                className="text-sm font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {item.title}
              </motion.span>
            )}
          </Link>
        ))}
      </nav>
    </motion.aside>
  );
};

export default Sidebar;
