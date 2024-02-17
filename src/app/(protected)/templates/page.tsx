import SelectDays from "@/lib/components/SelectDays";

export default function TemplatesPage() {
	const dayNum = 12;

	return (
		<div>
			<SelectDays dayNum={dayNum} />
		</div>
	);
}

