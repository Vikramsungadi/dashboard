import { capitalize } from "@/lib/utils";
import { TPost } from "@/types";
import BookmarkButton from "../components/BookmarkButton";

interface Props {
	post: TPost;
}

const Post = ({ post, ...props }: Props) => {
	return (
		<div
			key={post.id}
			className='group relative isolate flex flex-col gap-4 rounded-md border border-gray-100 p-4 shadow-sm hover:border-gray-300'>
			<BookmarkButton
				saving='post'
				obj={post}
				higlightClass='fill-gray-400'
				className='rounded-full bg-white text-gray-400/80 shadow-sm'
			/>
			<div className='line-clamp-2 pr-4 font-semibold text-gray-800'>{capitalize(post.title)}</div>
			<p className='text-gray-600'>{post.body}</p>
		</div>
	);
};

export default Post;
