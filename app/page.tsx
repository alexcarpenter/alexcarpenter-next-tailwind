export default function Home() {
  return (
    <>
      <header className="mt-16 grid gap-16 md:grid-cols-4">
        <div className="md:col-span-2 md:col-start-2">
          <p className="font-serif text-xl text-foreground md:text-3xl">
            A detail oriented user interface engineer interested in CSS
            architecture, React, TypeScript, animation, and design systems.
            Currently working at HashiCorp, helping build and maintain
            public-facing HashiCorp websites and web applications with Next.js.
          </p>
        </div>
      </header>

      {/* <section className="mt-16 grid grid-cols-4 gap-16">
        <div className="col-start-2 col-span-2">
          <h2 className="font-semibold text-foreground">Experience</h2>
        </div>
      </section> */}

      {/* <section className="mt-16 grid grid-cols-4 gap-16">
        <div className="col-start-2 col-span-2">
          <h2 className="font-semibold text-foreground">Recommendations</h2>
        </div>
      </section> */}
    </>
  );
}
