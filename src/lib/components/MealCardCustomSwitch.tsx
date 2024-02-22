import { SwitchProps, VisuallyHidden, useSwitch } from "@nextui-org/react";
import { FoldVertical, UnfoldVertical } from "lucide-react";

export default function MealCardCustomSwitch(props: SwitchProps) {
	const {
		Component,
		slots,
		isSelected,
		getBaseProps,
		getInputProps,
		getWrapperProps,
	} = useSwitch(props);

	return (
		<div className='flex flex-col gap-2'>
			<Component {...getBaseProps()}>
				<VisuallyHidden>
					<input {...getInputProps()} />
				</VisuallyHidden>
				<div
					{...getWrapperProps()}
					className={slots.wrapper({
						class: [
							"w-8 h-8",
							"flex items-center justify-center",
							"rounded-lg bg-default-100 hover:bg-default-200",
						],
					})}
				>
					{isSelected ? <FoldVertical /> : <UnfoldVertical />}
				</div>
			</Component>
		</div>
	);
}

