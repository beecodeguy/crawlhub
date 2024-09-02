import { FavouriteIcon } from "@/assets/icons";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

interface IProps {
  title: string;
  price: string;
  previousPrice?: string;
  buttonLabel?: string;
}

const HeaderInfo: React.FC<IProps> = ({
  title,
  previousPrice,
  price,
  buttonLabel = "Get Started",
}) => (
  <div className="flex flex-col gap-4 items-center">
    <span className="typography-h4">{title}</span>
    <span>
      {previousPrice && (
        <span className="line-through text-[#D9D8D8] leading-30 text-[20px]">
          {previousPrice}
        </span>
      )}
      <span className="text-primary typography-h3">{price}</span>
    </span>
    <Button variant="outline" className="w-fit">
      {buttonLabel}
    </Button>
  </div>
);

const THead = () => {
  return (
    <tr>
      <th>Compare Features accross plans</th>
      <th className="border-x border-t border-[#000000]">
        <HeaderInfo title="Basic Package" price="$199" previousPrice="$299" />
      </th>
      <th className="relative border-x border-t border-[#000000]">
        <span className="popular-card bg-[#FAF4FF] py-1 px-2 text-[#940B92]">
          <span className="flex gap-1">
            Most Popular{" "}
            <Image src={FavouriteIcon} alt="" width={23} height={23} />
          </span>
        </span>
        <HeaderInfo
          title="Standard Package"
          price="$399"
          previousPrice="$499"
        />
      </th>
      <th className="border-x border-t border-[#000000]">
        <HeaderInfo
          title="Enterprise Package"
          price="Custom Pricing"
          buttonLabel="Contact Sales"
        />
      </th>
    </tr>
  );
};

export default THead;
