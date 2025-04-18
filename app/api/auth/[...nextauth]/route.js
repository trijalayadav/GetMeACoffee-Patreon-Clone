import NextAuth from 'next-auth'
import GitHubProvider from "next-auth/providers/github";
import mongoose from "mongoose";
import User from '@/models/User';
import Payment from '@/models/Payment';
import connectDB from '@/db/connectDb';

const handler = NextAuth({
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
    ],

    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: "jwt",
    },
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            if (account.provider == "github") {
                await connectDB();
                //check if user is already in database
                const currentUser = await User.findOne({ email: email });
                if (!currentUser) {
                    const newUser = new User({
                        email: email,
                        username: email.split("@")[0],
                        profilepic: profile.avatar_url,
                    })

                    await newUser.save()
                }
                return true
            }
            return false
        },
        async session({ session, user, token }) {
            const dbUser = await User.find({ email: session.user.email })
            session.user.name = newUser.username
            return session
        },
        async jwt({ token, user }) {
            if (user) {
                token.username = user.username;
            }
            return token;
        },
    },
})
export { handler as GET, handler as POST }