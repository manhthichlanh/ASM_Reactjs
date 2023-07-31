import React from "react";

function Item({ cartId, bookId, quantity, username }) {
  
console.log({ cartId, bookId, quantity, username })
  return (
    <div className="cart-item">
      <div className="cart-item__details">
        <h3>Cart ID: {cartId}</h3>
        <p>Book ID: {bookId}</p>
        <p>Quantity: {quantity}</p>
        <p>Username: {username}</p>
      </div>
    </div>
  );
}

export default Item;