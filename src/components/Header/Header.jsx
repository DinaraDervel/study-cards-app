import s from "./Header.module.scss";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <h1>Let's learn some words! / Давай выучим слова!</h1>
      <nav>
        <ul className={s.horizontal_nav}>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? s.activeLink : "")}
              to="/table"
            >
              Все слова
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? s.activeLink : "")}
              to="/carousel"
            >
              Учить слова
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
