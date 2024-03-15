import { TPhoto } from "@/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface PhotosState {
	photos: Array<TPhoto>;
	ids: Array<number>;
}

const initialState: PhotosState = {
	photos: [],
	ids: [],
};
let name = "savedPhotos";

export const savedPhotosSlice = createSlice({
	name: name,
	initialState,
	reducers: {
		saveOrUnsavePhoto: (state, action: PayloadAction<TPhoto>) => {
			let clickedId = action.payload.id;

			let alreadySaved = state.ids.includes(clickedId);

			if (alreadySaved) {
				state.photos = state.photos.filter(({ id }) => id !== clickedId);
				state.ids = state.ids.filter((id) => id !== clickedId);
				localStorage.setItem(name, JSON.stringify(state));
			} else {
				state.photos = [...state.photos, action.payload];
				state.ids = [...state.ids, clickedId];
				localStorage.setItem(name, JSON.stringify(state));
			}
		},

		fetchSavedPhotos: (state) => {
			let locallySavedPhotos = localStorage.getItem(name);

			if (locallySavedPhotos) {
				let parsedData: PhotosState = JSON.parse(locallySavedPhotos);
				state.photos = parsedData.photos;
				state.ids = parsedData.ids;
			} else {
				state = initialState;
			}
		},
	},
});

export const { fetchSavedPhotos, saveOrUnsavePhoto } = savedPhotosSlice.actions;

export default savedPhotosSlice.reducer;
