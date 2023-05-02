import { ThemeSwitch } from "./theme-switch";
export function Footer() {
  return (
    <footer className="pt-16">
      <div className="grid gap-16 md:grid-cols-4">
        <div>
          <ThemeSwitch />
        </div>

        <div className="md:col-start-4">
          <p className="text-foreground">“Less but better”</p>
          <p className="text-foreground-neutral">
            &nbsp;&nbsp;&mdash; Dieter Rams
          </p>
        </div>
      </div>
    </footer>
  );
}
