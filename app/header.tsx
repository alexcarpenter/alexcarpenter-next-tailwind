"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const routes = [
  {
    label: "index",
    href: "/",
  },
  {
    label: "posts",
    href: "/posts",
  },
  {
    label: "activity",
    href: "/activity",
  },
  {
    label: "bookmarks",
    href: "/bookmarks",
  },
  // {
  //   label: "colophon",
  //   href: "/colophon",
  // },
];

const accounts = [
  {
    label: "Twitter",
    href: "https://twitter.com/hybrid_alex",
  },
  {
    label: "GitHub",
    href: "https://github.com/alexcarpenter",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/imalexcarpenter",
  },
];

export function Header() {
  const pathname = usePathname();
  return (
    <header className="grid grid-cols-2 items-start gap-x-16 gap-y-4 md:grid-cols-4">
      <div className="col-span-2 flex items-center justify-between md:col-span-1">
        <div>
          <p className="font-variable-semibold text-foreground">
            <Link href="/">Alex Carpenter</Link>
          </p>
          <p className="text-foreground-neutral">Design Engineer</p>
        </div>

        <button className="grid h-10 w-10 items-center rounded-full border bg-surface-neutral md:hidden">
          <span className="sr-only">Open menu</span>
        </button>
      </div>

      <div className="hidden md:col-span-2 md:block">
        <p className="font-variable-semibold text-foreground">Routes</p>
        <nav>
          <ul>
            {routes.map(({ href, label }) => {
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className="block w-max text-foreground-neutral"
                    aria-current={pathname === href ? "page" : undefined}
                  >
                    <span aria-hidden="true">/</span>
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      <div className="hidden md:block">
        <p className="font-variable-semibold text-foreground">Connect</p>
        {accounts.map(({ href, label }) => {
          return (
            <a
              key={href}
              href={href}
              className="block w-max text-foreground-neutral"
            >
              {label} <span aria-hidden="true">↗</span>
            </a>
          );
        })}
      </div>
    </header>
  );
}
