import { getSingleClientAction } from "@/lib/actions/clientActions/getSingleClientAction";
import ClientDetailsForm from "@/lib/components/forms/ClientDetailsForm";

export default async function ClientDetailsPage({
	params,
}: {
	params: {
		id: string;
	};
}) {
	const clientDetails = await getSingleClientAction({ id: params.id });

	return <ClientDetailsForm clientDetails={clientDetails} />;
}

