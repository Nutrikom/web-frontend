// This function gets called at build time and generates the static props

import { getSingleClientAction } from "@/lib/actions/clientActions/getSingleClientAction";

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
	const clientDetails = await getSingleClientAction({ id: params.id });

	return (
		<div className='flex justify-between px-2'>
			<h1 className='text-lg font-bold'>{clientDetails?.name} Profili</h1>
		</div>
	);
}

