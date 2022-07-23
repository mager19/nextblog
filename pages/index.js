import Image from "next/image";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";
import Itemblog from "../components/Itemblog";

export default function Home({ data }) {
	return (
		<div className={styles.container}>
			<Layout
				metaTitle="Inicio | blog"
				description=""
				titlePage="Blog - Articles"
			>
				<div className="items mt-8">
					<div className="container mx-auto">
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
							{data?.map(({ id, title, body }) => (
								<Itemblog
									key={id}
									src="/../public/images/2.jpg"
									title={title}
									excerpt={body}
									permalink={title}
								/>
							))}
						</div>
					</div>
				</div>
			</Layout>
		</div>
	);
}

export async function getStaticProps() {
	try {
		const res = await fetch("https://jsonplaceholder.typicode.com/posts");
		const data = await res.json();
		return {
			props: {
				data: data,
			},
		};
	} catch (error) {
		console.log(error);
	}
}
