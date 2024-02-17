import { getSingleActionWithId } from "@/lib/actions/common/getSingleActionWithId";
import ClientDetailsForm from "@/lib/components/forms/ClientDetailsForm";

export default async function ClientDetailsPage({
	params,
}: {
	params: {
		id: string;
	};
}) {
	// const clientDetails = await getSingleClientAction({ id: params.id });
	const clientDetails = await getSingleActionWithId({
		endpoint: "patients",
		id: params.id,
	});

	return <ClientDetailsForm clientDetails={clientDetails} />;
}

