// This function gets called at build time and generates the static props

// export async function generateStaticParams() {
//     const posts = await fetch('https://.../posts').then((res) => res.json())

//     return posts.map((post) => ({
//       slug: post.slug,
//     }))
//   }

export default async function ClientPage({
	params,
}: {
	params: {
		id: string;
	};
}) {
	return <> </>;
}

