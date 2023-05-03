import type { Metadata } from "next/types";
import { parseDateToString, compareDesc } from "@/lib/formatting";
import { allBookmarks } from "contentlayer/generated";

export const metadata: Metadata = {
  title: "Bookmarks",
  description: "Saving for later.",
};

export default function Bookmarks() {
  const sortedBookmarks = allBookmarks.sort(({ date: a }, { date: b }) =>
    compareDesc(new Date(a), new Date(b))
  );
  return (
    <>
      <header className="mt-16 grid gap-16 md:grid-cols-4">
        <div className="md:col-span-2 md:col-start-2">
          <h1 className="font-variable-semibold text-3xl text-foreground">
            Bookmarks
          </h1>
          <p className="mt-2 font-serif text-2xl italic text-foreground-neutral">
            Saving for later.
          </p>
        </div>
      </header>

      <section className="mt-16">
        <ul>
          {sortedBookmarks.map((bookmark) => {
            return (
              <li
                key={bookmark._id}
                className="grid gap-x-16 gap-y-2 border-t py-8 md:grid-cols-4"
              >
                <div className="md:col-span-2 md:col-start-2">
                  <p className="text-sm text-foreground-neutral">
                    {new URL(bookmark.url).hostname}
                  </p>
                  <h2 className="font-variable-semibold">
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

                <div className="md:col-start-1 md:row-start-1">
                  <time
                    className="text-sm text-foreground-neutral"
                    dateTime={bookmark.date}
                  >
                    {parseDateToString(bookmark.date)}
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
