import { compare, hash } from 'bcryptjs';
import { sign, verify } from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';
import { NextAuthOptions } from 'next-auth';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { prisma } from './prisma';
import CredentialsProvider from 'next-auth/providers/credentials';
import { verifyOTP } from './otp';

const prismaClient = new PrismaClient();

export async function hashPassword(password: string) {
  return await hash(password, 10);
}

export async function verifyPassword(password: string, hashedPassword: string) {
  return await compare(password, hashedPassword);
}

export function generateToken(userId: number) {
  return sign({ userId }, process.env.JWT_SECRET!, { expiresIn: '7d' });
}

export async function verifyToken(token: string) {
  try {
    const decoded = verify(token, process.env.JWT_SECRET!) as { userId: number };
    const user = await prismaClient.user.findUnique({
      where: { id: decoded.userId },
      select: { id: true, email: true, name: true }
    });
    return user;
  } catch (error) {
    return null;
  }
}

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/login',
  },
  providers: [
    CredentialsProvider({
      name: 'Email',
      credentials: {
        email: { label: 'Email', type: 'email' },
        otp: { label: 'Código de Verificação', type: 'text' }
      },
      async authorize(credentials) {
        if (!credentials?.email) {
          return null;
        }

        // Se não forneceu OTP, retorna null para permitir o envio do código
        if (!credentials.otp) {
          return null;
        }

        // Verifica o OTP
        const result = await verifyOTP(credentials.email, credentials.otp);

        if (!result) {
          return null;
        }

        return {
          id: result.user.id.toString(),
          email: result.user.email,
          name: result.user.name,
        };
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
      }
      return session;
    }
  }
}; 