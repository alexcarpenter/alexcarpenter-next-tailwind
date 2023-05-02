import type { Metadata } from "next/types";
import { allBookmarks } from "contentlayer/generated";

export const metadata: Metadata = {
  title: "Bookmarks",
  description: "Saving for later.",
};

export default function Bookmarks() {
  return (
    <>
      <header className="mt-16 grid gap-16 md:grid-cols-4">
        <div className="md:col-span-2 md:col-start-2">
          <h1 className="text-3xl font-semibold text-foreground">Bookmarks</h1>
          <p className="mt-2 font-serif text-2xl text-foreground-neutral">
            Saving for later.
          </p>
        </div>
      </header>

      <section className="mt-16">
        <ul>
          {allBookmarks.map((bookmark) => {
            return (
              <li
                key={bookmark._id}
                className="grid grid-cols-4 gap-16 border-t py-8"
              >
                <div className="col-span-2 col-start-2">
                  <p className="text-sm text-foreground-neutral">
                    {new URL(bookmark.url).hostname}
                  </p>
                  <h2 className="font-semibold">
                    <a
                      href={bookmark.url}
                      className="underline decoration-underline decoration-2 hover:decoration-inherit"
                    >
                      {bookmark.title}
                    </a>{" "}
                    ↗
                  </h2>
                  {bookmark.description ? (
                    <p className="mt-2 text-foreground-neutral">
                      {bookmark.description}
                    </p>
                  ) : null}
                </div>

                <div className="col-start-1 row-start-1">
                  <time
                    className="text-sm text-foreground-neutral"
                    dateTime={bookmark.date}
                  >
                    {bookmark.date}
                  </time>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}
