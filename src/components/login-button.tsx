"use client";

import { signIn } from "next-auth/react";

const LoginButton = () => {
	return (
		<button
			onClick={() => signIn()}
			className="bg-cyan-600 px-5 py-2 rounded-full hover:bg-cyan-700"
		>
			Log in
		</button>
	);
};

export default LoginButton;
