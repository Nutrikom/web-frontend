"use client";
import { loginUserAction } from "@/lib/actions/authenticationAction";
import { EyeFilledIcon } from "@/lib/icons/EyeFilledIcon";
import { EyeSlashFilledIcon } from "@/lib/icons/EyeSlashedFilledIcon";

import { Button, Input, Spinner } from "@nextui-org/react";
import { toast } from "react-toastify";

import Image from "next/image";

import { useEffect, useRef, useState } from "react";
import { useFormState, useFormStatus } from "react-dom";

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
			className='max-w-xs w-full'
		>
			Giriş Yap
		</Button>
	);
}

export default function SignInForm() {
	const [formState, formAction] = useFormState(loginUserAction, {
		status: "Idle",
		message: null,
		errors: undefined,
	});

	const ref = useRef<HTMLFormElement>(null);
	const [isVisible, setIsVisible] = useState<boolean>(false);

	useEffect(() => {
		switch (formState.status) {
			case "Validation Error":
				toast.error(
					`${formState.message}:\n Check your credentials and try again.`
				);
				ref.current?.reset();
				break;
			case "Error":
				toast.error(`${formState.message}:\n Please try again later.`);
				ref.current?.reset();

				break;
			default:
				break;
		}
	}, [formState]);

	const toggleVisibility = () => setIsVisible(!isVisible);

	return (
		<form
			ref={ref}
			action={formAction}
			autoComplete='off'
			className='flex flex-col gap-2 p-2 '
		>
			<Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
			<h1 className='text-lg font-bold'>Nutrikom Giriş</h1>

			<Input
				isRequired
				name='username'
				variant='bordered'
				autoComplete='off'
				isInvalid={!!formState.errors?.username}
				errorMessage={formState.errors?.username ?? ""}
				type='text'
				label='Kullanıcı Adı / E-Posta'
				className='max-w-xs'
			/>

			<Input
				isRequired
				name='password'
				label='Şifre'
				variant='bordered'
				isInvalid={!!formState.errors?.password}
				errorMessage={formState.errors?.password ?? ""}
				endContent={
					<button
						className='focus:outline-none'
						type='button'
						onClick={toggleVisibility}
					>
						{isVisible ? (
							<EyeSlashFilledIcon className='text-2xl text-default-400 pointer-events-none' />
						) : (
							<EyeFilledIcon className='text-2xl text-default-400 pointer-events-none' />
						)}
					</button>
				}
				type={isVisible ? "text" : "password"}
				className='max-w-xs'
			/>

			<SubmitButton />
		</form>
	);
}

