import Link from "next/link";
import React from "react";

interface IProps {
  name: string;
  linkList: {
    id: number;
    name: string;
    link: string;
  }[];
}

const FooterColumn: React.FC<IProps> = ({ name, linkList }) => {
  return (
    <div>
      <div className="uppercase typography-h5">{name}</div>
      <div className="flex flex-col mt-3 gap-2">
        {linkList.map((list) => (
          <Link href={list.link} key={list.id} className="text-sm">
            {list.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FooterColumn;
