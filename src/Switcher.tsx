import { useEffect, useState } from "react";

export default function Switcher() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      console.log("dark");
      document.documentElement.classList.add("dark");
    } else {
      console.log("light");
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="bg-white dark:bg-black">
      <button onClick={handleThemeSwitch}>Dark Mode</button>
    </div>
  );
}
