"use server";

import ClientTable from "@/lib/components/tables/ClientsTable";

export default async function ClientsTableComponent({
	searchParams,
}: {
	searchParams?: {
		search?: string;
		page?: string;
	};
}) {
	const data: any = {
		pageable: {
			pageNumber: 0,
			pageSize: 1,
			offset: 0,
			paged: true,
			unpaged: true,
		},
		totalElements: 1,
		totalPages: 1,
		last: true,
		first: true,
		content: [
			{
				email: "test",
				name: "test",
				lastName: "test",
				phoneNumber: "test",
				carPlate: "test",
				tcNo: "test",
				address: "test",
				emergencyContactName: "test",
				emergencyContactPhoneNumber: "test",
				gender: "test",
				bloodType: "test",
				fullName: "test",
				birthDate: {
					year: 1999,
					month: 9,
					day: 27,
				},
			},
		],
	};

	return (
		<div className='p-4'>
			<ClientTable pageData={data} />
		</div>
	);
}

