
import type { Metadata } from "next";
import { Gelasio } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import { AuthContextProvider } from "@/context/AuthContext";

const gelasio = Gelasio({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Osan Nig App",
  description: "Explore Osan Nig's comprehensive range of products and services, including high-quality blocks and clean water solutions, tailored for both residential and commercial needs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={gelasio.className}>
        <AuthContextProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </AuthContextProvider>
      </body>
    </html>
  );
}
