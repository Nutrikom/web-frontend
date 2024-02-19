"use client";
import React from "react";

import { Tooltip, User } from "@nextui-org/react";

import { Eye } from "lucide-react";
import { useRouter } from "next/navigation";
import TemplateTable from "./TemplateTable";

export default function ClientTable({ pageData }: any) {
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
			case "name":
				return (
					<User
						avatarProps={{
							radius: "lg",
							src: url,
						}}
						description={user.telNumber}
						name={cellValue as String}
					></User>
				);
			// case "email":
			// 	return user.email;
			case "planName":
				if (user.planId) {
					return cellValue as string;
				} else {
					return "Diyet Planı Atanmamış";
				}
			case "personal":
				return (
					<div className='text-sm '>
						<div>Yaş: {user.age}</div>
						<div>Boy: {user.height}</div>
					</div>
				);
			case "more":
				return (
					<Tooltip content='Detaylar'>
						<span
							className='text-lg text-default-400 cursor-pointer active:opacity-50'
							onClick={() =>
								router.push(`/clients/${user.id}/details`)
							}
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
		addButtonOnClick: () => router.push("/clients/create"),
	};

	const columns = [
		{ name: "Profil", uid: "name" },
		{ name: "Diyet Planı", uid: "planName" },
		{ name: "Kişisel Bilgiler", uid: "personal" },
		{ name: "Detaylar", uid: "more" },
	];

	return (
		<TemplateTable
			topContentAreas={topContentAreas}
			columns={columns}
			pageData={pageData}
			renderCell={renderCell}
		/>
	);
}

