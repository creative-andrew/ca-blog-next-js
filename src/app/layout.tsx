import { Poppins } from "@next/font/google";
import Header from "../components/Header/Header";
import "@/styles/globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`flex flex-wrap bg-gray-900 p-6 pt-10 gap-8 min-h-screen ${poppins.className}`}
      >
        <Header />
        <main className="flex-1 mx-auto w-full md:max-w-3xl">{children}</main>
        <footer className="min-w-full self-end text-gray-300">
          Powered by WordPress & Next.js
        </footer>
      </body>
    </html>
  );
};

export default RootLayout;
