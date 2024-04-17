import { useState, useEffect } from "react";
import styles from "../styles/Favorite.module.css";
import Store from "../store/Context";

function Favorite() {
  const { favorites, removeFromFavorites } = Store();

  return (
    <div className={styles.wishlist}>
      <h1 className={styles.title}>Wishlist</h1>

      {favorites.length === 0 ? (
        <div className={styles.emptyWishlist}>
          <h2 className={styles.emptyTitle}>Your wishlist is empty.</h2>
          <p className={styles.emptyText}>
            Save the items you like most so you don't lose sight of them.
          </p>
          <button
            className={styles.getInspiredButton}
            onClick={() => alert("Discover more")}
          >
            Discover more
          </button>
        </div>
      ) : (
        <div className={styles.wishlistItems}>
          {favorites.map((item) => (
            <div className={styles.wishlistItem} key={item.id}>
              <img
                src={item.thumbnail}
                alt={item.name}
                className={`${styles.itemImage} object-cover object-top`}
              />
              <div className={styles.itemDetails}>
                <h3 className={styles.itemName}>{item.title}</h3>
                <p className={styles.itemPrice}>€{item.price}</p>
                <button
                  className={styles.removeButton}
                  onClick={() => removeFromFavorites(item.id)}
                >
                  Remove
                </button>
              </div>
              <div className={styles.itemInfo}>
                <p>{item.info}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorite;
