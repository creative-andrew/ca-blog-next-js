import { Poppins } from "@next/font/google";
import Header from "../components/Header/Header";
import "../styles/globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body
        className={`flex flex-wrap bg-gray-900 p-6 pt-10 gap-8 min-h-screen ${poppins.className}`}
      >
        <Header />
        <main className="flex-1 max-w-4xl mx-auto">{children}</main>
        <footer className="min-w-full self-end text-gray-300">
          Powered by WordPress & Next.js
        </footer>
      </body>
    </html>
  );
}
