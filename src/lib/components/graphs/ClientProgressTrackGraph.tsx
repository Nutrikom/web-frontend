import { Card, Tracker, type Color } from "@tremor/react";

interface Tracker {
	color: Color;
	tooltip: string;
}

const data: Tracker[] = [
	{ color: "emerald", tooltip: "Operational" },
	{ color: "emerald", tooltip: "Operational" },
	{ color: "emerald", tooltip: "Operational" },
	{ color: "emerald", tooltip: "Operational" },
	{ color: "emerald", tooltip: "Operational" },
	{ color: "emerald", tooltip: "Operational" },
	{ color: "emerald", tooltip: "Operational" },
	{ color: "emerald", tooltip: "Operational" },
	{ color: "emerald", tooltip: "Operational" },
	{ color: "emerald", tooltip: "Operational" },
	{ color: "emerald", tooltip: "Operational" },
	{ color: "emerald", tooltip: "Operational" },
	{ color: "emerald", tooltip: "Operational" },
	{ color: "emerald", tooltip: "Operational" },
	{ color: "rose", tooltip: "Downtime" },
	{ color: "emerald", tooltip: "Operational" },
	{ color: "emerald", tooltip: "Operational" },
	{ color: "emerald", tooltip: "Operational" },
	{ color: "emerald", tooltip: "Operational" },
	{ color: "gray", tooltip: "Maintenance" },
	{ color: "emerald", tooltip: "Operational" },
	{ color: "emerald", tooltip: "Operational" },
	{ color: "emerald", tooltip: "Operational" },
	{ color: "yellow", tooltip: "Degraded" },
	{ color: "emerald", tooltip: "Operational" },
];

export default function ClientProgressTrackGraph() {
	return (
		<Card className='mx-auto max-w-md'>
			<p className='text-tremor-default flex items-center justify-between'>
				<span className='text-tremor-content-strong dark:text-dark-tremor-content-strong font-medium'>
					Diyet Takibi
				</span>
				<span className='text-tremor-content dark:text-dark-tremor-content'>
					Uygulama Oranı 99.1%
				</span>
			</p>
			<Tracker data={data} className='mt-2' />
		</Card>
	);
}

