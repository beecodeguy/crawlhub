export default function Home() {
  return (
    <main>
      <nav className="flex px-5 py-5">Navbar</nav>
      <section>
        <h1>Body</h1>
      </section>
      <footer className="h-[340px] bg-primary text-white px-[80px] py-[48px]">
        <div className="flex gap-5 items-center justify-between">
          <h4 className="typography-h4">Footer</h4>
          <div>Solutions</div>
          <div>Platform</div>
          <div>Industries</div>
          <div>Platform</div>
        </div>
      </footer>
    </main>
  );
}
