import { fetchPhotos } from "@/services";
import Photos from "./Photos";
interface Props {}

const Page = async (props: Props) => {
	let photos = await fetchPhotos({ _limit: 20 });

	return <Photos photos={photos} />;
};

export default Page;
