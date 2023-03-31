import "./globals.css";
import { Inter, Space_Mono } from "@next/font/google";
import { cx } from "class-variance-authority";
import Scrolltop from "./Scrolltop";

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

// export const metadata = {
//   title: "Tanthetaa",
//   description:
//     "Tan θ Software Studio is a Custom Blockchain Development Company. We are a team of 30+ young engineers to build MVPs for startups and Enterprise Solutions.",
// };

export const metadata = {
  title: "Tan θ | Blockchain & Web3 Development Company",
  description:
    "Tan θ Software Studio is a Custom Blockchain Development Company. We are a team of 30+ young engineers to build MVPs for startups and Enterprise Solutions.",
  icons: {
    icon: "https://res.cloudinary.com/dbj0yilxo/image/upload/v1674025683/favicon_2_bujrg7.png",
    shortcut:
      "https://res.cloudinary.com/dbj0yilxo/image/upload/v1674025683/favicon_2_bujrg7.png",
    apple:
      "https://res.cloudinary.com/dbj0yilxo/image/upload/v1674025683/favicon_2_bujrg7.png",
    other: {
      rel: "tanthetaa-touch-icon-precomposed",
      url: "https://res.cloudinary.com/dbj0yilxo/image/upload/v1674025683/favicon_2_bujrg7.png",
    },
  },
  openGraph: {
    title: "Tan θ | Blockchain & Web3 Development Company",
    description:
      "Tan θ Software Studio is a Custom Blockchain Development Company. We are a team of 30+ young engineers to build MVPs for startups and Enterprise Solutions.",
    url: "https://tanthetaa.com",
    siteName: "tanthetaa.com",
    images: [
      {
        url: "https://res.cloudinary.com/dbj0yilxo/image/upload/v1674025683/favicon_2_bujrg7.png",
        width: 800,
        height: 600,
      },
      {
        url: "https://res.cloudinary.com/dbj0yilxo/image/upload/v1674025683/favicon_2_bujrg7.png",
        width: 1800,
        height: 1600,
        alt: "Tan θ | Blockchain & Web3 Development Company",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cx(inter.variable, spacemono.variable, "font-inter ")}>
        <Scrolltop>{children}</Scrolltop>
        {/* {children} */}
      </body>
    </html>
  );
};

export default RootLayout;
