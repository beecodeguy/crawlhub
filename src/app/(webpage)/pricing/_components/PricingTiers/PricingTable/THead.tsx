import { FavouriteIcon } from "@/assets/icons";
import Image from "next/image";
import React from "react";
import TableHeaderInfo from "../../TableHeaderInfo";

const THead = () => {
  return (
    <thead>
      <tr>
        <th className="typography-h4">Compare Features accross plans</th>
        <th className="border-x border-t border-[#000000]">
          <TableHeaderInfo
            title="Basic Package"
            price="$199"
            previousPrice="$299"
          />
        </th>
        <th className="relative border-x border-t border-[#000000]">
          <span className="popular-card bg-[#FAF4FF] py-1 px-2 text-[#940B92]">
            <span className="flex gap-1 items-center">
              <span>Most Popular</span>
              <span>
                {" "}
                <Image src={FavouriteIcon} alt="" width={23} height={23} />
              </span>
            </span>
          </span>
          <TableHeaderInfo
            title="Standard Package"
            price="$399"
            previousPrice="$499"
          />
        </th>
        <th className="border-x border-t border-[#000000]">
          <TableHeaderInfo
            title="Enterprise Package"
            price="Custom Pricing"
            buttonLabel="Contact Sales"
          />
        </th>
      </tr>
    </thead>
  );
};

export default THead;
