"use client";

import { cn } from "@/lib/cn";
import { TPhoto } from "@/types";
import axios, { AxiosResponse } from "axios";
import { FastForward, Rewind } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useLayoutEffect, useState } from "react";

interface Props {
	children?: React.ReactNode;
}

const Layout = (props: Props) => {
	const [totalPosts, setTotalPosts] = useState<number>(0);
	let params = useParams();
	let currentPage = typeof params.page == "string" ? parseInt(params.page) : 1;
	let totalPages = Math.floor(totalPosts / 20 - 1);
	let isLastPage = totalPages === currentPage;
	let isFirstPage = currentPage === 1;

	let disabledClasses =
		"cursor-not-allowed bg-gray-100 opacity-70 *:cursor-not-allowed pointer-events-none *:pointer-events-none";

	useLayoutEffect(() => {
		axios
			.get("https://jsonplaceholder.typicode.com/posts")
			.then((res: AxiosResponse<TPhoto[], any[]>) => setTotalPosts(res.data.length));
	}, []);

	let Dots = () => (
		<div className='mb-2 h-fit space-x-2 self-end'>
			<span className='inline-block  size-1 rounded-full bg-gray-700' />
			<span className='inline-block  size-1 rounded-full bg-gray-700' />
			<span className='inline-block  size-1 rounded-full bg-gray-700' />
		</div>
	);

	let PaginationItem = (props: { href: string; className?: string; children?: React.ReactNode }) => (
		<li
			className={cn(
				"shrink-0 select-none  rounded-md border border-gray-100 text-gray-700  shadow-sm *:select-none active:scale-[0.98]",
				props.className,
			)}>
			<Link href={props.href} className='flex size-full items-center justify-center'>
				{props.children}
			</Link>
		</li>
	);

	return (
		<>
			{props.children}
			<nav className='mx-auto mt-10'>
				<ul className='flex gap-2.5 '>
					<PaginationItem href={`/posts/${1}`} className={cn("ml-4 px-4", isFirstPage && disabledClasses)}>
						<Rewind />
					</PaginationItem>
					<PaginationItem
						href={isFirstPage ? `/posts/${currentPage}` : `/posts/${currentPage - 1}`}
						className={cn("mx-4 px-4", isFirstPage && disabledClasses)}>
						Prev
					</PaginationItem>

					{Array.from({ length: totalPages }, (_, index) => index + 1).map((number) => {
						if (number >= currentPage - 3 && number <= currentPage + 3) {
							return (
								<PaginationItem
									href={`/posts/${number}`}
									className={cn(
										"size-10",
										currentPage === number && "border-gray-400/40 bg-gray-400/30 text-gray-900",
									)}
									key={number}>
									{number}
								</PaginationItem>
							);
						}
					})}
					{currentPage + 3 < totalPages && <Dots />}
					{currentPage + 3 < totalPages && (
						<PaginationItem href={`/posts/${totalPages}`} className={cn("size-10")}>
							{totalPages}
						</PaginationItem>
					)}

					<PaginationItem
						href={isLastPage ? `/posts/${currentPage}` : `/posts/${currentPage + 1}`}
						className={cn("mr-4 px-4", isLastPage && disabledClasses)}>
						Next
					</PaginationItem>
					<PaginationItem
						href={`/posts/${totalPages}`}
						className={cn(" px-4", isLastPage && disabledClasses)}>
						<FastForward />
					</PaginationItem>
				</ul>
			</nav>
		</>
	);
};

export default Layout;
