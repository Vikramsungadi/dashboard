import { cn } from "@/lib/cn";
import { Search } from "lucide-react";

const SearchInputSkeleton = () => {
	return (
		<div
			className={cn(
				"relative  isolate mx-auto ml-auto flex items-center gap-4 rounded-md pl-2   md:w-[25%] ",
			)}>
			<Search className='size-9 md:size-8 ' />
			<input
				type='text'
				className='peer  w-full rounded-md border-none  text-sm font-normal caret-gray-400 outline-none'
				placeholder='Search Title'
			/>
			<div className='absolute -inset-0.5 -z-10 w-[calc(100%+4px)] rounded-md border-[1.5px] border-gray-200/80 shadow-sm transition-colors peer-focus:animate-pulse peer-focus:border-gray-400 ' />
			<button
				className={cn(
					"m-0.5 min-w-fit rounded-md border border-gray-100 bg-gray-100 px-4 py-1.5 text-sm font-medium text-gray-600 shadow-sm transition-colors active:border-gray-300 active:shadow-black/20",
				)}>
				Search All
			</button>
		</div>
	);
};

export default SearchInputSkeleton;
