import { TPost } from "@/types";
import axios, { AxiosResponse } from "axios";
import Posts from "../Posts";

const Page = async ({
	params,
	searchParams,
}: {
	params: { page: string };
	searchParams: { title: string };
}) => {
	let posts = await axios
		.get(`https://jsonplaceholder.typicode.com/posts?_start=${parseInt(params.page) * 20}&_limit=20`)
		.then((res: AxiosResponse<TPost[], any>) => res.data);
	let filteredPosts = posts.filter((post) => post.title.includes(searchParams.title));

	return <Posts posts={searchParams.title ? filteredPosts : posts} />;
};

export default Page;
