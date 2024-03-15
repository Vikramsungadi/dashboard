"use client";

import { cn } from "@/lib/cn";
import { Bookmark, Images, StickyNote } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Suspense } from "react";
import DesktopNav from "./DesktopNav";
import SearchBar from "./SearchBar";
import SearchInputSkeleton from "./SearchInputSkeleton";

export const links = [
	["Photos", "/photos/1", Images],
	["Posts", "/posts/1", StickyNote],
	["Saved", "/saved", Bookmark],
] as const;
const Header = () => {
	let currentPath = usePathname();
	let home = currentPath === "/";

	return (
		<header className={cn("justify-evenly  border-b-gray-100 font-medium text-gray-600/70 shadow-sm")}>
			<div className='mx-auto flex max-w-screen-2xl items-center px-4 py-2.5 md:px-8 md:py-4'>
				<Link
					href={"/"}
					className={cn(
						"flex gap-2 text-base font-bold tracking-tight  md:text-xl",
						home ? "text-gray-950" : "text-gray-700",
					)}>
					DASHBOARD
				</Link>

				<Suspense fallback={<SearchInputSkeleton />}>
					<SearchBar className={cn("max-sm:hidden", home && "invisible")} />
				</Suspense>

				<DesktopNav />
			</div>
		</header>
	);
};

export default Header;
