import { cn } from "@/lib/cn";
import { TPost } from "@/types";
import ErrorPage from "../components/ErrorPage";
import Post from "./Post";
import PostSkeleton from "./PostSkeleton";
interface Props {
	posts: TPost[];
	skeleton?: boolean;
}
const Posts = ({ posts, ...props }: Props) => {
	return (
		<>
			{posts.length === 0 && (
				<ErrorPage buttontext='Explore posts' redirectLink='/posts/1' message='No saved posts' />
			)}
			<div
				className={cn(
					"[--min-width:250px] md:[--min-width:350px]",
					"grid grid-cols-[repeat(auto-fit,minmax(var(--min-width),auto))] items-start justify-between gap-10",
				)}>
				{posts.map((post) => {
					return props.skeleton ? (
						<PostSkeleton key={post.id} post={post} />
					) : (
						<Post key={post.id} post={post} />
					);
				})}
			</div>
		</>
	);
};

export default Posts;
