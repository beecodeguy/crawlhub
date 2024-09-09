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
