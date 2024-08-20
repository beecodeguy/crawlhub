import { Blog, User } from "@prisma/client";
import axios from "axios";

export const getBlogs = async (): Promise<
  (Blog & { user: string })[] | null
> => {
  try {
    const users = await axios.get<(Blog & { User: User })[]>(
      process.env.BASE_URL + "/api/blog"
    );
    return users.data.map((user) => ({ ...user, user: user.User.name }));
  } catch (e) {
    return null;
  }
};

export const getBlog = async (
  id: string
): Promise<(Blog & { User: User }) | null> => {
  try {
    const users = await axios.get<Blog & { User: User }>(
      process.env.BASE_URL + "/api/blog/" + id
    );
    return users.data;
  } catch (e) {
    return null;
  }
};

export const deleteBlog = async (id: number) => {
  try {
    const blog = await axios.delete("/api/blog/" + id);
    return blog.data;
  } catch (err) {
    return null;
  }
};
