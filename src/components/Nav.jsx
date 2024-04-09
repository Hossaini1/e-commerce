import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';

import styles from '../styles/Nav.module.css';
import logo from '../images/haupt.png';

function Nav() {
  const [isActive, setIsActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };

  const removeActive = () => {
    setIsActive(false);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log('Search query:', searchQuery);
  };

  return (
    <div className="App">
    <header className="App-header">
      <nav className={`${styles.navbar}`}>
      <img  src={logo} alt="Logo" className={`${styles.logo}`} 
          style={{ width: '170px', height: '70px', marginLeft: '70px' }}
      />

       <ul className={`${styles.navMenu} ${isActive ? styles.active : ''}`}>
        <li onClick={removeActive}>
        <form onSubmit={handleSearchSubmit} style={{ marginRight: 'auto' }}>
        <input type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search for anything..."
              className={`${styles.searchInput}`} 
        />
        </form>
        </li>

        <li onClick={removeActive} style={{ marginLeft: 'auto', marginRight: '-30%' }}>
          <a href="#login" className={`${styles.navLink}`}>
            <FontAwesomeIcon icon={faUser} />
          </a>
            </li>

          <li onClick={removeActive} style={{ marginLeft: 'auto', marginRight: '-30%' }}>
           <a href="#catalog" className={`${styles.navLink}`}>
            <FontAwesomeIcon icon={faHeart} />
          </a>
            </li>

            <li onClick={removeActive} style={{ marginLeft: 'auto', marginRight: '-30%' }}>
            <a href="#cart" className={`${styles.navLink}`}>
            <FontAwesomeIcon icon={faCartShopping} />
              </a>
            </li>
          </ul>


          <div
            className={`${styles.hamburger} ${isActive ? styles.active : ''}`}
            onClick={toggleActiveClass}
          >
            <span className={`${styles.bar}`}></span>
            <span className={`${styles.bar}`}></span>
            <span className={`${styles.bar}`}></span>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Nav;
