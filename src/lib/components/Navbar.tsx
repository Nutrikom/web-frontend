"use client";
// // import {
// // 	Avatar,
// // 	AvatarFallback,
// // 	AvatarImage,
// // } from "@/lib/components/ui/avatar";
// import MobileSidebar from "@/lib/components/MobileSidebar";

// const Navbar = () => {
// 	return (
// 		<div className='flex items-center p-4'>
// 			<MobileSidebar />
// 			<div className='flex w-full justify-end'>
// 				{/* <Avatar>
// 					<AvatarImage src='https://github.com/shadcn.png' />
// 					<AvatarFallback>CN</AvatarFallback>
// 				</Avatar> */}
// 				<div>Avatar</div>
// 			</div>
// 		</div>
// 	);
// };
// export default Navbar;

import {
	Avatar,
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownTrigger,
	Link,
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarMenu,
	NavbarMenuItem,
	NavbarMenuToggle,
} from "@nextui-org/react";
import React from "react";

import {
	BookDashed,
	BookText,
	CookingPot,
	LayoutDashboard,
	LogOut,
	Settings,
	Users,
} from "lucide-react";
import { usePathname } from "next/navigation";

export default function NavbarComponent() {
	const [isMenuOpen, setIsMenuOpen] = React.useState(false);
	const pathname = usePathname();

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
			href: "/plans",
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
	return (
		<Navbar
			onMenuOpenChange={setIsMenuOpen}
			isMenuOpen={isMenuOpen}
			isBordered
			className='md:hidden'
		>
			<NavbarContent>
				<NavbarMenuToggle
					aria-label={isMenuOpen ? "Close menu" : "Open menu"}
					className='md:hidden'
				/>
				<NavbarBrand>
					{/* <AcmeLogo /> */}
					<p className='font-bold text-inherit'>LOGO</p>

					<p className='font-bold text-inherit'>Nutrikom</p>
				</NavbarBrand>
			</NavbarContent>

			<NavbarContent as='div' justify='end'>
				<Dropdown placement='bottom-end'>
					<DropdownTrigger>
						<Avatar
							isBordered
							as='button'
							className='transition-transform'
							color='secondary'
							name='Jason Hughes'
							size='md'
							src='https://i.pravatar.cc/150?u=a042581f4e29026704d'
						/>
					</DropdownTrigger>
					<DropdownMenu aria-label='Profile Actions' variant='flat'>
						<DropdownItem
							key='user'
							isReadOnly
							className='h-14 gap-2'
						>
							<p className='font-semibold'>Hoş Geldin</p>
							<p className='font-semibold'>zoey@example.com</p>
						</DropdownItem>
						<DropdownItem key='profile'>Profilim</DropdownItem>

						<DropdownItem key='logout' color='danger'>
							Çıkış Yap
						</DropdownItem>
					</DropdownMenu>
				</Dropdown>
			</NavbarContent>
			<NavbarMenu>
				{routes.map((route, index) => (
					<NavbarMenuItem
						key={`${route}-${index}`}
						className='border-solid border-gray-400 border-2 rounded-lg hover:bg-slate-200'
					>
						<Link
							color='primary'
							key={route.href}
							href={route.href}
							onClick={() => setIsMenuOpen(false)}
							className={`text-sm flex w-full p-3 justify-start font-medium rounded-lg transition cursor-pointer hover:bg-primary hover:bg-white/10 
                            ${
								pathname === route.href
									? "bg-sky-200 text-primary"
									: ""
							}
                            `}
						>
							<div className='flex items-center flex-1'>
								<route.icon
									className={`w-6 h-6 mr-4 ${route.color} `}
								/>
								<span>{route.label}</span>
							</div>
						</Link>
					</NavbarMenuItem>
				))}
			</NavbarMenu>
		</Navbar>
	);
}

