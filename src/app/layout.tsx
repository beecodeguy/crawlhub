import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/assets/styles/main.scss";

const verdana = localFont({
  src: [
    {
      path: "../assets/fonts/VerdanaPro-Regular.ttf",
      style: "normal",
      weight: "400",
    },
    {
      path: "../assets/fonts/VerdanaPro-Bold.ttf",
      style: "normal",
      weight: "bold",
    },
    {
      path: "../assets/fonts/VerdanaPro-SemiBold.ttf",
      style: "normal",
      weight: "600",
    },
  ],
  variable: "--font-verdana-pro",
});

export const metadata: Metadata = {
  title: "Crawler Hub",
  description: "Web crawling service",
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
