import { fetchPosts } from "@/services";
import Posts from "./Posts";
interface Props {}

const Page = async (props: Props) => {
	let totalPosts = (await fetchPosts({})).length;
	let posts = await fetchPosts({ _limit: 20 });

	let currentPage = 1;

	return (
		<>
			<Posts posts={posts} />
		</>
	);
};

export default Page;
