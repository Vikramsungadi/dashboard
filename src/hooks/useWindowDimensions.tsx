import { useLayoutEffect, useState } from "react";

const useWindowDimensions = () => {
	const [width, setWidth] = useState<number>(0);
	const [height, setHeight] = useState<number>(0);

	function setSizesOnResize() {
		setHeight(window.innerHeight);
		setWidth(window.innerWidth);
	}

	useLayoutEffect(() => {
		window.addEventListener("resize", setSizesOnResize);

		setSizesOnResize();
		return () => window.removeEventListener("resize", setSizesOnResize);
	}, []);

	return { width, height };
};

export default useWindowDimensions;
