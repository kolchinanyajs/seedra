import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "@/styles/styles.scss";
import Header from "@/components/Header";

const lexend = Lexend({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Seedra",
  description: "Seedra online store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lexend.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
