"use client";
import React from "react";

import { Tooltip, User } from "@nextui-org/react";

import { Eye } from "lucide-react";
import { useRouter } from "next/navigation";
import TemplateTable from "./TemplateTable";

export default function TestTable({ baseUrl, pageData, columns }: any) {
	const router = useRouter();

	const renderCell = React.useCallback((user: any, columnKey: React.Key) => {
		const cellValue = user[columnKey as keyof any];
		let url;

		if (user.photoId) {
			// url = `${baseUrl}/employee/${user.id}/photo`;
		} else {
			url = "https://i.pravatar.cc/150?u=a042581f4e29026024d";
		}
		switch (columnKey) {
			case "fullName":
				return (
					<User
						avatarProps={{
							radius: "lg",
							src: url,
						}}
						description={user.email}
						name={cellValue as String}
					></User>
				);
			case "email":
				return user.email;
			case "phoneNumber":
				return cellValue as string;
			case "more":
				return (
					<Tooltip content='Detaylar'>
						<span
							className='text-lg text-default-400 cursor-pointer active:opacity-50'
							onClick={() => router.push(`/client/${user.id}`)}
						>
							<Eye />
						</span>
					</Tooltip>
				);
			default:
				return cellValue as string;
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const topContentAreas = {
		tableName: "Danışanlarım",
		search: true,
		searchInputPlaceholder: "Isim Soyisim...",
		addButton: true,
		addButtonLabel: "Yeni Danışan Ekle",
		addButtonOnClick: () => router.push("/clients/new"),
	};
	const tableName = "Danışanlarım";

	return (
		<div className='p-4'>
			<TemplateTable
				topContentAreas={topContentAreas}
				columns={columns}
				pageData={pageData}
				renderCell={renderCell}
			/>
		</div>
	);
}

