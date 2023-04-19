import React from 'react'

import { useContext } from 'react'
import { FoodContext } from './CartContext'

import closeButton from '../../Images/icons/x-regular-60.png'

const Cart = () => {
  const { 
    cartItems, 
    cartLength,
    removeFromCart,
    addAmount,
    amount,
    decreaseAmount
  } = useContext(FoodContext)

  // Calculates all the item price
  let allPrice = 0

  return (
    <div className="cart-page">
      {cartLength === 0 ? <h1>Cart is Empty, go add some!</h1> : <h1>Cart</h1>}
      {/* <button onClick={handleButton}>Back to Home!</button> */}

      <div className="item-in-cart">
        {cartItems.map((item) => {
          return(
            <div className="cart-food" key={item.id}>
              <img src={item.image} alt="" style={{height: '100px'}}/>
              <h3>{item.name}</h3>
              <p>Price ${item.price}</p>
              <p className="amount">x {amount}</p>
              <p className="total-price">Total ${(item.price * item.qty).toFixed(2)}</p>
              <div className="cart-btn">
                <button onClick={() => addAmount(item)}>+</button>
                <button onClick={() => decreaseAmount(item)}>-</button>
                <div className="close-btn">
                  <img className="rmv-item" src={closeButton} alt="close" onClick={() => removeFromCart(item)}/>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {cartLength > 0 && 
      <div className="item-prices">
        {cartItems.forEach((item) => {
          allPrice += item.price * item.qty
        })}
        {/* toFixed to fix the decimal of the number */}
        <h2>All total price : ${allPrice.toFixed(2)}</h2>
      </div>}
    </div>
  );
}

export default Cart
