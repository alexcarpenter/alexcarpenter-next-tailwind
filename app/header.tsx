import Link from "next/link";

export function Header() {
  return (
    <header className="grid grid-cols-2 gap-x-16 gap-y-4 md:grid-cols-4">
      <div className="col-span-2 md:col-span-1">
        <p className="font-semibold text-foreground">
          <Link href="/">Alex Carpenter</Link>
        </p>
        <p className="text-foreground-neutral">Design Engineer</p>
      </div>

      <div className="md:col-span-2">
        <p className="font-semibold text-foreground">Routes</p>
        <Link href="/" className="text-foreground-neutral">
          <span aria-hidden="true">/</span>index
        </Link>
        <br />
        <Link href="/posts" className="text-foreground-neutral">
          <span aria-hidden="true">/</span>posts
        </Link>
        <br />
        <Link href="/bookmarks" className="text-foreground-neutral">
          <span aria-hidden="true">/</span>bookmarks
        </Link>
        {/* <br />
        <Link href="/activity" className="text-foreground-neutral">
          <span aria-hidden="true">/</span>activity
        </Link>
        <br />
        <Link href="/colphon" className="text-foreground-neutral">
          <span aria-hidden="true">/</span>colophon
        </Link> */}
      </div>

      <div>
        <p className="font-semibold text-foreground">Connect</p>
        <a href="https://twitter.com/home" className="text-foreground-neutral">
          Twitter <span aria-hidden="true">↗</span>
        </a>
        <br />
        <a
          href="https://github.com/alexcarpenter"
          className="text-foreground-neutral"
        >
          GitHub <span aria-hidden="true">↗</span>
        </a>
        <br />
        <a
          href="https://www.linkedin.com/in/imalexcarpenter/"
          className="text-foreground-neutral"
        >
          LinkedIn <span aria-hidden="true">↗</span>
        </a>
      </div>
    </header>
  );
}
