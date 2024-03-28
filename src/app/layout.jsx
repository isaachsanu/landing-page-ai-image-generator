import { Inter } from "next/font/google";
import localFont from 'next/font/local'
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const lato = localFont({
  display: 'swap',
  variable: '--font-lato',
  src: [
    {
      path: "./fonts/Lato-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Lato-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/Lato-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Lato-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
});
const montserrat = localFont({
  display: 'swap',
  variable: '--font-montserrat',
  src: [
    {
      path: "./fonts/Montserrat-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Montserrat-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/Montserrat-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/Montserrat-SemiBoldItalic.ttf",
      weight: "600",
      style: "italic",
    },
    {
      path: "./fonts/Montserrat-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Montserrat-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
});

export const metadata = {
  title: "PixGenerator",
  description: "PixGenerator | Redefine Creativity",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${lato.variable} ${montserrat.variable}`}>
      <body>{children}</body>
    </html>
  );
}
