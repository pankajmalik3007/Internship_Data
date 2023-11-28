import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeProduct, updateQuantity } from '../Features/CartSlice';

const MyBagPage = () => {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart.products);
  const [totalItems, setTotalItems] = useState(0);

  const handleRemoveFromBag = (productId) => {
    dispatch(removeProduct({ id: productId }));
    setTotalItems(totalItems - 1);
  };

  const handleIncrement = (productId) => {
    dispatch(updateQuantity({ id: productId, quantity: 1 }));
    setTotalItems(totalItems + 1);
  };

  const handleDecrement = (productId) => {
    dispatch(updateQuantity({ id: productId, quantity: -1 }));
    setTotalItems(totalItems - 1);
  };

  return (
    <div className="my-bag-page">
      <h1>Your Bag</h1>
      <div className="bag-items">
        {cartProducts.map((product) => (
          <div key={product.id} className="bag-item">
            <img src={product.thumbnail} alt={product.title} />
            <h3>{product.title}</h3>
            <p>Price: ${product.price}</p>
            <div className="quantity-controls">
              <button onClick={() => handleDecrement(product.id)}>-</button>
              <span>{product.quantity}</span>
              <button onClick={() => handleIncrement(product.id)}>+</button>
            </div>
            <button onClick={() => handleRemoveFromBag(product.id)}>Remove from Bag</button>
          </div>
        ))}
      </div>
      <div className="total-items">
        <p>Total Items in Bag: {totalItems}</p>
      </div>
    </div>
  );
};

export default MyBagPage;
