import { getContact } from "@/actions/contacts";
import React from "react";

const ContactInfoDetail = async ({
  params,
}: {
  params: { contactId: string };
}) => {
  const contact = await getContact(params.contactId);
  console.log({ contact });
  
  return <div>ContactInfoDetail</div>;
};

export default ContactInfoDetail;
