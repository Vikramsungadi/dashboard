import { TPost } from "@/types";
import Post from "./Post";
interface Props {
	posts: TPost[];
}
const Posts = ({ posts, ...props }: Props) => {
	return (
		<div className='grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] justify-between gap-10'>
			{posts.map((post) => (
				<Post key={post.id} post={post} />
			))}
		</div>
	);
};

export default Posts;
