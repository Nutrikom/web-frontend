"use client";
import React from "react";

import { Tooltip } from "@nextui-org/react";

import { Eye } from "lucide-react";
import { useRouter } from "next/navigation";
import TemplateTable from "./TemplateTable";

export default function PlansTable({ pageData }: any) {
	const router = useRouter();

	const renderCell = React.useCallback(
		(planTemplate: any, columnKey: React.Key) => {
			const cellValue = planTemplate[columnKey as keyof any];

			switch (columnKey) {
				case "name":
					return cellValue as string;
				case "comment":
					if (planTemplate.comment) {
						return cellValue as string;
					} else {
						return "Açıklama Yok";
					}

				case "dayNum":
					return cellValue as string;

				case "more":
					return (
						<Tooltip content='Detaylar'>
							<span
								className='text-lg text-default-400 cursor-pointer active:opacity-50'
								onClick={() =>
									router.push(`/templates/${planTemplate.id}`)
								}
							>
								<Eye />
							</span>
						</Tooltip>
					);
				default:
					return cellValue as string;
			}
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[]
	);

	const topContentAreas = {
		tableName: "Şablonlarım",
		search: true,
		searchInputPlaceholder: "Şablon Ara",
		addButton: false,
		addButtonLabel: "Yeni Danışan Ekle",
		addButtonOnClick: () => router.push("/clients/create"),
	};

	const columns = [
		{ name: "Şablon İsmi", uid: "name" },
		{ name: "Ek Açıklama", uid: "comment" },
		{ name: "Toplam Gün", uid: "dayNum" },
		{ name: "Detaylar", uid: "more" },
	];

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

