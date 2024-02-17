"use server";

import { cookies } from "next/headers";

export async function getSingleClientAction({ id }: { id: string }) {
	const accessToken = cookies().get("access-token")!.value;

	const response = await fetch(`${process.env.BASE_URL}/patients/${id}`, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			Authorization: accessToken,
		},
	});

	const responseData = await response.json();
	return responseData;
}

