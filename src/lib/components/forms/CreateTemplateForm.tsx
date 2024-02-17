"use client";
import React from "react";

import { createSingleAction } from "@/lib/actions/common/createSingleAction";
import { Button, Input } from "@nextui-org/react";
import { useFormState, useFormStatus } from "react-dom";

export default function CreateTemplateForm({ clientDetails }: any) {
	const [formState, formAction] = useFormState(createSingleAction, {
		message: null,
		errors: undefined,
	});
	const { pending } = useFormStatus();

	const [editable, setEditable] = React.useState(false);
	return (
		<form
			action={formAction}
			className='bg-content1 shadow-small p-4 rounded-lg'
		>
			<div>
				<div>
					<h1 className='text-md'>Yeni Şablon Oluştur</h1>
				</div>
				<div className='grid grid-cols-2 gap-2 py-2'>
					<Input
						defaultValue={clientDetails?.name}
						name='name'
						variant='bordered'
						type='text'
						label='Ad'
						size='sm'
					/>
					<Input
						defaultValue={clientDetails?.age}
						name='dayNumber'
						variant='bordered'
						type='number'
						label='Gün Sayısı'
						size='sm'
					/>
					<Button
						type='submit'
						aria-disabled={pending}
						color='danger'
						className='col-span-2'
					>
						Oluştur
					</Button>
				</div>
			</div>
		</form>
	);
}

