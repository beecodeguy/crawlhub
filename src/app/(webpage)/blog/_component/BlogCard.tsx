import { ClockIcon } from "@/assets/icons";
import { DefaultAvatar, SampleImage } from "@/assets/images";
import JumpButton from "@/components/JumpButton";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React from "react";

interface TImageLabel {
  icon: string | StaticImport;
  height: number;
  width: number;
  label: string;
}

const ImageWithLabel: React.FC<TImageLabel> = ({
  icon,
  height,
  width,
  label,
}) => (
  <div className="flex gap-1 items-center">
    <Image src={icon} alt="" height={height} width={width} />
    <span>{label}</span>
  </div>
);

const BlogCard = () => {
  return (
    <div className="w-full">
      <Image
        src={SampleImage}
        alt=""
        className="rounded-lg w-full"
        height={400}
        width={400}
      />
      <div className="px-3 pt-3 pb-4 flex flex-col gap-3">
        <div className="flex justify-between items-center">
          <span className="typography-h4">Blog Title</span>
          <span className="text-primary">Category</span>
        </div>
        <p>
          Gain insights into consumer preferences for Costco, Target, and
          Walmart via Google Ratings & Reviews Data.
        </p>
        <div className="flex gap-2 typography-h5">
          <ImageWithLabel
            label="Sova"
            icon={DefaultAvatar}
            height={32}
            width={32}
          />

          <ImageWithLabel
            label="November 26, 2023"
            icon={ClockIcon}
            height={24}
            width={24}
          />
        </div>
        <JumpButton label="Read More" className="mt-4" />
      </div>
    </div>
  );
};

export default BlogCard;
