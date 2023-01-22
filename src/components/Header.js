import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <h2>Weather Report</h2>
      <nav className={styles.navbar}>
        <ul>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? styles.active : "")}
              to='/home'
            >
              Home
            </NavLink>
          </li>
          {/* Add more links */}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
