import Footer from "@/components/containers/Footer";
import Header from "@/components/containers/Header";
import React from "react";

const WebPageLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main className="flex flex-col gap-7">
      <Header />
      <section>{children}</section>
      <Footer />
    </main>
  );
};

export default WebPageLayout;
