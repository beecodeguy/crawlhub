import { ClockIcon } from "@/assets/icons";
import { DefaultAvatar, SampleImage } from "@/assets/images";
import JumpButton from "@/components/JumpButton";
import Image from "next/image";
import React from "react";

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
          <div className="flex gap-1 items-center">
            <Image src={DefaultAvatar} alt="" height={32} width={32} />
            <span>Sova</span>
          </div>
          <div className="flex gap-1 items-center">
            <Image src={ClockIcon} alt="" height={24} width={24} />
            <span>November 26, 2023</span>
          </div>
        </div>
        <JumpButton label="Read More" className="mt-4" />
      </div>
    </div>
  );
};

export default BlogCard;
