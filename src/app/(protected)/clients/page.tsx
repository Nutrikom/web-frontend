import ClientsTable from "@/lib/components/tables/ClientsTable";

export default async function ClientsPage({
	searchParams,
}: {
	searchParams?: {
		name?: string;
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

	const columns = [
		{ name: "Profil", uid: "fullName" },
		{ name: "E-Posta", uid: "email" },
		{ name: "Telefon Numarası", uid: "phoneNumber" },
		{ name: "Detaylar", uid: "more" },
	];

	const baseUrl = process.env.BASE_URL;

	return (
		<div className='p-4'>
			<ClientsTable
				columns={columns}
				pageData={data}
				baseUrl={baseUrl!}
			/>
		</div>
	);
}

