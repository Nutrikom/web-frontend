"use server";

import { cookies } from "next/headers";

export async function getAllActionWithSearch(
	endpoint: string,
	searchQuery: string | undefined,
	page: string | undefined
) {
	// Get token from the cookie and decide
	const accessToken = cookies().get("access-token")!.value;

	const response = await fetch(
		`${process.env.BASE_URL}/${endpoint}${page ? `?page=${page}` : ""}${
			searchQuery ? `&searchQuery=${searchQuery}` : ""
		}`,
		{
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: accessToken,
			},
		}
	);

	const responseData = await response.json();
	return responseData;
}

