import { getContact } from "@/actions/contacts";
import React from "react";

const ContactInfoDetail = async ({
  params,
}: {
  params: { contactId: string };
}) => {
  const contact = await getContact(params.contactId);
  console.log({ contact });
  if (!contact) {
    return <>Error Contact Detail</>;
  }

  return (
    <div className="flex flex-col gap-1">
      <span>Name: {contact.name}</span>
      <span>Company Name: {contact.companyName}</span>
      <span>Position: {contact.position}</span>
      <span>Data Source: {contact.dataSource}</span>
      <span>Data Volume: {contact.dataVolume}</span>
      <span>Data Extraction Frequency: {contact.dataExtractionFrequency}</span>
      <span>About Project: {contact.aboutProject}</span>
    </div>
  );
};

export default ContactInfoDetail;
