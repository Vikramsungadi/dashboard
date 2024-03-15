import { cn } from "@/lib/cn";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { links } from "./Header";

interface Props {}

const DesktopNav = (props: Props) => {
	let currentPath = usePathname();
	return (
		<nav className='ml-auto '>
			<ul className='flex max-w-screen-xl gap-6 md:gap-8'>
				{links.map(([name, path, Icon]) => (
					<li key={path} className=''>
						<Link
							href={path}
							className={cn(
								"flex items-center gap-2 transition-colors  hover:text-neutral-950",
								currentPath.includes(name.toLocaleLowerCase()) && "text-blue-600 hover:text-blue-700",
							)}>
							<Icon className='size-[18px] md:size-4' />
							<span className='max-md:hidden'>{name}</span>
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default DesktopNav;
