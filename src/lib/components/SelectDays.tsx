"use client";
import React from "react";

import { CustomCheckbox } from "@/lib/components/CustomCheckbox";
import { CheckboxGroup, Switch } from "@nextui-org/react";

function createElements(n: number) {
	var elements = [];
	for (let i = 0; i < n; i++) {
		elements.push(
			<CustomCheckbox key={i} value={i + 1}>
				{i + 1}
			</CustomCheckbox>
		);
	}
	return elements;
}

export default function SelectDays({
	dayNum,
	groupSelected,
	setGroupSelected,
}: {
	dayNum: number;
	groupSelected: any;
	setGroupSelected: any;
}) {
	const [multipleSelection, setMultipleSelection] = React.useState(false);
	const [allSelected, setAllSelected] = React.useState(false);

	return (
		<div className='space-y-4 '>
			<CheckboxGroup
				classNames={{
					wrapper: "flex justify-around",
				}}
				// label='Gün Seçiniz:'
				orientation='horizontal'
				value={groupSelected}
				onChange={(e) => {
					if ((e as any).length !== dayNum) setAllSelected(false);
					if (multipleSelection) {
						setGroupSelected(e);
					} else {
						setGroupSelected((e as any).slice(-1));
					}
				}}
			>
				{createElements(dayNum)}
			</CheckboxGroup>

			<div className='flex flex-wrap gap-4 border-2 rounded-lg border-solid justify-center self-center p-4'>
				<Switch
					isSelected={allSelected}
					classNames={{
						label: "text-default-600",
					}}
					onChange={(e) => {
						if (e.target.checked) {
							setMultipleSelection(true);
							setAllSelected(true);
							setGroupSelected(
								Array.from({ length: dayNum }, (_, i) => i + 1)
							);
						} else {
							setAllSelected(false);
							setGroupSelected([]);
						}
					}}
				>
					Hepsini Seç
				</Switch>

				<Switch
					isSelected={multipleSelection}
					classNames={{
						label: "text-default-600",
					}}
					onChange={(e) => {
						setMultipleSelection(e.target.checked);
						if (!e.target.checked) {
							setAllSelected(false);
							setGroupSelected([]);
						}
					}}
				>
					Çoklu Seçim
				</Switch>
			</div>
		</div>
	);
}

