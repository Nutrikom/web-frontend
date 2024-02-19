import { getSingleActionWithId } from "@/lib/actions/common/getSingleActionWithId";
import SelectDays from "@/lib/components/SelectDays";

export default async function TemplatesDetailsPage({
	params,
}: {
	params: { id: string };
}) {
	const data = await getSingleActionWithId({
		endpoint: "plans",
		id: params.id,
	});
	return (
		<div className='h-full p-8'>
			<SelectDays dayNum={data.days} />
		</div>
	);
}

