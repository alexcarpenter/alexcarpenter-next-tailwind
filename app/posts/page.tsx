import type { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Posts",
  description: "Strong opinions, loosely held.",
};

export default function Posts() {
  return (
    <>
      <header className="mt-16 grid gap-16 md:grid-cols-4">
        <div className="md:col-span-2 md:col-start-2">
          <h1 className="font-variable-semibold text-3xl tracking-tight text-foreground">
            Posts
          </h1>
          <p className="mt-1 text-lg text-foreground-neutral">
            Strong opinions, loosely held.
          </p>
        </div>
      </header>
    </>
  );
}
