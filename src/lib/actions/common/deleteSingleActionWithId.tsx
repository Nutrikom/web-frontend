"use server";

import { cookies } from "next/headers";

export async function deleteSingleActionWithId({
	endpoint,
	id,
}: {
	endpoint: string;
	id: string;
}) {
	const accessToken = cookies().get("access-token")!.value;

	const response = await fetch(`${process.env.BASE_URL}/${endpoint}/${id}`, {
		method: "DELETE",
		headers: {
			"Content-Type": "application/json",
			Authorization: accessToken,
		},
	});

	const responseData = await response.json();
	return responseData;
}

