import { Chip, VisuallyHidden, tv, useCheckbox } from "@nextui-org/react";
// import {CheckIcon} from './CheckIcon.jsx'

const checkbox = tv({
	slots: {
		base: "border-default hover:bg-default-200 h-16 w-11 rounded-xl flex items-center justify-center ",
		content: "text-default-500 flex flex-col justify-center items-center",
	},
	variants: {
		isSelected: {
			true: {
				base: "border-primary bg-primary hover:bg-primary-500 hover:border-primary-500",
				content: "text-primary-foreground",
			},
		},
		isFocusVisible: {
			true: {
				base: "outline-none ring-2 ring-focus ring-offset-2 ring-offset-background",
			},
		},
	},
});

export const CustomCheckbox = (props: any) => {
	const {
		children,
		isSelected,
		isFocusVisible,
		getBaseProps,
		getLabelProps,
		getInputProps,
	} = useCheckbox({
		...props,
	});

	const styles = checkbox({ isSelected, isFocusVisible });

	return (
		<label {...getBaseProps()}>
			<VisuallyHidden>
				<input {...getInputProps()} />
			</VisuallyHidden>
			<Chip
				classNames={{
					base: styles.base(),
					content: styles.content(),
				}}
				color='primary'
				variant='flat'
				{...getLabelProps()}
			>
				<div>Gün</div>
				<div
					className={`flex justify-center bg-white w-2/3 rounded-lg  ${
						isSelected ? "text-sky-700" : "text-gray-600"
					}`}
				>
					{children ? children : isSelected ? "Enabled" : "Disabled"}
				</div>
			</Chip>
		</label>
	);
};

