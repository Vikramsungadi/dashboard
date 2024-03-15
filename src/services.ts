import axios, { AxiosResponse } from "axios";
import { TPhoto, TPost } from "./types";

type queryParams = {
	_start?: number;
	_limit?: number;
};
export async function fetchPhotos(params: queryParams) {
	let url = "https://jsonplaceholder.typicode.com/photos";

	let queryString;
	if (Object.keys(params).length !== 0) {
		queryString =
			"?" +
			Object.entries(params)
				.map(([param, value]) => `${param}=${value}`)
				.join("&");
	}

	let finalUrl = url + (queryString ?? "");

	console.log("finalUrl", finalUrl);
	let photos = await axios.get(finalUrl).then((res: AxiosResponse<TPhoto[], any>) => res.data);

	return photos;
}
export async function fetchPosts(params: queryParams) {
	let url = "https://jsonplaceholder.typicode.com/posts";

	let queryString;
	if (Object.keys(params).length !== 0) {
		queryString =
			"?" +
			Object.entries(params)
				.map(([param, value]) => `${param}=${value}`)
				.join("&");
	}
	let finalUrl = url + (queryString ?? "");
	console.log("finalUrl", finalUrl);

	let posts = await axios.get(finalUrl).then((res: AxiosResponse<TPost[], any>) => res.data);

	return posts;
}
