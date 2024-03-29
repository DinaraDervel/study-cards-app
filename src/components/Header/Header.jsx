import s from "./Header.module.scss";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className={s.wrapper}>
        <nav>
          <ul className={s.horizontal_nav}>
            <li>
              <NavLink to="/">
                <div>
                  <img src={require("../../images/logo.png")} alt="logo" />
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink className={s.table} to="/table">
                Words List
              </NavLink>
            </li>
            <li>
              <NavLink className={s.carousel} to="/carousel">
                Learn
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
