"use client";
import MealCards from "@/lib/components/MealCards";
import { Switch } from "@nextui-org/react";
import React from "react";

function createMealCards(n: number, isCollapsed: boolean) {
	var elements = [];
	for (let i = 0; i < n; i++) {
		elements.push(
			<MealCards key={i} dayNumber={i + 1} isCollapsed={isCollapsed} />
		);
	}
	return elements;
}

export default function MealCardsWrapper({ dayCount }: { dayCount: number }) {
	const [isCollapsed, setIsCollapsed] = React.useState(true);
	return (
		<>
			<Switch
				isSelected={!isCollapsed}
				classNames={{
					label: "text-default-600",
				}}
				onChange={(e: any) => {
					if (e.target.checked) {
						setIsCollapsed(false);
					} else {
						setIsCollapsed(true);
					}
				}}
			>
				Tümünü Göster
			</Switch>
			{/* <div className='flex flex-wrap justify-center gap-2 md:gap-4 min-w-min'> */}
			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 gap-x-6 gap-y-20  min-w-min'>
				{createMealCards(dayCount, isCollapsed)}
			</div>
			{/* <MealCards dayCount={dayCount} /> */}
		</>
	);
}

