
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeProduct } from "../Features/CartSlice";
import { Modal, Button } from "react-bootstrap";
import styles from "./CartPage.module.css"; 

const CartPage = () => {
  const dispatch = useDispatch();
  const productsInCart = useSelector((state) => state.cart.products);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleRemoveFromCart = (productId) => {
    dispatch(removeProduct({ id: productId }));
  };

  const handleShowDetails = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseDetails = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="cart-page">
      <h1>Cart</h1>
      <div className={styles["cart-items"]}> 
        {productsInCart.map((product) => (
          <div key={product.id} className={styles["cart-item"]}> 
            <img src={product.thumbnail} alt={product.description} />
            <div className="product-info">
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <p>Price: ${product.price}</p>
              <button
                className="btn btn-primary"
                onClick={() => handleShowDetails(product)}
              >
                Show Details
              </button>
              <button
              className={`${styles["product-info-button"]} ${styles["remove-button"]}`}
              onClick={() => handleRemoveFromCart(product.id)}
            >
              Remove from Cart
            </button>
            </div>
          </div>
        ))}
      </div>

      <Modal show={selectedProduct !== null} onHide={handleCloseDetails}>
      <Modal.Header closeButton>
          <Modal.Title>{selectedProduct?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedProduct && (
            <>
              <img
                src={selectedProduct.thumbnail}
                alt={selectedProduct.description}
                style={{ maxWidth: "100%", maxHeight: "70vh", objectFit: "cover" }}
              />
              <p>Description: {selectedProduct.description}</p>
              <p>Price: ${selectedProduct.price}</p>
              {selectedProduct.discountPercentage && (
                <p>Discount: {selectedProduct.discountPercentage}%</p>
              )}
              {selectedProduct.rating && <p>Rating: {selectedProduct.rating}</p>}
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseDetails}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CartPage;
