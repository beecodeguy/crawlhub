import { Blog, User } from "@prisma/client";
import axios from "axios";

export const getBlogs = async (): Promise<
  (Blog & { user: string })[] | null
> => {
  try {
    const users = await axios.get<(Blog & { User: User })[]>(
      process.env.BASE_URL + "/api/blog"
    );
    return users.data.map((x) => ({ ...x, user: x.User.name }));
  } catch (e) {
    return null;
  }
};
