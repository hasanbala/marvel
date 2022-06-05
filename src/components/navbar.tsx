import { Link } from "react-router-dom";
import "styles/navbar.scss";

interface IProps {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}

export const Navbar: React.FC<IProps> = ({ theme, setTheme }) => {
  const handleLight = () => setTheme("dark");
  const handleDark = () => setTheme("");

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
            <i
              id="toggle"
              onClick={theme ? handleDark : handleLight}
              className={theme ? "fa-solid fa-moon" : "fa-solid fa-sun"}
            />
          </li>
        </ul>
      </div>
    </nav>
  );
};
