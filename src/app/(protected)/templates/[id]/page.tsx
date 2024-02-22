import { getSingleActionWithId } from "@/lib/actions/common/getSingleActionWithId";
import MealCardsWrapper from "@/lib/components/wrappers/MealCardsWrapper";
import SelectDaysWrapper from "@/lib/components/wrappers/SelectDaysWrapper";

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
		<div className='h-full p-8 space-y-4'>
			{/* <MealPageComponentWrapper dayCount={data.days} /> */}
			<SelectDaysWrapper dayCount={data.days} />
			<MealCardsWrapper dayCount={data.days} />
		</div>
	);
}

