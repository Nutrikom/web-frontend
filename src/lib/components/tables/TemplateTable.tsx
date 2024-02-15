"use client";
import { ChevronDownIcon } from "@/lib/icons/ChevronDownIcon";
import { SearchIcon } from "@/lib/icons/SearchIcon";
import {
	Button,
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownTrigger,
	Input,
	Pagination,
	Selection,
	Spinner,
	Table,
	TableBody,
	TableCell,
	TableColumn,
	TableHeader,
	TableRow,
} from "@nextui-org/react";
import React, { useEffect } from "react";
// import { getEmployeesAction } from "@/lib/actions/getEmployeesAction";
// import { Employee, CorporateProfile } from "./types";
import { PlusIcon } from "@/lib/icons/PlusIcon";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export default function TemplateTable({
	columns,
	pageData,
	renderCell,
	topContentAreas,
}: {
	columns: { name: string; uid: string }[];
	pageData: any;
	renderCell: any;
	topContentAreas: any;
}) {
	const [loadingState, setLoadingState] = React.useState<string>("idle");
	useEffect(() => {
		setLoadingState("idle");
	}, [pageData]);

	const searchParams = useSearchParams();
	const router = useRouter();
	const pathname = usePathname();

	const [visibleColumns, setVisibleColumns] = React.useState<Selection>(
		new Set(columns.map((column) => column.uid))
	);

	// const [rowsPerPage, setRowsPerPage] = React.useState(3);
	// const pages = Math.ceil(items.length / rowsPerPage);

	const onClear = React.useCallback(() => {
		const params = new URLSearchParams(searchParams);
		params.delete("search");
		params.delete("page");
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const headerColumns = React.useMemo(() => {
		if (visibleColumns === "all") return columns;

		return columns.filter((column) =>
			Array.from(visibleColumns).includes(column.uid)
		);
	}, [columns, visibleColumns]);

	const onSearchChange = useDebouncedCallback((value?: string) => {
		const params = new URLSearchParams(searchParams);
		if (value) {
			params.set("search", value);
			params.set("page", "0");
		} else {
			params.delete("search");
			params.delete("page");
		}
		router.replace(`${pathname}?${params.toString()}`);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, 300);

	const onRowsPerPageChange = React.useCallback(
		(e: React.ChangeEvent<HTMLSelectElement>) => {
			// setRowsPerPage(Number(e.target.value));
			// setPage(1);
		},
		[]
	);
	const onPageChange = React.useCallback(
		(pageNumber: number) => {
			setLoadingState("loading");
			const params = new URLSearchParams(searchParams);
			params.set("page", (pageNumber - 1).toString());
			router.replace(`${pathname}?${params.toString()}`);
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[]
	);

	const onNextPage = React.useCallback(() => {
		const params = new URLSearchParams(searchParams);
		params.set("page", (pageData.pageable.pageNumber + 1).toString());
		router.replace(`${pathname}?${params.toString()}`);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [pageData.pageable.pageNumber, pageData.totalPages]);

	const onPreviousPage = React.useCallback(() => {
		const params = new URLSearchParams(searchParams);
		params.set("page", (pageData.pageable.pageNumber - 1).toString());
		router.replace(`${pathname}?${params.toString()}`);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [pageData.pageable.pageNumber]);

	const topContent = React.useMemo(() => {
		return (
			<div className='flex flex-col gap-2'>
				<h1>{topContentAreas.tableName}</h1>
				<div className='flex justify-between gap-2 items-end'>
					<Input
						isClearable
						className='w-full sm:max-w-[44%]'
						placeholder={topContentAreas.searchInputPlaceholder}
						startContent={<SearchIcon />}
						// value={filterValue}
						// defaultValue={searchParams.get("search")?.toString()} // only uncontrolled
						onClear={onClear}
						onValueChange={onSearchChange}
					/>

					<div className='flex gap-3'>
						<Dropdown>
							<DropdownTrigger className='hidden sm:flex'>
								<Button
									endContent={
										<ChevronDownIcon className='text-small' />
									}
									variant='flat'
								>
									Sütunlar
								</Button>
							</DropdownTrigger>
							<DropdownMenu
								disallowEmptySelection
								aria-label='Table Columns'
								closeOnSelect={false}
								selectedKeys={visibleColumns}
								selectionMode='multiple'
								onSelectionChange={setVisibleColumns}
							>
								{columns.map((column) => (
									<DropdownItem key={column.uid}>
										{column.name}
									</DropdownItem>
								))}
							</DropdownMenu>
						</Dropdown>
						{/* TODO: Add Funcionality */}
						{topContentAreas.addButton && (
							<Button
								color='danger'
								endContent={<PlusIcon />}
								onClick={topContentAreas.addButtonOnClick}
							>
								{topContentAreas.addButtonLabel}
							</Button>
						)}
					</div>
				</div>
			</div>
		);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [visibleColumns]);

	const bottomContent = React.useMemo(() => {
		return (
			<div className=' flex justify-between items-center'>
				<Pagination
					isCompact
					showControls
					showShadow
					color='primary'
					page={pageData.pageable.pageNumber + 1}
					total={pageData.totalPages}
					onChange={onPageChange}
				/>
				<div className='hidden sm:flex w-[30%] justify-end gap-2'>
					<Button
						isDisabled={
							pageData.totalPages === 1 ||
							pageData.pageable.pageNumber === 0
						}
						size='sm'
						variant='flat'
						onPress={onPreviousPage}
					>
						Önceki
					</Button>
					<Button
						isDisabled={
							pageData.totalPages === 1 || pageData.last == true
						}
						size='sm'
						variant='flat'
						onPress={onNextPage}
					>
						Sonraki
					</Button>
				</div>
			</div>
		);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [pageData.pageable.pageNumber, pageData.totalPages]);

	return (
		<Table
			aria-label={`Table for ${topContentAreas.tableName}`}
			topContent={topContent}
			bottomContent={bottomContent}
			title={topContentAreas.tableName}
		>
			<TableHeader columns={headerColumns}>
				{(column) => (
					<TableColumn key={column.uid}>{column.name}</TableColumn>
				)}
			</TableHeader>
			<TableBody
				items={pageData.content as any[]}
				emptyContent='Kayıt bulunamadı.'
				loadingContent={<Spinner />}
				loadingState={loadingState as any}
			>
				{(item) => (
					<TableRow key={item.email}>
						{(columnKey) => (
							<TableCell>{renderCell(item, columnKey)}</TableCell>
						)}
					</TableRow>
				)}
			</TableBody>
		</Table>
	);
}

