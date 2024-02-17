"use server";

import { cookies } from "next/headers";

export async function getSingleActionWithId({
	endpoint,
	id,
}: {
	endpoint: string;
	id: string;
}) {
	const accessToken = cookies().get("access-token")!.value;

	const response = await fetch(`${process.env.BASE_URL}/${endpoint}/${id}`, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			Authorization: accessToken,
		},
	});

	const responseData = await response.json();
	return responseData;
}

