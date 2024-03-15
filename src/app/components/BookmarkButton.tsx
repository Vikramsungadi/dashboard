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

	// console.log(savedPosts);

	let isSaved =
		props.saving === "photo" ? savedPhotos.ids.includes(props.obj.id) : savedPosts.ids.includes(props.obj.id);

	// console.log(!!isSaved);
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
				"absolute right-2 top-2 z-50  p-1  opacity-0  transition-opacity group-hover:opacity-100 ",
				props.className,
				isSaved && "opacity-75",
			)}>
			<Bookmark className={cn(isSaved && props.higlightClass)} />
		</button>
	);
};

export default BookmarkButton;
