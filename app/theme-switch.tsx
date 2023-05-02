// @ts-nocheck
"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTheme(e.target.value);
  };

  return (
    <fieldset onChange={handleChange}>
      <legend>Toggle theme</legend>
      <label>
        <input
          type="radio"
          name="theme"
          checked={theme === "system"}
          value="system"
        />
        <span>System</span>
      </label>
      <label>
        <input
          type="radio"
          name="theme"
          checked={theme === "dark"}
          value="dark"
        />
        <span>Dark</span>
      </label>
      <label>
        <input
          type="radio"
          name="theme"
          checked={theme === "light"}
          value="light"
        />
        <span>Light</span>
      </label>
    </fieldset>
  );
}
