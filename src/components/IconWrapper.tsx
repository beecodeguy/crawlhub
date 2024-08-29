import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React from "react";

interface IProps {
  icon: string | StaticImport;
}

const IconWrapper: React.FC<IProps> = ({ icon }) => {
  return (
    <div className="p-1 bg-[#FAF4FF] h-fit w-fit rounded-full grid place-items-center">
      <Image src={icon} alt="" height={24} width={24} />
    </div>
  );
};

export default IconWrapper;
