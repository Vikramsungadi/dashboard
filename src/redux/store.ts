import { configureStore } from "@reduxjs/toolkit";
import savedPhotosSlice from "./slices/PhotosSlice";
import savedPostsSlice from "./slices/PostsSlice";

export const makeStore = () => {
	return configureStore({
		reducer: {
			savedPhotos: savedPhotosSlice,
			savedPosts: savedPostsSlice,
		},
	});
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
