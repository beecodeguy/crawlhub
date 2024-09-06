import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const ScheduleMeetingBanner = () => {
  return (
    <div className="container mx-auto mb-[128px] flex justify-between items-center bg-primary px-[40px] py-6 rounded-lg">
      <div className="flex flex-col gap-1 text-white">
        <span className="typography-h3">Prefer a more hands-on approach?</span>
        <span>
          Why not Schedule a Meeting for a detailed discussion and a tailored
          approach to your requirements?
        </span>
      </div>
      <Link href="/schedule-meeting">
        <Button className="bg-white text-primary hover:text-white">
          Schedule a Meeting
        </Button>
      </Link>
    </div>
  );
};

export default ScheduleMeetingBanner;
