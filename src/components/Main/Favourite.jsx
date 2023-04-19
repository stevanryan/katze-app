import { useContext } from "react";
import { FoodContext } from "./CartContext";

const Favourite = () => {
  const {
    addToCart,
    favouriteItems,
    favouriteLength, 
    removeFromFav 
  } = useContext(FoodContext)

  return (
    <div className="favourite-page">
      {favouriteLength === 0 ? <h1>Seems that you haven't liked one, right?</h1> : <h1>FAVOURITE</h1>}

      <div className="item-in-favourite">
        {favouriteItems.map((item) => {
          return(
            <div className="cart-food" key={item.id}>
              <img src={item.image} alt="" style={{height: '100px'}}/>
              <h3>{item.name}</h3>
              <div className="close-btn">
                <button onClick={() => removeFromFav(item)}>Remove</button>
                <button onClick={() => addToCart(item)}>Add to Cart!</button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default Favourite;
