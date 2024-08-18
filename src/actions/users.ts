import axiosInstance from "@/lib/axiosConfig";

export const getUsers = async () => {
  try {
    const users = await axiosInstance.get("/api/user");
    return users;
  } catch (e) {
    //
  }
};
