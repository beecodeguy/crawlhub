import React from "react";

const WebPageLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main>
      <nav className="flex px-5 py-5">Navbar</nav>
      <section>{children}</section>
      <footer className="h-[340px] bg-primary text-white px-[80px] py-[48px]">
        <div className="flex gap-5 items-center justify-between">
          <span className="typography-h4">Footer</span>
          <div>Solutions</div>
          <div>Platform</div>
          <div>Industries</div>
          <div>Platform</div>
        </div>
      </footer>
    </main>
  );
};

export default WebPageLayout;
