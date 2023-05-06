export default function NotFound() {
  return (
    <>
      <header className="mt-16 grid gap-16 md:grid-cols-4">
        <div className="md:col-span-2 md:col-start-2">
          <h1 className="grid text-9xl font-extrabold tracking-widest text-foreground">
            <span className="col-start-1 row-start-1 translate-x-2 text-blue-500 mix-blend-multiply">
              404
            </span>
            <span
              aria-hidden="true"
              className="col-start-1 row-start-1 text-red-500 mix-blend-multiply"
            >
              404
            </span>
            <span
              aria-hidden="true"
              className="col-start-1 row-start-1 translate-x-4 text-yellow-500 mix-blend-multiply"
            >
              404
            </span>
          </h1>
          <p className="mt-1 text-lg text-foreground-neutral">
            Could not find requested resource.
          </p>
        </div>
      </header>
    </>
  );
}
