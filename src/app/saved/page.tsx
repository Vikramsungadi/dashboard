"use client";

import { useAppSelector } from "@/hooks/redux-hooks";
import { cn } from "@/lib/cn";
import { Images, StickyNote } from "lucide-react";
import { useState } from "react";
import Photos from "../photos/Photos";
import Posts from "../posts/Posts";

const Page = ({ searchParams }: { searchParams: { title: string } }) => {
	let TABS = [
		["Photos", Images],
		["Posts", StickyNote],
	] as const;
	const [activeTab, setActiveTab] = useState<(typeof TABS)[number][0]>(TABS[0][0]);
	// console.log(activeTab);

	const savedPosts = useAppSelector((state) => state.savedPosts.posts);
	const savedPhotos = useAppSelector((state) => state.savedPhotos.photos);

	let filteredPhotos = savedPhotos.filter((photo) => photo.title.includes(searchParams.title));
	let filteredPosts = savedPosts.filter((post) => post.title.includes(searchParams.title));

	return (
		<div>
			{/* NAVBAR */}
			<nav>
				<ul className=' grid grid-cols-2 justify-items-center font-medium  *:p-2 *:text-center'>
					{TABS.map(([tab, Icon], index) => {
						let isActiveTab = activeTab === tab;
						return (
							<li
								key={tab}
								className={cn(
									"w-full  border border-gray-200 transition-colors duration-100 hover:bg-gray-50",
									{
										"rounded-tl-md": index === 0,
										"rounded-tr-md": index === TABS.length - 1,
										"border-blue-400 bg-blue-500/20 hover:bg-blue-500/30": isActiveTab,
									},
								)}>
								<button
									onClick={() => setActiveTab(tab)}
									className={cn(
										"w-full select-none  transition-colors active:scale-[0.98]",
										isActiveTab ? "text-blue-950" : "text-gray-600",
									)}>
									<div className='mx-auto flex w-fit items-center  gap-2'>
										<Icon className='size-5' />
										<span>{tab}</span>
									</div>
								</button>
							</li>
						);
					})}
				</ul>
			</nav>
			<div className='pt-10'>
				{activeTab === "Photos" && <Photos photos={searchParams.title ? filteredPhotos : savedPhotos} />}
				{activeTab === "Posts" && <Posts posts={searchParams.title ? filteredPosts : savedPosts} />}
			</div>
		</div>
	);
};

export default Page;
