import { TPost } from "@/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface PostsState {
	posts: Array<TPost>;
	ids: Array<number>;
}

const initialState: PostsState = {
	posts: [],
	ids: [],
};

const name = "savedPosts";

export const savedPostsSlice = createSlice({
	name,
	initialState,
	reducers: {
		saveOrUnsavePost: (state, action: PayloadAction<TPost>) => {
			let clickedId = action.payload.id;

			let alreadySaved = state.ids.includes(clickedId);

			if (alreadySaved) {
				state.posts = state.posts.filter(({ id }) => id !== clickedId);
				state.ids = state.ids.filter((id) => id !== clickedId);
				localStorage.setItem(name, JSON.stringify(state));
			} else {
				state.posts = [...state.posts, action.payload];
				state.ids = [...state.ids, clickedId];
				localStorage.setItem(name, JSON.stringify(state));
			}
		},
		fetchSavedPosts: (state) => {
			let locallySavedPosts = localStorage.getItem(name);
			if (locallySavedPosts) {
				let parsedData: PostsState = JSON.parse(locallySavedPosts);
				state.posts = parsedData.posts;
				state.ids = parsedData.ids;
			} else {
				state = initialState;
			}
		},
	},
});

export const { saveOrUnsavePost, fetchSavedPosts } = savedPostsSlice.actions;

export default savedPostsSlice.reducer;
