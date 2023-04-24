import React from 'react'
import { useState, createContext } from 'react';

import { toast } from 'react-toastify'

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
    if (isExist) { 
      toast.warn('Item already in the Cart!', { autoClose: 1500, position: 'bottom-right'}); 
      console.log('Item already in the Cart!');
      return 
    }
    setCartItems([...cartItems, product])
    toast.success('Succesfully added into the Cart!', { autoClose: 1500, position: 'bottom-right' })
    console.log(cartItems)
  }

  // Delete the item from cart
  const removeFromCart = (product) => {
    toast.info('Item removed from the Cart!', { autoClose: 1500, position: 'bottom-right'})
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
    toast.success('Succesfully added into the Favourite!', { autoClose: 1500, position: 'bottom-right' })
  }

  // Delete the item from favourite
  const removeFromFav = (product) => {
    toast.info('Item removed from Favourite!', { autoClose: 1500, position: 'bottom-right'})
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
