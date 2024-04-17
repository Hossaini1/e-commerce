import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faCartShopping, faHome } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { Link, useNavigate } from "react-router-dom";


import ShoppingCartModal from "../components/ShoppingCartModal.jsx";
import styles from "../styles/Nav.module.css";
import logo from "../images/haupt.png";


const categoryMappings = {
  "dresses": "/dresses",
  "skirts": "/dresses",
  "blouses": "/blouses",
  "shirts": "/blouses",
  "t-shirts": "/t-shirttops",
  "tops": "/t-shirttops",
  "pants": "/pants",
  "jeans": "/pants",
  "shoes": "/shoes",
  "jacket": "/women's%20jackets",
};

function Nav() {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchCategory, setSearchCategory] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cartItemCount, setCartItemCount] = useState(0);

  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase()); 

    const searchCategory = categoryMappings[e.target.value.toLowerCase()];
    setSearchCategory(searchCategory);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();

    if (searchCategory) {
      navigate(searchCategory); 
    } else {
      console.log("Search all categories:", searchQuery);
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
    setIsActive(false); 
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.logo}>
        <img src={logo} alt="Logo" className={styles.logo} />
      </Link>

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
            <Link to="/" className={styles.navLink}>
              <FontAwesomeIcon icon={faHome} />
            </Link>
          </li>

          <li>
            <Link to="/login" className={styles.navLink}>
              <FontAwesomeIcon icon={faUser} />
            </Link>
          </li>

          <li>
            <Link to="/favorite" className={styles.navLink}>
              <FontAwesomeIcon icon={faHeart} />
            </Link>
          </li>


          


            {/* Modal Shopping Cart */}
            <li className={styles.navLink} onClick={openModal}>

            <FontAwesomeIcon icon={faCartShopping} />
            {cartItemCount > 0 && (
              <div className="cart-item-count">{cartItemCount}</div>
            )}
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

      <ShoppingCartModal
        isOpen={isModalOpen}
        onClose={closeModal}
        setCartItemCount={setCartItemCount}
      />
    </nav>
  );
}

export default Nav;
