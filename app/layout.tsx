import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Providers from "./providers";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});
const description =
  "Optimizujemo rad i produžavamo životni vek vaše rashladne opreme";
export const metadata: Metadata = {
  title: "NAPON",
  description: description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sr" suppressHydrationWarning>
      <body className={`${poppins.className} min-h-[100vh] flex flex-col`}>
        <Providers>
          <div className="w-full bg-lightColor dark:bg-darkColor dark:text-lightColor dark:border-b dark:border-zinc-600 border-b border-zinc-300 text-darkColor fixed top-0 z-50 shadow-[0px_20px_20px_0px_#00000024] ">
            <Header />
          </div>
          <main className="pt-[61px] bg-lightColor dark:bg-darkColor text-darkColor dark:text-lightColor min-h-[460px]">
            {children}
          </main>
          <div className="bg-lightColor text-darkColor dark:bg-darkColor dark:text-lightColor mt-auto dark:border-zinc-600 border-t border-zinc-300">
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
