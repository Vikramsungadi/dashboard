"use client";

import { dummyPhotos, dummyPosts } from "@/data/dummy";
import { useParams, usePathname } from "next/navigation";
import Photos from "./photos/Photos";
import Posts from "./posts/Posts";

interface Props {}
const Loading = () => {
	let params: { slug: string[] } = useParams();
	let pathname = usePathname();
	let path = params?.slug?.[0];

	let photosSection = path?.includes("photos");
	let postSection = path?.includes("posts");

	if (postSection) {
		return <Posts posts={dummyPosts} skeleton />;
	}
	if (photosSection) {
		return <Photos photos={dummyPhotos} skeleton />;
	}
	return undefined;
};

export default Loading;
