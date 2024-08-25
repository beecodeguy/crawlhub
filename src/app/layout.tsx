import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/assets/styles/main.scss";

const verdana = localFont({
  src: "../assets/fonts/VerdanaPro-Regular.ttf",
  variable: "--font-verdana-pro",
});

export const metadata: Metadata = {
  title: "Crawler Hub",
  description: "Web crawling application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={verdana.className}>{children}</body>
    </html>
  );
}
