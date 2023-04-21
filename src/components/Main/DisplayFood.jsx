import { useContext, useState } from "react"
import { FoodContext } from "./CartContext"

import notFavBtn from '../../Images/icons/heart-regular-grey.png'
import favBtn from '../../Images/icons/heart-solid-red.png'

const DisplayFood = ({ data }) => {
  const { name, price, image } = data

  const { 
    cartItems, 
    addToCart, 
    addToFav, 
    removeFromFav, 
    favouriteItems 
  } = useContext(FoodContext)

  const isInCart = cartItems.find((item) => {
    if (item.id === data.id) { return true }
    return false
  })

  const isInFavourite = favouriteItems.find((item) => {
    if (item.id === data.id) { return true }
    return false
  })

  const [favCond, setFavCond] = useState(true)

  return(
    <div className="food-item">
      <h3>{name}</h3>
      <p>${price}</p>
      <img src={image} alt="" style={{height: '100px'}}/>
      <div className="btn">
        <button onClick={() => addToCart(data)}>
          {isInCart ? 'Item Added' : 'Add to Cart'}
        </button>
        <img src={isInFavourite && isInCart ? favBtn : isInFavourite ? favBtn : notFavBtn} alt="like" 
          onClick={() => { favCond ? addToFav(data) : removeFromFav(data); setFavCond(!favCond)}}
        />
      </div>
    </div>
  )
}

export default DisplayFood
