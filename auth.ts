import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

import { verifyPassword } from '@/utils/password';

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: []
    