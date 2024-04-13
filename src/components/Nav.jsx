import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import ShoppingCartModal from "../components/ShoppingCartModal.jsx";
import styles from "../styles/Nav.module.css";
import logo from "../images/haupt.png";
import { Link } from "react-router-dom";

function Nav() {
  const [isActive, setIsActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("Search query:", searchQuery);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <img src={logo} alt="Logo" className={styles.logo} />

      <ul className={`${styles.navMenu} ${isActive ? styles.active : ""}`}>
        <li>
          <form onSubmit={handleSearchSubmit}>
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search for anything ..."
              className={styles.searchInput}
            />
          </form>
        </li>

        <div className={styles.iconContainer}>
          <li>
            <Link to="/login" className={styles.navLink}>
              <FontAwesomeIcon icon={faUser} />
            </Link>
          </li>

          <li onClick={toggleActiveClass}>
            <Link to="/favorite" className={styles.navLink}>
              <FontAwesomeIcon icon={faHeart} />
            </Link>
          </li>

          <li onClick={openModal}></li>

          <li onClick={toggleActiveClass}>
            <div className={styles.navLink}>
              <FontAwesomeIcon icon={faCartShopping} />
            </div>

            {/* Modal Shopping Cart */}
            <div>
              <ShoppingCartModal isOpen={isModalOpen} onClose={closeModal} />
            </div>
          </li>
        </div>
      </ul>

      <div
        className={`${styles.hamburger} ${isActive ? styles.active : ""}`}
        onClick={toggleActiveClass}
      >
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </div>
    </nav>
  );
}

export default Nav;
