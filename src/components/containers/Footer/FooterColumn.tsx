import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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

type IList = Pick<IProps, "linkList">;

const FooterItemList: React.FC<IList> = ({ linkList }) => (
  <div className="flex flex-col mt-2 gap-2">
    {linkList.map((list) => (
      <Link href={list.link} key={list.id} className="text-sm typography-f1">
        {list.name}
      </Link>
    ))}
  </div>
);

const FooterColumn: React.FC<IProps> = ({ name, linkList }) => {
  return (
    <>
      <Accordion type="single" collapsible className="md:hidden xs:block">
        <AccordionItem
          className="border-none border-b-1 border-white"
          value={name}
        >
          <AccordionTrigger className="typography-h5 p-0 font-normal uppercase">
            {name}
          </AccordionTrigger>
          <AccordionContent className="p-0">
            <FooterItemList linkList={linkList} />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <div className="md:block xs:hidden">
        <div className="uppercase typography-h5">{name}</div>
        <FooterItemList linkList={linkList} />
      </div>
    </>
  );
};

export default FooterColumn;
