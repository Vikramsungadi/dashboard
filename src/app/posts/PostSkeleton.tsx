import { cn } from "@/lib/cn";
import { capitalize, getRandomValueFromArray } from "@/lib/utils";
import { TPost } from "@/types";

interface Props {
	post: TPost;
}

const PostSkeleton = ({ post, ...props }: Props) => {
	let widthClasses = ["w-3/4", "w-1/2", "w-1/4", "w-3/5", "w-2/4", "w-5/6", "w-9/12"];
	return (
		<div
			key={post.id}
			className='group relative isolate flex  animate-pulse flex-col gap-4 rounded-md border border-gray-100 p-4 shadow-sm hover:border-gray-300'>
			<div className='h-[2.2ch] rounded-md bg-gray-300/80 pr-4 font-semibold text-gray-800 '>
				<span className='opacity-0'>{capitalize(post.title)}</span>
			</div>
			<div className='space-y-2'>
				<p className='h-[1.1ch] rounded-md bg-gray-200/80 text-gray-600 '></p>
				<p className='h-[1.1ch] rounded-md bg-gray-200/80 text-gray-600 '></p>
				<p className='h-[1.1ch] rounded-md bg-gray-200/80 text-gray-600 '></p>
				<p className='h-[1.1ch] rounded-md bg-gray-200/80 text-gray-600 md:hidden'></p>
				<p
					className={cn(
						"h-[1.1ch] rounded-md bg-gray-200 text-gray-600 ",
						getRandomValueFromArray(widthClasses),
					)}></p>
			</div>
		</div>
	);
};

export default PostSkeleton;
