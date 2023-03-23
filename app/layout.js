import "./globals.css";
import { Inter } from "@next/font/google";
import { cx } from "class-variance-authority";

const inter = Inter({
	weight: ["100", "300", "400", "500", "700", "900"],
	style: ["normal"],
	subsets: ["latin"],
});

const RootLayout = ({ children }) => {
	return (
		<html lang="en">
			<body className={cx(inter.className, "flex flex-col items-center place-content-start")}>{children}</body>
		</html>
	);
};

export default RootLayout;
