import Link from "next/link";

const NavbarItem = ({ href, name }: { href?: string; name: string }) => {
	return (
		<li className="bg-sky-700 px-5 py-2 rounded">
			<Link href={"/"}>{name}</Link>
		</li>
	);
};

export default NavbarItem;
