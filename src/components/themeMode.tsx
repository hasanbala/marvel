import { ChangeEventHandler } from "react";
import "styles/themeMode.scss";

export const ThemeMode = () => {
  const handleDark = () => document.documentElement.setAttribute("data-theme", "dark");
  const handleLight = () => document.documentElement.setAttribute("data-theme", "light");

  const toggleTheme: ChangeEventHandler<HTMLInputElement> = (e) =>
    e.target.checked ? handleDark() : handleLight();

  return (
    <div className="toggle-theme-wrapper">
      <span>☀️</span>
      <label className="toggle-theme" htmlFor="checkbox">
        <input type="checkbox" id="checkbox" onChange={toggleTheme} />
        <div className="slider round"></div>
      </label>
      <span>🌒</span>
    </div>
  );
};
