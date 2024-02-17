import NavbarComponent from "@/lib/components/Navbar";
import Sidebar from "@/lib/components/Sidebar";

export default function ProtectedLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className='h-full relative'>
			<div className='hidden h-full md:flex md:flex-col md:fixed md:w-52 lg:w-72 md:inset-y-0 z-[80] bg-gray-900'>
				<Sidebar />
			</div>
			<main className='md:pl-52 lg:pl-72'>
				<NavbarComponent />
				{children}
			</main>
		</div>
	);
}

