import Image from "next/image";
import Link from "next/link";
function Itemblog({ id, src, title, excerpt, permalink }) {
	return (
		<div className="itemBlog">
			{id}
			<figure>
				<Image src={src} alt="alt" width={300} height={300} />
			</figure>

			<h3 className="title text-slate-700">{title}</h3>
			<p className="text-slate-400">{excerpt}</p>
			<Link href={`/articles/${permalink}`}>
				<a>Leer Mas</a>
			</Link>
		</div>
	);
}

export default Itemblog;
