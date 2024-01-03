import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import { connectToDatabse } from "@utils/database";

//  testing purpose

// console.log({
//     clientId: process.env.GOOGLE_ID,
//     clientSecret: process.env.GOOGLE_CLIENT_SECRET,
// });

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            redirectUri: 'http://localhost:3000',
        })
    ],
    async session({ session }) {

    },
    async jwt({ profile }) {
        try {
            // serverless -> lambda
            await connectToDatabse();

            // check if a user already exists in our database with the given email

            // if not create a new user

            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

});

export { handler as GET, handler as POST };
