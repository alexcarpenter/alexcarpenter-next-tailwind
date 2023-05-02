import Link from "next/link";

export function Header() {
  return (
    <header className="grid grid-cols-4 gap-16">
      <div>
        <p className="font-semibold text-foreground">Alex Carpenter</p>
        <p className="text-foreground-neutral">Design Engineer</p>
      </div>

      <div className="col-span-2">
        <p className="font-semibold text-foreground">Routes</p>
        <Link href="/" className="text-foreground-neutral">
          /index
        </Link>
        <br />
        <Link href="/posts" className="text-foreground-neutral">
          /posts
        </Link>
        <br />
        <Link href="/activity" className="text-foreground-neutral">
          /activity
        </Link>
        <br />
        <Link href="/colphon" className="text-foreground-neutral">
          /colophon
        </Link>
      </div>

      <div>
        <p className="font-semibold text-foreground">Connect</p>
        <a href="https://twitter.com/home" className="text-foreground-neutral">
          Twitter
        </a>
        <br />
        <a
          href="https://github.com/alexcarpenter"
          className="text-foreground-neutral"
        >
          GitHub
        </a>
        <br />
        <a
          href="https://www.linkedin.com/in/imalexcarpenter/"
          className="text-foreground-neutral"
        >
          LinkedIn
        </a>
      </div>
    </header>
  );
}
