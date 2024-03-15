import { cn } from "@/lib/cn";
import StoreProvider from "@/redux/StoreProvider";
import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import App from "./App";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const barlow_condensed = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata: Metadata = {
	title: "Dashboard",
	description: "View Photos/Posts fetched from https://jsonplaceholder.typicode.com/ ",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={cn(inter.className)}>
				<StoreProvider>
					<App>
						<Header />
						<main className='mx-auto flex max-w-screen-2xl flex-col justify-between px-4 py-4 md:px-8 md:py-12'>
							<SearchBar className='mx-auto mb-6 mt-2 w-full  md:hidden' />
							{children}
						</main>
					</App>
				</StoreProvider>
			</body>
		</html>
	);
}
