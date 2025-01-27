import { Session as DefaultSession, User as DefaultUser } from "next-auth";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      id: string;
      role: string;
    } & DefaultSession["user"];
  }

  interface User extends DefaultUser {
    name: string;
    role: string;
  }

  interface JWt {
    id: string;
    role: string;
  }
}
