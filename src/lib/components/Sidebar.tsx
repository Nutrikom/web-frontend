"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
	BookDashed,
	BookText,
	CookingPot,
	LayoutDashboard,
	LogOut,
	Settings,
	Users,
} from "lucide-react";

const routes = [
	{
		label: "Pano",
		href: "/dashboard",
		icon: LayoutDashboard,
		color: "text-sky-500",
	},
	{
		label: "Danışanlarım",
		icon: Users,
		href: "/clients",
		color: "text-violet-500",
	},
	{
		label: "Diyet Şablonlarım",
		icon: BookDashed,
		href: "/templates",
		color: "text-pink-500",
	},
	{
		label: "Diyet Listelerim",
		icon: BookText,
		href: "/programs",
		color: "text-orange-500",
	},
	{
		label: "Temel Besinler",
		icon: CookingPot,
		href: "/contents",
		color: "text-emerald-500",
	},

	{
		label: "Ayarlar",
		icon: Settings,
		href: "/settings",
	},
	{
		label: "Çıkış Yap",
		icon: LogOut,
		href: "/logout",
		color: "text-green-700",
	},
];

const Sidebar = () => {
	const pathname = usePathname();
	return (
		<div className='py-4 flex flex-col h-full bg-[#111827] text-white'>
			<div className='px-3 py-2 flex-1'>
				<Link
					href='/dashboard'
					className='flex items-center pl-3 mb-14'
				>
					<div className='relative w-8 h-8 mr-4 bg-white'>
						<Image fill alt='logo' src='/next.svg' />
					</div>
					<h1 className='text-2xl font-bold'> Nutrikom</h1>
				</Link>
				<div className='space-y-1'>
					{routes.map((route) => (
						<Link
							key={route.href}
							href={route.href}
							className={`text-sm flex w-full p-3 justify-start font-medium rounded-lg transition cursor-pointer hover:text-white hover:bg-white/10 ${
								pathname === route.href
									? "bg-white/10 text-white"
									: ""
							}`}
						>
							<div className='flex items-center flex-1'>
								<route.icon
									className={`w-6 h-6 mr-4 ${route.color} `}
								/>
								<span>{route.label}</span>
							</div>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
};

export default Sidebar;

