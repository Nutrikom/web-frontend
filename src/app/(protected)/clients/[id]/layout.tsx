"use client";
import { Tab, Tabs } from "@nextui-org/react";

export default function ClientIdLayout({
	children,
	details,
	graphs,
}: // tabs,
// clientInformation,
{
	children: React.ReactNode;
	details: React.ReactNode;
	graphs: React.ReactNode;
	// clientInformation: React.ReactNode;
}) {
	return (
		<div className='p-4 space-y-4'>
			{children}
			<Tabs
				fullWidth
				aria-label='Options'
				color='primary'
				variant='solid'
				classNames={{
					tabList: "flex-wrap md:flex-nowrap",
				}}
			>
				<Tab key='details' title='Detaylar'>
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

