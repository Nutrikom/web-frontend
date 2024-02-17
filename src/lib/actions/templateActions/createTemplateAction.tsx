"use server";

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export async function createClientAction(
	previousState: any,
	formData: FormData
): Promise<any> {
	const accessToken = cookies().get("access-token")!.value;

	const response = await fetch(`${process.env.BASE_URL}/employee`, {
		cache: "no-cache",
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: accessToken,
		},
		body: JSON.stringify(null),
	});

	const responseData = await response.json();
	revalidatePath("/clients");
	return {
		message: "Employee created successfully",
		type: "SUCCESS",
	};
}

