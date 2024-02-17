"use server";

import { getAllActionWithSearch } from "@/lib/actions/common/getAllActionWithSearch";
import ClientTable from "@/lib/components/tables/ClientsTable";

export default async function ClientsTableComponent({
	searchParams,
}: {
	searchParams?: {
		search?: string;
		page?: string;
	};
}) {
	const data = await getAllActionWithSearch(
		"patients",
		searchParams?.search,
		searchParams?.page
	);
	return (
		<div className='p-4'>
			<ClientTable pageData={data} />
		</div>
	);
}

