export default function ClientsLayout(props: {
	children: React.ReactNode;
	table: React.ReactNode;
}) {
	return (
		<div className='h-full'>
			<div className=''>{props.table}</div>
		</div>
	);
}

