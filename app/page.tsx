import { buttonVariants } from "@/styles/button";

export default function Home() {
  return (
    <>
      <header className="mt-16 grid gap-16 md:grid-cols-4">
        <div className="md:col-span-2 md:col-start-2">
          <p className="bg-gradient-to-br from-text-gradient-start to-text-gradient-end bg-clip-text font-serif text-xl italic text-transparent md:text-3xl">
            A detail oriented user interface engineer interested in CSS
            architecture, React, TypeScript, animation, and design systems.
            Currently working at HashiCorp, helping build and maintain
            public-facing HashiCorp websites and web applications with Next.js.
          </p>
          <div className="mt-8">
            <a
              href="https://read.cv/alexcarpenter"
              className={buttonVariants()}
            >
              Read CV
            </a>
          </div>
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
