// pages/api/auth/[...nextauth].js

import NextAuth from 'next-auth'
import { PrismaClient } from '@prisma/client'
import CredentialsProvider from 'next-auth/providers/credentials';

const prisma = new PrismaClient()

export default NextAuth({
  providers: [
    CredentialsProvider({
      credentials: {
        email: { label: "email", type: "text" },
        password: {  label: "Password",  type: "password" },
      },
      authorize: async (credentials) => {
        const user = await prisma.user.findFirst({
          where: {
            email: credentials.email,
          },
        });

        if (!user || user.password !== credentials.password) {
          return Promise.resolve(null);
        }

        return Promise.resolve(user);
      },
    }),
  ],
  session: {
    jwt: true,
  },
  callbacks: {
    async jwt(token, user) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session(session, token) {
      session.user.id = token.id;
      return session;
    },
  },
  
  pages: {
    signIn: '/auth/signin',
  },
})
