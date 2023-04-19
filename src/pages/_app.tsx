import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

import localFont from "next/font/local";

const Mona = localFont({
  variable: "--font-mona",
  src: [
    {
      path: "../../public/fonts/Mona-Sans-Regular.woff2",
      weight: "100",
    },
    {
      path: "../../public/fonts/Mona-Sans-Medium.woff2",
      weight: "500",
    },
    {
      path: "../../public/fonts/Mona-Sans-SemiBold.woff2",
      weight: "600",
    },
    {
      path: "../../public/fonts/Mona-Sans-Bold.woff2",
      weight: "900",
    },
  ],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${Mona.variable} font-mona`}>
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
