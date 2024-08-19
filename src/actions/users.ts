import { User } from "@prisma/client";
import axios from "axios";

export const getUsers = async (): Promise<User[] | null> => {
  try {
    const users = await axios.get(process.env.BASE_URL + "/api/user");
    return users.data;
  } catch (e) {
    return null;
  }
};
