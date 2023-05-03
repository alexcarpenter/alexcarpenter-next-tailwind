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
    <fieldset>
      <legend>Toggle theme</legend>
      <label>
        <input
          type="radio"
          name="theme"
          value="system"
          defaultChecked={theme === "system"}
          onChange={handleChange}
        />
        <span>System</span>
      </label>
      <label>
        <input
          type="radio"
          name="theme"
          value="dark"
          defaultChecked={theme === "dark"}
          onChange={handleChange}
        />
        <span>Dark</span>
      </label>
      <label>
        <input
          type="radio"
          name="theme"
          value="light"
          defaultChecked={theme === "light"}
          onChange={handleChange}
        />
        <span>Light</span>
      </label>
    </fieldset>
  );
}
