import axios from "axios";
import { Contact } from "@prisma/client";

export const getContacts = async (): Promise<Contact[] | null> => {
  try {
    const contacts = await axios.get<Contact[]>(
      process.env.BASE_URL + "/api/contact-us"
    );
    return contacts.data;
  } catch (e) {
    return null;
  }
};

export const getContact = async (id: string): Promise<Contact | null> => {
  try {
    const contact = await axios.get<Contact>(
      process.env.BASE_URL + "/api/contact-us/" + id
    );
    return contact.data;
  } catch (e) {
    return null;
  }
};
