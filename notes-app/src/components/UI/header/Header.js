import { Fragment } from "react";
import styles from "./Header.module.css";
import SearchBar from "../searchBar/SearchBar";
const Header = ({ onSeachNote }) => {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1>Tuple Notes</h1>
      </header>
      <SearchBar onSeachNote={onSeachNote} />
    </Fragment>
  );
};

export default Header;
