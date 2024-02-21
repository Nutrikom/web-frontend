"use client";

import { addMealAction } from "@/lib/actions/mealActions/addMealAction";
import { mealTimes } from "@/lib/data/mealTimes";
import { portionTypes } from "@/lib/data/portionTypes";

import {
	Autocomplete,
	AutocompleteItem,
	Button,
	Input,
	Spinner,
} from "@nextui-org/react";
import { useEffect, useRef, useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { toast } from "react-toastify";

function SubmitButton() {
	const { pending } = useFormStatus();

	return (
		<Button
			type='submit'
			aria-disabled={pending}
			disabled={pending}
			isLoading={pending}
			spinner={<Spinner color='white' />}
			color='danger'
			className='max-w-xs w-full '
		>
			Öğün Ekle
		</Button>
	);
}
export const animals = [
	{
		label: "Cat",
		value: "cat",
		description: "The second most popular pet in the world",
	},
	{
		label: "Dog",
		value: "dog",
		description: "The most popular pet in the world",
	},
	{
		label: "Elephant",
		value: "elephant",
		description: "The largest land animal",
	},
	{ label: "Lion", value: "lion", description: "The king of the jungle" },
	{ label: "Tiger", value: "tiger", description: "The largest cat species" },
	{
		label: "Giraffe",
		value: "giraffe",
		description: "The tallest land animal",
	},
	{
		label: "Dolphin",
		value: "dolphin",
		description:
			"A widely distributed and diverse group of aquatic mammals",
	},
	{
		label: "Penguin",
		value: "penguin",
		description: "A group of aquatic flightless birds",
	},
	{
		label: "Zebra",
		value: "zebra",
		description: "A several species of African equids",
	},
	{
		label: "Shark",
		value: "shark",
		description:
			"A group of elasmobranch fish characterized by a cartilaginous skeleton",
	},
	{
		label: "Whale",
		value: "whale",
		description: "Diverse group of fully aquatic placental marine mammals",
	},
	{
		label: "Otter",
		value: "otter",
		description: "A carnivorous mammal in the subfamily Lutrinae",
	},
	{
		label: "Crocodile",
		value: "crocodile",
		description: "A large semiaquatic reptile",
	},
];

export default function AddMealForm() {
	const [formState, formAction] = useFormState(addMealAction, {
		status: "Idle",
		message: null,
		errors: undefined,
	});

	const ref = useRef<HTMLFormElement>(null);
	const [isVisible, setIsVisible] = useState<boolean>(false);

	useEffect(() => {
		switch (formState.status) {
			case "Validation Error":
				toast.error(`${formState.message}:\n Girdileri Kontrol Edin.`);
				ref.current?.reset();
				break;
			case "Error":
				toast.error(
					`${formState.message}:\n Bilinmeyen bir hata oluştu.`
				);
				ref.current?.reset();

				break;
			default:
				break;
		}
	}, [formState]);

	return (
		<form
			ref={ref}
			action={formAction}
			className='flex lg:flex-nowrap flex-wrap gap-2 justify-center items-center'
		>
			<Autocomplete
				defaultItems={animals}
				label='Diyet Yemeği'
				className='max-w-xs'
			>
				{(animal) => (
					<AutocompleteItem key={animal.value}>
						{animal.label}
					</AutocompleteItem>
				)}
			</Autocomplete>
			<Autocomplete
				defaultItems={mealTimes}
				label='Diyet Öğünü'
				className='max-w-xs'
			>
				{(mealTime) => (
					<AutocompleteItem key={mealTime.value}>
						{mealTime.label}
					</AutocompleteItem>
				)}
			</Autocomplete>
			<Autocomplete
				defaultItems={portionTypes}
				label='Porsiyon Tipi'
				className='max-w-xs'
			>
				{(portionType) => (
					<AutocompleteItem key={portionType.value}>
						{portionType.label}
					</AutocompleteItem>
				)}
			</Autocomplete>
			{/* TODO: edit form */}
			<Input
				isRequired
				name='portionAmount'
				variant='faded'
				autoComplete='off'
				isInvalid={!!formState.errors?.username}
				errorMessage={formState.errors?.username ?? ""}
				type='number'
				label='Porsiyon Miktarı'
				className='max-w-xs'
			/>
			<SubmitButton />
		</form>
	);
}

