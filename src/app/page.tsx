import { fetchPhotos, fetchPosts } from "@/services";
import Link from "next/link";
import Photos from "./photos/Photos";
import Posts from "./posts/Posts";

export default async function Home() {
	let photos = await fetchPhotos({ _limit: 5 });
	let posts = await fetchPosts({ _limit: 5 });
	return (
		<div className='flex flex-col gap-20'>
			<div className='flex flex-col gap-10'>
				<h2 className='bg-gray-100 px-3.5 py-1.5  text-lg font-bold text-gray-600'>PHOTOS</h2>
				<Photos photos={photos} />
				<Link
					href={"/photos/1"}
					className='mx-auto w-fit rounded-md border-gray-300 bg-gray-100 px-4 py-2 font-medium shadow-sm active:scale-[0.98]'>
					More Photos
				</Link>
			</div>
			<div className='flex flex-col gap-10'>
				<h2 className='bg-gray-100 px-3.5 py-1.5 text-lg font-bold text-gray-600 '>POSTS</h2>
				<Posts posts={posts} />
				<Link
					href={"/posts/1"}
					className='mx-auto w-fit rounded-md border-gray-300 bg-gray-100 px-4 py-2 font-medium shadow-sm active:scale-[0.98]'>
					More Posts
				</Link>
			</div>
		</div>
	);
}
