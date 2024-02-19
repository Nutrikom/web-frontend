import { Divider } from "@nextui-org/react";

export default async function GraphsLayout({
	children,
	weight,
	tracker,
}: {
	children: React.ReactNode;
	weight: React.ReactNode;
	tracker: React.ReactNode;
}) {
	return (
		<div className='h-full'>
			{/* {children} */}
			{tracker}
			<Divider className='my-6' />
			{weight}
		</div>
	);
}

