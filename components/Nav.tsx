import { BsFillCartFill } from "react-icons/bs";
import styles from "../styles/Nav.module.css";

const Nav = () => {
  return (
    <nav className={styles.navigation}>
      <h1>
        Fake<strong>Shop</strong>
      </h1>
      <BsFillCartFill />
    </nav>
  );
};

export default Nav;
