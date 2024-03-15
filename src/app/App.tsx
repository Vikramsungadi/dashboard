"use client";

import { useAppDispatch, useAppSelector } from "@/hooks/redux-hooks";
import { fetchSavedPhotos } from "@/redux/slices/PhotosSlice";
import { fetchSavedPosts } from "@/redux/slices/PostsSlice";
import { useLayoutEffect } from "react";

const App = (props: { children?: React.ReactNode }) => {
	let dispatch = useAppDispatch();
	let { savedPhotos, savedPosts } = useAppSelector((state) => state);
	useLayoutEffect(() => {
		dispatch(fetchSavedPosts());
		dispatch(fetchSavedPhotos());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return <>{props.children}</>;
};

export default App;
