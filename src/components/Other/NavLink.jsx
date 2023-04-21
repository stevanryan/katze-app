import Home from '../Main/Home'
import Cart from '../Main/Cart'
import Favourite from '../Main/Favourite'
import Profile from '../Main/Profile'
import './Navstyle.scss'

import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { FoodContext } from '../Main/CartContext'

const NavLink = () => {
  const { cartLength, favouriteLength } = useContext(FoodContext)

  return(
    <>
      <Link className='link' to={'/'} element={<Home />}><div className="home-link"></div></Link>
      <Link className='link' to={'/cart'} element={<Cart />}>
        <div className="cart-link">
          {cartLength > 0 && <div className="count">{cartLength}</div>}
        </div>
      </Link>
      <Link className='link' to={'/favourite'} element={<Favourite />}>
        <div className="favourite-link">
          {favouriteLength > 0 && <div className="count">{favouriteLength}</div>}
        </div>
      </Link>
      <Link className='link' to={'/profile'} element={<Profile />}><div className="profile-link"></div></Link>
    </>
  )
}

export default NavLink