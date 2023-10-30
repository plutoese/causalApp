import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import prisma from "@/lib/db/prisma";

export const authOptions = {
  pages: {
    signIn: "/auth/loginin",
    signOut: "/auth/logout",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        name: {
          label: "Name",
          type: "name",
          placeholder: "username",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },

      async authorize(credentials) {
        const { name, password } = credentials;

        try {
          const user = await prisma.User.findUnique({
            where: {
              name: String(name),
            },
          });

          if (!user) {
            return null;
          }

          const passwordsMatch = await bcrypt.compare(password, user.password);

          if (!passwordsMatch) {
            return null;
          }

          return {
            id: user.id,
            email: user.email,
            name: user.name,
            group: user.group,
            isActive: user.isActive,
            remark: user.remark,
            randomKey: "Hey cool",
          };
        } catch (error) {
          console.log("Error: ", error);
        }
      },
    }),
  ],
  callbacks: {
    session: ({ session, token }) => {
      console.log("Session Callback", { session, token });
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          group: token.group,
          isActive: token.isActive,
          remark: token.remark,
          randomKey: token.randomKey,
        },
      };
    },
    jwt: ({ token, user }) => {
      console.log("JWT Callback", { token, user });
      if (user) {
        return {
          ...token,
          id: user.id,
          group: user.group,
          isActive: user.isActive,
          remark: user.remark,
          randomKey: user.randomKey,
        };
      }
      return token;
    },
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
};
