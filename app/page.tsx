import { allRecommendations } from "@/.contentlayer/generated";
import { buttonVariants } from "@/styles/button";

export default function Home() {
  return (
    <>
      <h1 className="sr-only">Alex Carpenter</h1>

      <header className="mt-16 grid gap-16 md:grid-cols-4">
        <div className="md:col-span-2 md:col-start-2">
          <p className="max-w-prose bg-gradient-to-br from-text-gradient-start to-text-gradient-end bg-clip-text font-serif text-2xl italic text-transparent md:text-3xl">
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
          <h2 className="font-variable-semibold text-foreground">Experience</h2>
        </div>
      </section> */}

      <section className="mt-16">
        <header className="grid gap-16 md:grid-cols-4">
          <div className="md:col-span-2 md:col-start-2">
            <h2 className="font-variable-semibold text-lg">
              Recommendations <span aria-hidden="true">¬</span>
            </h2>
          </div>
        </header>

        <ul className="mt-8">
          {allRecommendations.map(({ _id, name, text, title, company }) => {
            return (
              <li
                key={_id}
                className="grid gap-x-16 gap-y-2 border-t py-8 md:grid-cols-4"
              >
                <div>
                  <h2 className="font-variable-semibold">{name}</h2>
                </div>

                <div className="col-span-2">
                  <p>“{text}”</p>
                </div>

                <div>
                  <p className="text-sm text-foreground-neutral">{title}</p>
                  <p className="text-sm text-foreground-neutral">{company}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}
