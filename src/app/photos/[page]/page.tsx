import { fetchPhotos } from "@/services";
import Photos from "../Photos";

const Page = async ({
	params,
	searchParams,
}: {
	params: { page: string };
	searchParams: { title: string };
}) => {
	console.log("Photos", searchParams);
	let photos = await fetchPhotos({ _start: parseInt(params.page) * 20, _limit: 20 });
	let filteredPhotos = photos.filter((photo) => photo.title.includes(searchParams.title));
	return (
		<>
			<Photos photos={searchParams.title ? filteredPhotos : photos} />;
		</>
	);
};

export default Page;
