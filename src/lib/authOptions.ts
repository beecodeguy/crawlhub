import CredentialsProvider from "next-auth/providers/credentials";
import prismadb from "@/lib/prismadb";
import { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/admin",
  },
  providers: [
    CredentialsProvider({
      name: "Login In",
      credentials: {
        email: {
          label: "email:",
          type: "text",
        },
        password: {
          label: "password:",
          type: "password",
        },
        role: {
          label: "role:",
          type: "role",
        },
      },
      async authorize(credentials) {
        if (
          !credentials?.email ||
          !credentials.password ||
          !credentials?.role
        ) {
          return null;
        }

        const user = await prismadb.user.findFirst({
          where: {
            email: credentials.email,
          },
        });

        if (!user) {
          return null;
        }

        if (user.role !== credentials.role) {
          return null;
        }

        const isPasswordValid = user.password === credentials.password;

        if (!isPasswordValid) {
          return null;
        }

        return {
          id: user.id + "",
          email: user.email,
          name: user.name || "",
          role: user.role || "",
        };
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session?.user) {
        session.user.role = token.role;
        session.user.id = token.id;
      }
      return session;
    },
    async signIn() {
      return true;
    },
  },
};
