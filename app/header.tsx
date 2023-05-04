import Link from "next/link";

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
    label: "bookmarks",
    href: "/bookmarks",
  },
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
  return (
    <header className="grid grid-cols-2 gap-x-16 gap-y-4 md:grid-cols-4">
      <div className="col-span-2 md:col-span-1">
        <p className="font-variable-semibold text-foreground">
          <Link href="/">Alex Carpenter</Link>
        </p>
        <p className="text-foreground-neutral">Design Engineer</p>
      </div>

      <div className="md:col-span-2">
        <p className="font-variable-semibold text-foreground">Routes</p>
        {routes.map(({ href, label }) => {
          return (
            <Link
              key={href}
              href={href}
              className="block w-max text-foreground-neutral"
            >
              <span aria-hidden="true">/</span>
              {label}
            </Link>
          );
        })}
      </div>

      <div>
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
