import Footer from "@/components/containers/Footer";
import Header from "@/components/containers/Header";
import React from "react";

const WebPageLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main>
      {children}
    </main>
  );
};

export default WebPageLayout;
