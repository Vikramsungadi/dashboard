import { cn } from "@/lib/cn";
import { TPhoto } from "@/types";
import NotFound from "../not-found";
import Photo from "./Photo";
import PhotoSkeleton from "./PhotoSkeleton";

interface Props {
	photos: TPhoto[];
	skeleton?: boolean;
}

const Photos = ({ photos, ...props }: Props) => {
	return (
		<>
			{photos.length === 0 && (
				<NotFound buttontext='Explore photos' redirectLink='/photos/1' message='No saved photos' />
			)}
			<div
				className={cn(
					"grid  grid-cols-1 justify-center gap-5  md:grid-cols-[repeat(auto-fit,minmax(200px,256px))]  md:gap-10",
				)}>
				{photos.map((photo) => {
					return props.skeleton ? (
						<PhotoSkeleton key={photo.id} photo={photo} />
					) : (
						<Photo key={photo.id} photo={photo} />
					);
				})}
			</div>
		</>
	);
};

export default Photos;
