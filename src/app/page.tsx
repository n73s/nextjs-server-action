import Link from "next/link";

export default function Home() {
	return (
		<main>
			<ul>
				<li>
					<Link href="/with-pe">With PE</Link>
				</li>
				<li>
					<Link href="/without-pe">Without PE</Link>
				</li>
			</ul>
		</main>
	)
}
