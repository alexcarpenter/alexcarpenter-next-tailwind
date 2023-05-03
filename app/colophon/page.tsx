import type { Metadata } from "next/types";
import { Fragment } from "react";

export const metadata: Metadata = {
  title: "Colophon",
};

const inspiration = [
  "https://berkeleygraphics.com/",
  "https://chasem.co/",
  "https://frankchimero.com/",
  "https://hamishsmyth.com/",
  "https://hunterjennings.dev/",
  "https://joebell.co.uk/",
  "https://linusrogge.com/",
  "https://paco.me/",
  "https://rauno.me/",
  "https://sdrn.co/",
  "https://sj.land/",
];

export default function Posts() {
  return (
    <>
      <header className="mt-16 grid gap-16 md:grid-cols-4">
        <div className="md:col-span-2 md:col-start-2">
          <h1 className="font-variable-semibold text-3xl tracking-tight text-foreground">
            Colophon
          </h1>
          <p className="mt-1 text-lg text-foreground-neutral">
            View source on GitHub
          </p>
        </div>
      </header>

      <section className="mt-16">
        <header className="grid grid-cols-4 gap-16">
          <div className="col-span-2 col-start-2">
            <h2 className="font-variable-semibold text-lg">
              Tech stack <span aria-hidden="true">¬</span>
            </h2>
          </div>
        </header>
      </section>

      <section className="mt-16">
        <header className="grid grid-cols-4 gap-16">
          <div className="col-span-2 col-start-2">
            <h2 className="font-variable-semibold text-lg">
              Inspiration <span aria-hidden="true">¬</span>
            </h2>
          </div>
        </header>

        <div className="mt-8 grid grid-cols-4 gap-16">
          <div className="col-span-2 col-start-2">
            {inspiration.map((url, index) => {
              return (
                <Fragment key={url}>
                  <a
                    href={url}
                    className="underline decoration-underline hover:decoration-inherit"
                  >
                    {new URL(url).hostname}
                  </a>
                  {index !== inspiration.length - 1 ? (
                    <>
                      &nbsp;
                      <span className="text-foreground-neutral" role="none">
                        ⁕
                      </span>{" "}
                    </>
                  ) : null}
                </Fragment>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
