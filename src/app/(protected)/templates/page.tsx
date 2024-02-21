import { getAllActionWithSearch } from "@/lib/actions/common/getAllActionWithSearch";
import AddMealForm from "@/lib/components/forms/AddMealForm";
import CreateTemplateForm from "@/lib/components/forms/CreateTemplateForm";
import TemplatesTable from "@/lib/components/tables/TemplatesTable";

export default async function TemplatesPage({
	searchParams,
}: {
	searchParams?: { search?: string; page?: string };
}) {
	const data = await getAllActionWithSearch(
		"plans",
		searchParams?.search,
		searchParams?.page
	);
	return (
		<div className='p-8 space-y-4'>
			<TemplatesTable pageData={data} />
			<CreateTemplateForm />
		</div>
	);
}

