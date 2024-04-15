import { useState, useEffect } from 'react';
import styles from '../styles/Favorite.module.css';



// ICH WARTE AUF DIE API
/*function Favorite() {
  const [wishlistItems, setWishlistItems] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('hier wird api');
        const data = await response.json();

        const formattedItems = data.map(item => ({
          id: item.product_id,
          name: item.product_name,
          price: item.product_price,
          image: item.product_image_url,
          info: item.product_description,
        }));

        setWishlistItems(formattedItems);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);   */


  function Favorite() {
    const [wishlistItems, setWishlistItems] = useState([
      { id: 1, name: 'Item blabla 1', price: 10.99, image: 'https://i.pinimg.com/originals/70/6a/97/706a97a963fd0d5510c2d817332c932c.jpg'},
      { id: 2, name: 'Item blabla 2', price: 9.99, image: 'https://i.pinimg.com/originals/70/6a/97/706a97a963fd0d5510c2d817332c932c.jpg'},
      { id: 3, name: 'Item blabla 3', price: 11.99, image: 'https://i.pinimg.com/originals/70/6a/97/706a97a963fd0d5510c2d817332c932c.jpg'},
      { id: 4, name: 'Item blabla 4', price: 12.99, image: 'https://i.pinimg.com/originals/70/6a/97/706a97a963fd0d5510c2d817332c932c.jpg'},
    ]);
  
  const addToWishlist = (item) => {
    setWishlistItems([...wishlistItems, item]);
  };

  const removeFromWishlist = (item) => {
    setWishlistItems(wishlistItems.filter((existingItem) => existingItem.id !== item.id));
  };

  return (
    <div className={styles.wishlist}>
      <h1 className={styles.title}>Wishlist</h1>

      {wishlistItems.length === 0 ? (
        <div className={styles.emptyWishlist}>
          <h2 className={styles.emptyTitle}>Your wishlist is empty.</h2>
          <p className={styles.emptyText}>Save the items you like most so you don't lose sight of them.</p>
          <button className={styles.getInspiredButton} onClick={() => alert('Discover more')}>Discover more</button> 
        </div>
      ) : (
        <div className={styles.wishlistItems}>
          {wishlistItems.map((item) => (
            <div className={styles.wishlistItem} key={item.id}>
              <img src={item.image} alt={item.name} className={styles.itemImage} />
              <div className={styles.itemDetails}>
                <h3 className={styles.itemName}>{item.name}</h3>
                <p className={styles.itemPrice}>€{item.price}</p>
                <button className={styles.removeButton} onClick={() => removeFromWishlist(item)}>Remove</button>
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