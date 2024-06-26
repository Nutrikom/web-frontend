"use server";

import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { ZodError } from "zod";
import { loginSchema } from "../../schemas/authenticationSchema";
type Fields = {
	username: string;
	password: string;
};

export type FormState = {
	status: string;
	message: string | null;
	errors: any;
};

export async function addMealAction(
	previousState: FormState,
	formData: FormData
): Promise<FormState> {
	try {
		const validationData = loginSchema.safeParse({
			username: formData.get("username"),
			password: formData.get("password"),
		});
		if (!validationData.success) {
			const zodError = validationData.error as ZodError;
			const errorMap = zodError.flatten().fieldErrors;
			return {
				message: `Validation Failed`,
				errors: errorMap,
				status: "Validation Error",
			};
		}

		const response = await fetch(`${process.env.BASE_URL}/auth/login`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(validationData.data),
			cache: "no-cache",
		});

		const responseData = await response.json();

		if (responseData.token && response.ok) {
			const {
				exp: expirationDate,
				sub: _subject,
			}: {
				exp: number;
				sub: string;
			} = jwtDecode(responseData.token);

			cookies().set({
				name: "access-token",
				value: `${responseData.token}`,
				secure: true,
				expires: expirationDate * 1000,
				sameSite: "strict",
			});
		} else {
			throw new Error("Login Failed", {
				cause: { message: responseData.error },
			});
		}
	} catch (error: any) {
		return {
			message: error.message,
			errors: error.cause?.message,
			status: "Error",
		};
	}

	redirect("/dashboard");
}

