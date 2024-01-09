import NavbarItem from "./navbar-item";

const Navbar = () => {
	return (
		<header className="pl-10 pr-4 py-4 bg-gray-700">
			<nav className="flex justify-between">
				<h1 className="text-3xl font-bold">Next Auth</h1>

				<div className="flex gap-8">
					<ul className="flex gap-4">
						<NavbarItem name="Home" href="/" />
						<NavbarItem name="Dashboard" href="/" />
					</ul>

					<div className="flex gap-2">
						<button className="bg-cyan-600 px-5 py-2 rounded-full hover:bg-cyan-700">
							Log in
						</button>
						<button className="bg-cyan-600 px-5 py-2 rounded-full hover:bg-cyan-700">
							Log out
						</button>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
