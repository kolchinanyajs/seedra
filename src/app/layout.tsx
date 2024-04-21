import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "@/styles/styles.scss";

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
      <body className={lexend.className}>{children}</body>
    </html>
  );
}
