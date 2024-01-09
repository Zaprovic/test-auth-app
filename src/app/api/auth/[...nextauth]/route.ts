import { AuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import Github from "next-auth/providers/github";

const clientId = process.env.GITHUB_CLIENT_ID;
const clientSecret = process.env.GITHUB_SECRET;

if (!clientId || !clientSecret) {
	throw new Error("Please provide client id and client secret");
}

const authOptions: AuthOptions = {
	providers: [
		Github({
			clientId,
			clientSecret,
		}),
	],
	secret: process.env.NEXT_AUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
