import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";


import User from "@models/user";
import { connectToDatabse } from "@utils/database";

//  testing purpose

// console.log({
//     clientId: process.env.GOOGLE_ID,
//     clientSecret: process.env.GOOGLE_CLIENT_SECRET,
// });

// for this google auth we need to create a project in google cloud platform 

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        })
    ],
    callbacks: {
        async session({ session }) {
            const sessionUser = await User.findOne({
                email: session.user.email
            });
            session.user.id = sessionUser._id.toString();
            return session;

        },
        async signIn({ profile }) {
            try {
                // serverless -> lambda
                await connectToDatabse();

                // check if a user already exists in our database with the given email
                const userExists = await User.findOne({ email: profile.email })
                // if not create a new user
                if (!userExists) {
                    await User.create({
                        email: profile.email,
                        username: profile.name.replace(" ", "").toLowerCase(), // without space
                        image: profile.picture,
                    })
                }

                return true;
            } catch (error) {
                console.log(error);
                return false;
            }
        }
    }


});

export { handler as GET, handler as POST };
