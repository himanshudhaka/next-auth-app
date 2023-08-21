import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
export const options = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    // CredentialsProvider({
    //   name: "Credentials",
    //   credentials: {
    //     email: { label: "Email", type: "text", placeholder: "Email" },
    //     password: { label: "Password", type: "password" },
    //   },
    //   async authorize(credentials) {
    //     const user = {
    //       id: 17,
    //       email: "dhaka@openinapp.com",
    //       password: "openinapp",
    //     };

    //     if (
    //       credentials?.email === user.name &&
    //       credentials?.password === user.password
    //     ) {
    //       return user;
    //     }
    //     return null;
    //   },
    // }),
  ],
};

// pages: {
//   signIn: "/login",
// },
