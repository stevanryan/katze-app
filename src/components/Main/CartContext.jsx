import React from 'react'
import { useState, createContext } from 'react';

export const FoodContext = createContext(null)

const CartContext = (props) => {
  const [cartItems, setCartItems] = useState([])
  const cartLength = cartItems.length

  const [amount, setAmount] = useState(1)

  // Add the item into the cart
  const addToCart = (product) => {
    let isExist = false
    cartItems.forEach((item) => {
      if (item.id === product.id) {
        isExist = true
      }
    })
    if (isExist) { console.log('Items already added into your cart!'); return }
    setCartItems([...cartItems, product])
    console.log(cartItems)
  }

  // Delete the item from cart
  const removeFromCart = (product) => {
    const afterDelete = cartItems.filter((item) => item.id !== product.id)
    setCartItems(afterDelete)
    product.qty = 1
    console.log(afterDelete)
    console.log('Deleted Successfully!')
  }
  
  // Increase the amount of item quantity
  const addAmount = (product) => {
    const isExist = cartItems.find((item) => item.id === product.id)
    if (isExist) {
      product.qty++
      setAmount(amount + 1)
    }
  }

  // Decrease the amount of item quantity
  const decreaseAmount = (product) => {
    const isExist = cartItems.find((item) => item.id === product.id)
    if (isExist.qty === 1) {
      removeFromCart(product)
      return
    }
    product.qty--
    setAmount(amount - 1)
  }

  const [favouriteItems, setFavouriteItems] = useState([])
  const favouriteLength = favouriteItems.length

  // Add the item into the favourite
  const addToFav = (product) => {
    let isExist = false;
    favouriteItems.forEach((item) => {
      if (item.id === product.id) { isExist = true }
    })
    if (isExist) {
      console.log('Item already added into your favourites!')
      return
    }
    setFavouriteItems([...favouriteItems, product])
  }

  // Delete the item from favourite
  const removeFromFav = (product) => {
    const afterRemove = favouriteItems.filter((item) => item.id !== product.id)
    setFavouriteItems(afterRemove)
    console.log('Deleted Successfully!')
  }

  const myFunction = { 
    cartItems, 
    cartLength, 
    addToCart, 
    removeFromCart, 
    amount,
    addAmount,
    decreaseAmount,
    favouriteItems,
    favouriteLength,
    addToFav,
    removeFromFav,
  }

  return (
    <FoodContext.Provider value={myFunction}>
      {props.children}
    </FoodContext.Provider>
  );
}

export default CartContext
