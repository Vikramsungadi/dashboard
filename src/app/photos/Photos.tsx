import { TPhoto } from "@/types";
import Photo from "./Photo";

interface Props {
	photos: TPhoto[];
}

const Photos = ({ photos, ...props }: Props) => {
	return (
		<div className='grid min-h-screen grid-cols-[repeat(auto-fit,minmax(200px,256px))]  gap-10'>
			{photos.length === 0 && (
				<div
					className='flex h-[50vh] w-screen items-center justify-center text-center
				 text-3xl font-semibold'>
					Not Found
				</div>
			)}
			{photos.map((photo) => (
				<Photo key={photo.id} photo={photo} />
			))}
		</div>
	);
};

export default Photos;
