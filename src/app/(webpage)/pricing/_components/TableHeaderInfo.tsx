import { Button } from "@/components/ui/button";
import React from "react";

interface IProps {
  title: string;
  price: string;
  previousPrice?: string;
  buttonLabel?: string;
}

const TableHeaderInfo: React.FC<IProps> = ({
  title,
  previousPrice,
  price,
  buttonLabel = "Get Started",
}) => (
  <div className="flex flex-col gap-4 items-center">
    <span className="typography-h4">{title}</span>
    <span>
      {previousPrice && (
        <span className="line-through text-grey typography-b1">
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

export default TableHeaderInfo;
