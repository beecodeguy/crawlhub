"use client";
import React from "react";
import {
  LayoutDashboard,
  Settings,
  ShoppingCart,
  UsersRound,
} from "lucide-react";

import { useWindowWidth } from "@react-hook/window-size";
import { Nav } from "./nav";
import Routes from "@/constants/routes";

type Props = {};

export default function Sidebar({}: Props) {
  const [isCollapsed, setIsCollapsed] = React.useState(false);

  const onlyWidth = useWindowWidth();
  const mobileWidth = onlyWidth < 768;

  //function toggleSidebar() {
  //  setIsCollapsed(!isCollapsed);
  // }
  return (
    <div className="relative min-w-[80px] border-r px-3 pb-10">
      <h1>Admin Panel</h1>
      {/* {!mobileWidth && (
        <div className="absolute right-[-20px] top-7">
          <Button
            className="rounded-full p-2 bg-gray-100"
            onClick={toggleSidebar}
          >
            <ChevronRight />
          </Button>
        </div>
      )} */}
      <Nav isCollapsed={mobileWidth ? true : isCollapsed} links={Routes} />
    </div>
  );
}
