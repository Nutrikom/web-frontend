"use client";
import { Tab, Tabs } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import React from "react";

export default function ClientIdLayout({
	children,
	details,
	graphs,
	params,
}: {
	children: React.ReactNode;
	details: React.ReactNode;
	graphs: React.ReactNode;
	params: {
		// id: string;
		// tabSection: string;
		slug: string[];
	};
}) {
	const router = useRouter();

	return (
		<div className='p-4 space-y-4'>
			<Tabs
				fullWidth
				aria-label='Options'
				color='primary'
				variant='solid'
				classNames={{
					tabList: "flex-wrap md:flex-nowrap",
				}}
				selectedKey={params.slug[1]}
				onSelectionChange={(e) => {
					router.push(`/clients/${params.slug[0]}/${e}`);
				}}
			>
				<Tab key={"details"} title='Detaylar'>
					{details}
				</Tab>
				<Tab key='graphs' title='Grafikler'>
					{graphs}
				</Tab>
				<Tab key='appointments' title='Görüşmeler' isDisabled>
					{children}
				</Tab>
				<Tab key='dietProgram' title='Diyet Programı' isDisabled>
					{/* {children} */}
				</Tab>
				<Tab key='workout' title='Antrenman Programı' isDisabled>
					{/* {children} */}
				</Tab>
			</Tabs>
		</div>
	);
}

