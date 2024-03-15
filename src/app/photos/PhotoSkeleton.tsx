import { cn } from "@/lib/cn";
import { TPhoto } from "@/types";
import { getRandomValueFromArray } from "@lib/utils";

interface Props {
	photo: TPhoto;
}

const PhotoSkeleton = ({ photo, ...props }: Props) => {
	let widthClasses = ["w-3/4", "w-1/2", "w-1/4", "w-3/5", "w-2/4", "w-5/6", "w-9/12"];
	return (
		<div key={photo.id} className='group relative animate-pulse space-y-2 border-gray-200'>
			{/* <BookmarkButton saving='photo'  higlightClass='fill-gray-50' className='text-gray-50' obj={photo} /> */}
			<div
				className={cn(
					"aspect-square w-full  rounded-md bg-gray-200",

					"max-w-full max-sm:aspect-video  max-sm:object-cover   md:max-w-[256px]",
				)}></div>

			<p className='h-[1.5ch] rounded-md bg-gray-200 font-medium text-gray-800'>
				<span className='opacity-0'>{photo.title}</span>
			</p>
			<p
				className={cn(
					" h-[1.5ch] rounded-md bg-gray-200 font-medium text-gray-800",
					getRandomValueFromArray(widthClasses),
				)}>
				<span className='opacity-0'>{photo.title}</span>
			</p>
		</div>
	);
};

export default PhotoSkeleton;
