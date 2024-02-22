"use client";
import {
	Accordion,
	AccordionItem,
	Button,
	Card,
	CardBody,
	CardHeader,
	CircularProgress,
	Divider,
} from "@nextui-org/react";

import { X } from "lucide-react";
import React from "react";
import MealCardCustomSwitch from "./MealCardCustomSwitch";

export default function MealCards({
	dayNumber,
	isCollapsed,
}: {
	dayNumber: number;
	isCollapsed: boolean;
}) {
	const [selectedKeys, setSelectedKeys] = React.useState<any>(
		new Set(["1", "2", "3", "4", "5"])
	);
	const [isSelected, setIsSelected] = React.useState(true);
	React.useEffect(() => {
		if (isCollapsed) {
			setSelectedKeys(new Set([]));
			setIsSelected(false);
		} else {
			setSelectedKeys(new Set(["1", "2", "3", "4", "5"]));
			setIsSelected(true);
		}
	}, [isCollapsed]);

	return (
		<Card>
			<CardHeader className='flex justify-between items-center'>
				<CircularProgress
					aria-label='Loading...'
					size='lg'
					value={40}
					color='warning'
					showValueLabel={true}
				/>
				<div className='flex flex-col'>
					<p className='text-md'>{dayNumber}. Gün</p>
					<p className='text-small text-default-500'>nextui.org</p>
				</div>
				<MealCardCustomSwitch
					isSelected={isSelected}
					onValueChange={(e) => {
						if (e) {
							setSelectedKeys(new Set(["1", "2", "3", "4", "5"]));
							setIsSelected(true);
							// setIsCollapsed(true);
						} else {
							// setIsCollapsed(false);
							setIsSelected(false);
							setSelectedKeys(new Set([]));
						}
					}}
				/>
			</CardHeader>
			<Divider />
			<CardBody>
				<Accordion
					selectionMode='multiple'
					selectedKeys={selectedKeys}
					onSelectionChange={setSelectedKeys}
					itemClasses={{
						trigger: "hover:bg-default-100 rounded-lg",
					}}
				>
					<AccordionItem
						key='1'
						aria-label='Kahvaltı'
						title='Kahvaltı'
					>
						<div className='flex justify-between items-center bg-content1 shadow-small p-2 m-1 rounded-lg'>
							<div className='flex flex-col'>
								<p className='text-md'>Yımırta</p>
								<p className='text-small text-default-500'>
									Kalori: 100
								</p>
							</div>
							<Button
								radius='full'
								size='sm'
								color='danger'
								isIconOnly
							>
								<X />
							</Button>
						</div>
					</AccordionItem>
					<AccordionItem
						key='2'
						aria-label='Ara Öğün (Öğlen)'
						title='Ara Öğün (Öğlen)'
					>
						<div className='flex justify-between items-center bg-content1 shadow-small p-2 m-1 rounded-lg'>
							<div className='flex flex-col'>
								<p className='text-md'>Yımırta</p>
								<p className='text-small text-default-500'>
									Kalori: 100
								</p>
							</div>
							<Button
								radius='full'
								size='sm'
								color='danger'
								isIconOnly
							>
								<X />
							</Button>
						</div>
					</AccordionItem>
					<AccordionItem
						key='3'
						aria-label='Öğle Yemeği'
						title='Öğle Yemeği'
					>
						<div className='flex justify-between items-center bg-content1 shadow-small p-2 m-1 rounded-lg'>
							<div className='flex flex-col'>
								<p className='text-md'>Yımırta</p>
								<p className='text-small text-default-500'>
									Kalori: 100
								</p>
							</div>
							<Button
								radius='full'
								size='sm'
								color='danger'
								isIconOnly
							>
								<X />
							</Button>
						</div>
					</AccordionItem>
					<AccordionItem
						key='4'
						aria-label='Ara Öğün (Akşam)'
						title='Ara Öğün (Akşam)'
					>
						<div className='flex justify-between items-center bg-content1 shadow-small p-2 m-1 rounded-lg'>
							<div className='flex flex-col'>
								<p className='text-md'>Yımırta</p>
								<p className='text-small text-default-500'>
									Kalori: 100
								</p>
							</div>
							<Button
								radius='full'
								size='sm'
								color='danger'
								isIconOnly
							>
								<X />
							</Button>
						</div>
					</AccordionItem>
					<AccordionItem
						key='5'
						aria-label='Akşam Yemeği'
						title='Akşam Yemeği'
					>
						<div className='flex justify-between items-center bg-content1 shadow-small p-2 m-1 rounded-lg'>
							<div className='flex flex-col'>
								<p className='text-md'>Yımırta</p>
								<p className='text-small text-default-500'>
									Kalori: 100
								</p>
							</div>
							<Button
								radius='full'
								size='sm'
								color='danger'
								isIconOnly
							>
								<X />
							</Button>
						</div>
					</AccordionItem>
				</Accordion>
			</CardBody>
		</Card>
	);
}

