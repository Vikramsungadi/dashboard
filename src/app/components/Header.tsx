"use client";

import { cn } from "@/lib/cn";
import { Bookmark, Images, StickyNote } from "lucide-react";
import Link from "next/link";
import { useParams, usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import SearchBar from "./SearchBar";

const Header = () => {
	let links = [
		["Photos", "/photos", Images],
		["Posts", "/posts", StickyNote],
		["Saved", "/saved", Bookmark],
	] as const;

	let router = useRouter();
	let params = useParams();
	let pathname = usePathname();

	console.log("params", params);
	console.log(pathname);
	const [searchParam, setSearchParam] = useState<string>("");

	// useEffect(() => {
	// 	const handler = setTimeout(() => {}, 300);

	// 	return () => {
	// 		clearTimeout(handler);
	// 	};
	// 	// eslint-disable-next-line react-hooks/exhaustive-deps
	// }, [searchParam]);

	let currentPath = usePathname();

	return (
		<header className={cn("justify-evenly  border-b-gray-100 font-medium text-gray-600/70 shadow-sm")}>
			<div className='mx-auto flex max-w-screen-2xl items-center px-8 py-4'>
				<div className='flex gap-2 text-xl font-semibold tracking-wider text-gray-900'>DASHBOARD</div>

				<SearchBar setValue={setSearchParam} />

				<nav className='ml-auto'>
					<ul className='flex max-w-screen-xl gap-8'>
						{links.map(([name, path, Icon]) => (
							<li key={path} className=''>
								<Link
									href={path}
									className={cn(
										"flex items-center gap-2 transition-colors  hover:text-neutral-950",
										currentPath === path && "text-blue-600 hover:text-blue-700",
									)}>
									<Icon className='size-4' />
									<span>{name}</span>
								</Link>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
