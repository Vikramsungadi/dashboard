import { fetchPhotos, fetchPosts } from "@/services";
import Pagination from "../components/Pagination";
import Error from "../error";
import Photos from "../photos/Photos";
import Posts from "../posts/Posts";

interface Props {
	params: { slug: string[] };
	searchParams: { search?: string; searchall?: string };
}

const Page = async ({ params, searchParams }: Props) => {
	let [path, page, searchParam] = params.slug;

	let currentPage = parseInt(page);
	let searchTerm = searchParams.search;
	let searchAllTerm = searchParams.searchall;

	page = page ?? 1;

	const LIMIT = 20;

	if (path === "photos") {
		let photos = await fetchPhotos({ _start: currentPage * 20, _limit: LIMIT });
		let allPhotos = await fetchPhotos({});

		let totalPhotos = allPhotos.length;

		let PhotosComponent = (() => {
			if (searchTerm) {
				let filteredPhotos = photos.filter((photo) => photo.title.toLowerCase().includes(searchTerm));
				return <Photos photos={filteredPhotos} />;
			}
			if (searchAllTerm) {
				let filteredPhotos = allPhotos.filter((photo) => photo.title.toLowerCase().includes(searchAllTerm));
				return <Photos photos={filteredPhotos} />;
			}
			return <Photos photos={photos} />;
		})();

		return (
			<>
				{PhotosComponent}
				{!searchAllTerm && (
					<Pagination
						pathname='photos'
						currentPage={currentPage ?? 1}
						itemsPerPage={20}
						totalItems={totalPhotos}
					/>
				)}
			</>
		);
	}
	if (path === "posts") {
		let posts = await fetchPosts({ _limit: LIMIT, _start: currentPage * 20 });
		let allPosts = await fetchPosts({});
		let totalPosts = allPosts.length;

		let PostsComponent = (() => {
			if (searchTerm) {
				let filteredPosts = posts.filter((post) => post.title.toLowerCase().includes(searchTerm));
				return <Posts posts={filteredPosts} />;
			}
			if (searchAllTerm) {
				let filteredPosts = allPosts.filter((post) => post.title.toLowerCase().includes(searchAllTerm));
				return <Posts posts={filteredPosts} />;
			}
			return <Posts posts={posts} />;
		})();

		return (
			<>
				{PostsComponent}
				{!searchAllTerm && (
					<Pagination
						pathname='posts'
						currentPage={currentPage ?? 1}
						itemsPerPage={20}
						totalItems={totalPosts}
					/>
				)}
			</>
		);
	}

	return <Error />;
};

export default Page;
