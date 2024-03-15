"use client";

import Link from "next/link";

interface Props {}

const Error = (props: Props) => {
	return (
		<div className='grid h-[50vh] w-full place-items-center'>
			<div className='flex flex-col items-center justify-center gap-5'>
				<span className='text-5xl font-medium'>Error Occurred</span>

				<Link
					href={"/"}
					className='w-fit rounded-md border-gray-300 bg-gray-100 px-4 py-2 font-medium shadow-sm active:scale-[0.98]'>
					Go Home
				</Link>
			</div>
		</div>
	);
};

export default Error;
