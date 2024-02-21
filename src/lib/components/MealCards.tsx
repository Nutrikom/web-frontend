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

export default function MealCards({ dayCount }: { dayCount: number }) {
	return (
		<Card className='w-1/4'>
			<CardHeader>
				<CircularProgress
					aria-label='Loading...'
					size='lg'
					value={40}
					color='warning'
					showValueLabel={true}
				/>
				<div className='flex flex-col'>
					<p className='text-md'>1. Gün</p>
					<p className='text-small text-default-500'>nextui.org</p>
				</div>
			</CardHeader>
			<Divider />
			<CardBody className=''>
				<Accordion selectionMode='multiple' variant='bordered'>
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
						aria-label='Öğle Yemeği'
						title='Öğle Yemeği'
					>
						<div className='flex flex-col'>
							<p className='text-md'>NextUI</p>
							<p className='text-small text-default-500'>
								nextui.org
							</p>
						</div>
					</AccordionItem>
					<AccordionItem
						key='3'
						aria-label='Akşam Yemeği'
						title='Akşam Yemeği'
					>
						<div className='flex flex-col'>
							<p className='text-md'>NextUI</p>
							<p className='text-small text-default-500'>
								nextui.org
							</p>
						</div>
					</AccordionItem>
				</Accordion>
			</CardBody>
		</Card>
	);
}

