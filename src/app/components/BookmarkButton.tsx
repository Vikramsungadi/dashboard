"use client";

import { useAppDispatch, useAppSelector } from "@/hooks/redux-hooks";
import { cn } from "@/lib/cn";
import { saveOrUnsavePhoto } from "@/redux/slices/PhotosSlice";
import { saveOrUnsavePost } from "@/redux/slices/PostsSlice";
import { TPhoto, TPost } from "@/types";
import { Bookmark } from "lucide-react";

type Props = {
	className?: string;
	higlightClass?: string;
} & (
	| {
			saving: "post";
			obj: TPost;
	  }
	| {
			saving: "photo";
			obj: TPhoto;
	  }
);

const BookmarkButton = (props: Props) => {
	const dispatch = useAppDispatch();
	const savedPosts = useAppSelector((state) => state.savedPosts);
	const savedPhotos = useAppSelector((state) => state.savedPhotos);

	let isSaved =
		props.saving === "photo" ? savedPhotos.ids.includes(props.obj.id) : savedPosts.ids.includes(props.obj.id);

	function handleSave() {
		if (props.saving === "photo") {
			dispatch(saveOrUnsavePhoto(props.obj));
		}
		if (props.saving === "post") {
			dispatch(saveOrUnsavePost(props.obj));
		}
	}

	return (
		<button
			onClick={() => {
				handleSave();
			}}
			className={cn(
				"absolute right-2 top-2 z-50  p-1  transition-opacity  group-hover:opacity-100 xl:opacity-0 ",
				props.className,
				isSaved && "opacity-75",
			)}>
			<Bookmark className={cn(isSaved && props.higlightClass)} />
		</button>
	);
};

export default BookmarkButton;
