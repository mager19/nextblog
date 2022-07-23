import Link from "next/link";
function Menu() {
	return (
		<ul>
			<Link href="/">
				<li>
					<a>Home</a>
				</li>
			</Link>
			<Link href="works">
				<li>
					<a>Works</a>
				</li>
			</Link>
			<Link href="contact">
				<li>
					<a>Contact</a>
				</li>
			</Link>
		</ul>
	);
}

export default Menu;
