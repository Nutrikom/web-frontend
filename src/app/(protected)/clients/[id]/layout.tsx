"use client";
import { Tab, Tabs } from "@nextui-org/react";
import { redirect, usePathname } from "next/navigation";
import React from "react";

export default function ClientIdLayout({
	children,
	params,
}: {
	children: React.ReactNode;
	params: {
		id: string;
	};
}) {
	const pathname = usePathname();
	if (pathname === `/clients/${params.id}`) {
		redirect(`/clients/${params.id}/details`);
	}
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
				selectedKey={pathname}
			>
				<Tab
					key={`/clients/${params.id}/details`}
					title='Detaylar'
					href={`/clients/${params.id}/details`}
				>
					{children}
				</Tab>
				<Tab
					key={`/clients/${params.id}/graphs`}
					title='Grafikler'
					href={`/clients/${params.id}/graphs`}
				>
					{children}
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

