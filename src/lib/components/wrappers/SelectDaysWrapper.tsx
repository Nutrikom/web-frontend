"use client";
import SelectDays from "@/lib/components/SelectDays";
import AddMealForm from "@/lib/components/forms/AddMealForm";
import React from "react";

export default function SelectDaysWrapper({ dayCount }: { dayCount: number }) {
	const [groupSelected, setGroupSelected] = React.useState<any>([]);
	return (
		<>
			<SelectDays
				dayNum={dayCount}
				groupSelected={groupSelected}
				setGroupSelected={setGroupSelected}
			/>
			<AddMealForm />
		</>
	);
}

