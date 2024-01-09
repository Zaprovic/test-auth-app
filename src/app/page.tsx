import GreetingTitle from "@/components/greeting-title";
import Navbar from "@/components/navbar";

export default function Home() {
	return (
		<>
			<Navbar />
			<main className="p-3">
				<GreetingTitle />
			</main>
		</>
	);
}
