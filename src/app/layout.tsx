import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import { fontSans } from "@/utils/font";

export const metadata: Metadata = {
	title: "GildemarDev",
	description: "Portfolio 2024 email: gil@gildemar.dev",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='pt-br'>
			<body
				className={cn(
					"min-h-screen bg-background font-sans antialiased",
					fontSans.variable
				)}>
				{/* <Navbar /> TODO: Terminar a sidebar */}
				{children}
			</body>
		</html>
	);
}
