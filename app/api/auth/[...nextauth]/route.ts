import NextAuth from "next-auth/next";
import Github from "next-auth/providers/github";
import Google from "next-auth/providers/google";

import { connectToDB } from "@/utils/db";
import User from "@/models/user";

const handler = NextAuth({
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    Github({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      try {
        await connectToDB();

        const exitingUser = await User.findOne({ email: user.email });

        if (!exitingUser) {
          await User.create({
            name: user.name,
            email: user.email,
            imageUrl: user.image,
          });
        }
      } catch (err) {
        console.log("Fail to sign in", err);
        return false;
      }
      return true;
    },
  },
});

export { handler as GET, handler as POST };
