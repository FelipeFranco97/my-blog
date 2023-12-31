import NextAuth from 'next-auth/next'
import CredentialsProvider from 'next-auth/providers/credentials'
import { connectDB } from '@/libs/mongodb'
import User from '@/models/user'
import bcrypt from 'bcryptjs'

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
        },
        password: { type: 'password' },
      },
      async authorize(credentials) {
        await connectDB()
        const userFound = await User.findOne({ email: credentials?.email }).select("+password")
        if (!userFound) throw new Error('Credenciales incorrectas')

        const passwordMatch = await bcrypt.compare(
          credentials!.password,
          userFound.password
        )

        if (!passwordMatch) throw new Error('Credenciales incorrectas')
        console.log(userFound)
        return userFound
      },
    }),
  ],
  pages: {
    signIn: '/login',
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.user = user
      return token
    },
    async session({ session, token }) {
      session.user = token.user as any
      return session
    },
  },
  
})

export { handler as GET, handler as POST }
