"use client";

import useDebounce from "@/hooks/useDebounce";
import { Search } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
interface Props {
	setValue?: Dispatch<SetStateAction<string>>;
}
const SearchBar = (props: Props) => {
	let router = useRouter();
	let pathname = usePathname();
	const [searchTerm, setsearchTerm] = useState<string>("");
	const debouncedValue = useDebounce(searchTerm, 500);

	function replaceUrl() {
		if (searchTerm !== "") {
			router.replace(pathname + `?title=${searchTerm}`);
		} else {
			router.replace(pathname);
		}
	}

	useEffect(() => {
		replaceUrl();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [debouncedValue]);

	// let paths = pathname.split("/").filter((pathname) => pathname !== "");

	// let seg = useSelectedLayoutSegments();
	// let url = "/" + paths.slice(0, 2).join("/") + ("/" + (searchTerm ?? ""));

	// console.log("SearchBar", pathname);
	// console.log("SearchBarURL", url);
	// console.log("SearchBarSEG", seg);
	return (
		<div className='mx-auto  ml-auto flex w-[25%] items-center gap-4 rounded-md border border-gray-300/80 pl-2'>
			<Search className='size-5' />
			<input
				type='text'
				onChange={(e) => {
					setsearchTerm(e.target.value);
				}}
				className='w-full rounded-md border-none py-1.5 font-normal caret-gray-400 outline-none'
				placeholder='Search Title'
			/>
			<button onClick={replaceUrl} className='h-full rounded-md bg-gray-100 px-4 text-sm'>
				Search
			</button>
		</div>
	);
};

export default SearchBar;
