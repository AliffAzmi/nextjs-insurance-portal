import GoogleProvider from 'next-auth/providers/google'

export const authOptions = {
  pages: {
    signIn: '/'
  },
  session: {
    strategy: 'jwt'
  },
  providers: [
    GoogleProvider({
      clientId: process.env.clientID,
      clientSecret: process.env.clientSecret
    })
  ],
  secret: process.env.NEXTAUTH_SECRET
}
