"use client";
import { useSession } from "next-auth/react";

const GreetingTitle = () => {
	const { data: session } = useSession();
	const isSession = session !== null;
	const isUser = session?.user?.name !== null;

	return (
		<>
			{isSession ? (
				<h1 className="font-bold text-2xl">
					Welcome back {session?.user?.name}
				</h1>
			) : (
				<p>Please log in to use our services</p>
			)}
		</>
	);
};

export default GreetingTitle;
