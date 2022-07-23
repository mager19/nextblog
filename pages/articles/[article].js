import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import styles from "../../styles/Home.module.css";

function Article() {
	const router = useRouter();

	return (
		<div className={styles.container}>
			<Layout titlePage={router.query.article}>
				<div className="container mx-auto mt-4">
					<div className="flex flex-wrap px-4">
						<div className="w-full">
							<p className="text-gray-400">
								Nulla neque dolor, sagittis eget, iaculis quis,
								molestie non, velit. Aliquam lobortis. Praesent
								egestas tristique nibh. Etiam vitae tortor.
								Nullam nulla eros, ultricies sit amet, nonummy
								id, imperdiet feugiat, pede. Suspendisse
								faucibus, nunc et pellentesque egestas, lacus
								ante convallis tellus, vitae iaculis lacus elit
								id tortor. Curabitur suscipit suscipit tellus.
								Suspendisse eu ligula. In enim justo, rhoncus
								ut, imperdiet a, venenatis vitae, justo. Quisque
								ut nisi. Pellentesque habitant morbi tristique
								senectus et netus et malesuada fames ac turpis
								egestas. Cras sagittis. Nunc interdum lacus sit
								amet orci. Praesent nonummy mi in odio.
								Pellentesque habitant morbi tristique senectus
								et netus et malesuada fames ac turpis egestas.
								Donec vitae orci sed dolor rutrum auctor. In ac
								felis quis tortor malesuada pretium. Cras id
								dui. Cum sociis natoque penatibus et magnis dis
								parturient montes, nascetur ridiculus mus. Cum
								sociis natoque penatibus et magnis dis
								parturient montes, nascetur ridiculus mus.
							</p>
						</div>
					</div>
				</div>
			</Layout>
		</div>
	);
}

export default Article;
