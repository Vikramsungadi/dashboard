import { capitalize } from "@/lib/utils";
import { TPhoto } from "@/types";
import Image from "next/image";
import BookmarkButton from "../components/BookmarkButton";

interface Props {
	photo: TPhoto;
}

const Photo = ({ photo, ...props }: Props) => {
	return (
		<div key={photo.id} className='group relative  space-y-2'>
			<BookmarkButton saving='photo' higlightClass='fill-gray-50' className='text-gray-50' obj={photo} />
			<Image
				src={photo.url}
				alt={photo.url}
				width={200}
				height={200}
				className='w-full max-w-full rounded-md max-sm:aspect-video max-sm:object-cover md:max-w-[256px]'
			/>
			<p className='line-clamp-2 font-medium text-gray-800'>{capitalize(photo.title)}</p>
		</div>
	);
};

export default Photo;
