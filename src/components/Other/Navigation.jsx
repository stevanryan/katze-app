import NavLink from './NavLink'
import './Navstyle.scss'
import Katze from '../../Images/katze.png'

import { useState } from 'react'

import { useMediaQuery } from 'react-responsive'
import { Sling as Hamburger } from 'hamburger-react'

const Navigation = () => {
  const [display, setDisplay] = useState(false)
  
  const isBigScreen = useMediaQuery({ query: '(min-width: 1280px)' })
  const isTabletMin = useMediaQuery({ query: '(min-width: 768px)' })
  const isTabletMax = useMediaQuery({ query: '(max-width: 1024px)' })
  const isMobile = useMediaQuery({ query: '(max-width: 480px)' })

  return(
    <nav>
      <div className="centered">
        <div className="nav-title">
          <div className="katze-title"><img src={Katze} alt="Katze" /></div>
        </div>

        {/* Big Screen Mode */}
        {isBigScreen && <div className="main-nav">
          <NavLink />
        </div>}

        {/* Tablet Mode */}
        {isTabletMin && isTabletMax && <div className="main-nav">
          <NavLink />
        </div>}

        {/* Mobile Mode */}
        {isMobile && <Hamburger color="#3e3e3e" rounded duration={.6} onToggle={toggled => {
          toggled ? setDisplay(!display) : setDisplay(!display)
        }}/>}
        {display && isMobile && <div className="mobile-nav"><NavLink /></div>}
      </div>
    </nav>
  )
}

export default Navigation