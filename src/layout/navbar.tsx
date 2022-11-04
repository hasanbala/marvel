import { ThemeMode } from "@components/themeMode";
import { Link } from "react-router-dom";
import "styles/navbar.scss";

export const Navbar = () => {
  return (
    <nav className="navbarsub">
      <div className="navbarsub-list">
        <ul id="myTopnav">
          <li className="logo">
            <h1>The Marvel App</h1>
          </li>
          <li className="item">
            <Link to="/">
              <div className="div-hero" data-hover="Superheroes">
                Superheroes
              </div>
            </Link>
          </li>
          <li className="item">
            <ThemeMode />
          </li>
        </ul>
      </div>
    </nav>
  );
};
