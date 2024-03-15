import Link from "next/link";

const ErrorPage = (props: { message?: string; redirectLink?: string; buttontext?: string }) => {
	return (
		<div className='grid h-[50vh] w-full place-items-center '>
			<div className='flex flex-col items-center justify-center  gap-8'>
				<span className='text-4xl font-semibold  md:text-6xl'>{props.message ?? "Not found"}</span>
				<Link
					href={props.redirectLink ?? "/"}
					className='w-fit rounded-md border-gray-300 bg-gray-100 px-4 py-2 font-medium shadow-sm active:scale-[0.98]'>
					{props.buttontext ?? "Go Home"}
				</Link>
			</div>
		</div>
	);
};

export default ErrorPage;
