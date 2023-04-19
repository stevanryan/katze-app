import { useContext } from "react"
import { FoodContext } from "./CartContext"

import notFavBtn from '../../Images/icons/heart-regular-grey.png'
// import favBtn from '../../Images/icons/heart-solid-red.png'

const DisplayFood = ({ data }) => {
  const { name, price, image } = data

  const { addToCart, addToFav } = useContext(FoodContext)

  return(
    <div className="food-item">
      <h3>{name}</h3>
      <p>${price}</p>
      <img src={image} alt="" style={{height: '100px'}}/>
      <div className="btn">
        <button onClick={() => { addToCart(data); }}>
          { 'Add to Cart!' }
        </button>
        <img src={notFavBtn} alt="like" onClick={() => addToFav(data)}/>
      </div>
    </div>
  )
}

export default DisplayFood
