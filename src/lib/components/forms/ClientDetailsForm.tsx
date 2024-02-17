"use client";
import React from "react";

import { createClientAction } from "@/lib/actions/clientActions/createClientAction";
import { Button, Input, Switch } from "@nextui-org/react";
import { useFormState, useFormStatus } from "react-dom";

export default function ClientDetailsForm({ clientDetails }: any) {
	const [formState, formAction] = useFormState(createClientAction, {
		message: null,
		errors: undefined,
	});
	const { pending } = useFormStatus();

	const [editable, setEditable] = React.useState(false);
	return (
		<form action={formAction} className='bg-white p-2 rounded-lg'>
			<div>
				<div>
					<Switch
						size='sm'
						checked={editable}
						onChange={() => setEditable(!editable)}
					>
						Düzenleme Modu
					</Switch>
				</div>
				<div className='grid grid-cols-2 gap-2 py-2'>
					<Input
						isReadOnly={!editable}
						defaultValue={clientDetails?.name}
						name='name'
						variant='bordered'
						type='text'
						label='Ad'
						size='sm'
					/>
					{/* <Input
						name='lastname'
						variant='bordered'
						type='text'
						label='Soyad'
						size='sm'
					/> */}

					<Input
						isReadOnly={!editable}
						defaultValue={clientDetails?.email}
						name='email'
						variant='bordered'
						type='text'
						label='E-Posta'
						size='sm'
					/>
					<Input
						isReadOnly={!editable}
						defaultValue={clientDetails?.birthDate}
						name='birthDate'
						variant='bordered'
						type='date'
						label='Dogum Tarihi'
						placeholder='Dogum gunu'
						size='sm'
					/>

					<Input
						isReadOnly={!editable}
						defaultValue={clientDetails?.telNumber}
						name='phoneNumber'
						variant='bordered'
						type='text'
						label='Telefon Numarası'
						size='sm'
					/>
					<Input
						isReadOnly={!editable}
						defaultValue={clientDetails?.age}
						name='age'
						variant='bordered'
						type='number'
						label='Yaş'
						size='sm'
					/>
					<Input
						isReadOnly={!editable}
						defaultValue={clientDetails?.height}
						name='height'
						variant='bordered'
						type='number'
						label='Boy (cm)'
						size='sm'
					/>
					<Input
						isReadOnly={!editable}
						defaultValue={clientDetails?.weight ?? "Bilgi Yok"}
						name='weight'
						variant='bordered'
						type='text'
						label='Kilo (kg)'
						size='sm'
					/>
				</div>
			</div>

			<Button
				isDisabled={!editable}
				type='submit'
				aria-disabled={pending}
				color='primary'
				className='w-full'
			>
				Güncelle
			</Button>
		</form>
	);
}

