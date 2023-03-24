import "./globals.css";
import { Inter, Space_Mono } from "@next/font/google";
import { cx } from "class-variance-authority";

const inter = Inter({
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const spacemono = Space_Mono({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-spacemono",
});

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={cx(inter.variable, spacemono.variable, "font-inter ")}>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
