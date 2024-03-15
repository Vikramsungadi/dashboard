import { cn } from "@/lib/cn";

const Loading = () => {
	return (
		<nav>
			<ul className='grid grid-cols-2 justify-items-center font-medium  *:text-center max-sm:*:p-[5px] md:*:p-2'>
				<li
					className={cn(
						"w-full  rounded-tl-md border border-gray-200 transition-colors duration-100 hover:bg-gray-50",
					)}>
					<button className={cn("w-full select-none  transition-colors active:scale-[0.98]")}>
						<div className='mx-auto flex w-fit items-center  gap-2'>
							{/* <Icon className='size-4 md:size-5' /> */}
							<div className='size-4 rounded-sm bg-gray-200' />
							<span className='h-[1.5ch] w-[8.5ch] rounded-sm bg-gray-200 max-sm:text-sm'></span>
						</div>
					</button>
				</li>
				<li
					className={cn(
						"w-full  rounded-tr-md border border-gray-200 transition-colors duration-100 hover:bg-gray-50",
					)}>
					<button className={cn("w-full select-none  transition-colors active:scale-[0.98]")}>
						<div className='mx-auto flex w-fit items-center  gap-2'>
							{/* <Icon className='size-4 md:size-5' /> */}
							<div className='size-4 rounded-sm bg-gray-200' />
							<span className='inline-block h-[1.5ch] w-[7.5ch] rounded-sm bg-gray-200 max-sm:text-sm'></span>
						</div>
					</button>
				</li>
			</ul>
		</nav>
	);
};

export default Loading;
