import { Link } from "react-router-dom";
import "../styles/navbar.css";

export const Navbar = ({ theme, setTheme }) => {
  const handleLight = () => setTheme("dark");
  const handleDark = () => setTheme("");

  return (
    <div className='navbar'>
      <h1>THE MARVEL APP</h1>
      <ul>
        <li>
          <Link
            className='navLink'
            to='/'
            style={{ color: "#fff", textDecoration: "none" }}>
            <b>Superheroes</b>
          </Link>
        </li>
      </ul>
      <i
        id='toggle'
        onClick={theme ? handleDark : handleLight}
        className={theme ? "fa-solid fa-moon" : "fa-solid fa-sun"}></i>
    </div>
  );
};
