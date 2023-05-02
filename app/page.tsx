import { Header } from "./header";

import { Instrument_Serif } from "next/font/google";

const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: "italic",
});

export default function Home() {
  return (
    <>
      <Header />

      <section className="mt-16 grid grid-cols-4 gap-16">
        <div className="col-start-2 col-span-2">
          <p className={`text-3xl ${instrument.className} text-foreground`}>
            A detail oriented user interface engineer interested in CSS
            architecture, React, TypeScript, animation, and design systems.
            Currently working at HashiCorp, helping build and maintain
            public-facing HashiCorp websites and web applications with Next.js.
          </p>
        </div>
      </section>

      <section className="mt-16 grid grid-cols-4 gap-16">
        <div className="col-start-2 col-span-2">
          <h2 className="font-semibold text-foreground">Experience</h2>
        </div>
      </section>

      <section className="mt-16 grid grid-cols-4 gap-16">
        <div className="col-start-2 col-span-2">
          <h2 className="font-semibold text-foreground">Recommendations</h2>
        </div>
      </section>
    </>
  );
}
