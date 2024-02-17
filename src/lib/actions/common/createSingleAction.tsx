"use server";

import { cookies } from "next/headers";

export async function createSingleAction({
	endpoint,
	body,
}: {
	endpoint: string;
	body: any;
}) {
	const accessToken = cookies().get("access-token")!.value;

	const response = await fetch(`${process.env.BASE_URL}/${endpoint}`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: accessToken,
			body: JSON.stringify(body),
		},
	});

	const responseData = await response.json();
	return responseData;
}

