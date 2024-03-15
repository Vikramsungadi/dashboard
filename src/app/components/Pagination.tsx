"use client";

import { cn } from "@/lib/cn";
import { FastForward, Rewind } from "lucide-react";
import Link from "next/link";
import { useLayoutEffect, useState } from "react";

interface Props {
	itemsPerPage: number;
	totalItems: number;
	currentPage: number;
	pathname: string;
	className?: string;
}

const Pagination = ({ itemsPerPage, totalItems, currentPage = 1, pathname, ...props }: Props) => {
	let totalPages = Math.floor(totalItems / itemsPerPage - 1);
	let isLastPage = totalPages === currentPage;
	let isFirstPage = currentPage === 1;
	let disabledClasses =
		"cursor-not-allowed bg-gray-100 opacity-70 *:cursor-not-allowed pointer-events-none *:pointer-events-none";

	const [range, setRange] = useState<number>(3);

	useLayoutEffect(() => {
		function setPageRange() {
			setRange(() => (window.innerWidth > 640 ? 3 : window.innerWidth < 340 ? 1 : 2));
		}
		setPageRange();
		window.addEventListener("resize", setPageRange);
		return () => {
			window.removeEventListener("resize", setPageRange);
		};
	}, []);

	let Dots = () => (
		<div className='mb-2 h-fit shrink-0 space-x-2 self-end'>
			<span className='inline-block  size-1 rounded-full bg-gray-700 max-sm:size-[2.5px]' />
			<span className='inline-block  size-1 rounded-full bg-gray-700 max-sm:size-[2.5px]' />
			<span className='inline-block  size-1 rounded-full bg-gray-700 max-sm:hidden max-sm:size-[2.5px]' />
		</div>
	);

	let PaginationItem = (props: { href: string; className?: string; children?: React.ReactNode }) => (
		<li
			className={cn(
				"shrink-0 select-none rounded-md border border-gray-100 p-0.5 text-gray-700  shadow-sm *:select-none active:scale-[0.98]",
				props.className,
			)}>
			<Link href={props.href} className='flex size-full items-center justify-center'>
				{props.children}
			</Link>
		</li>
	);

	return (
		<nav className={cn("mx-auto mt-10", props.className)}>
			<ul className='flex items-center gap-1.5 max-sm:text-xs md:gap-2.5'>
				<PaginationItem
					href={`	/${pathname}/${1}`}
					className={cn("ml-4 px-4 max-sm:hidden", isFirstPage && disabledClasses)}>
					<Rewind />
				</PaginationItem>
				<PaginationItem
					href={isFirstPage ? `	/${pathname}/${currentPage}` : `	/${pathname}/${currentPage - 1}`}
					className={cn("mr-4 px-4 max-sm:h-fit max-sm:px-2 max-sm:py-1.5", isFirstPage && disabledClasses)}>
					Prev
				</PaginationItem>

				{Array.from({ length: totalPages }, (_, index) => index + 1).map((number) => {
					if (number >= currentPage - range && number <= currentPage + range) {
						return (
							<PaginationItem
								href={`	/${pathname}/${number}`}
								className={cn(
									"size-10  max-sm:size-6",
									currentPage === number && "border-gray-400/40 bg-gray-400/30 text-gray-900",
								)}
								key={number}>
								{number}
							</PaginationItem>
						);
					}
				})}
				{currentPage + range < totalPages && <Dots />}
				{currentPage + range < totalPages && (
					<PaginationItem href={`/${pathname}/${totalPages}`} className={cn("size-10 max-sm:size-6")}>
						{totalPages}
					</PaginationItem>
				)}

				<PaginationItem
					href={isLastPage ? `/${pathname}/${currentPage}` : `/${pathname}/${currentPage + 1}`}
					className={cn("ml-4 px-4 max-sm:h-fit max-sm:px-2 max-sm:py-1.5", isLastPage && disabledClasses)}>
					Next
				</PaginationItem>
				<PaginationItem
					href={`/${pathname}/${totalPages}`}
					className={cn("px-4 max-sm:hidden", isLastPage && disabledClasses)}>
					<FastForward />
				</PaginationItem>
			</ul>
		</nav>
	);
};

export default Pagination;
