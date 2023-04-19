import '../../Style/All.scss'
import SwiperComponent from '../Other/SwiperComponent'
import FoodShop from './FoodShop'

import { Typewriter } from 'react-simple-typewriter'
import { Link as ReactScroll } from 'react-scroll'

const Home = () => {
  return (
    <div className="home-page">
      <div className="landing">
        <div className="landing-bg" style={{width: '1000px'}}>
          <SwiperComponent />
        </div>
        <div className="landing-title">
          <h1>
            <Typewriter
              // words={['Meine', 'My', 'Deine', 'Your']}
              // words={['Providing', 'the', 'Cats', 'with', 'Happiness']}
              words={['Every', 'Cat', 'is', 'Special']}
              loop={false}
              typeSpeed={50}
              deleteSpeed={50}
              delaySpeed={2000}
              cursor
              cursorColor='#1f1f1f'
            />
          </h1>
          <h2>Providing the Cats with Happiness!</h2>
          <div className="line"></div>
          <ReactScroll
            className="explore-btn"
            to="food-shop"
            smooth={true}
            offset={-120}
            duration={500}
            >Explore!
          </ReactScroll>
        </div>
      </div>
      <FoodShop />
    </div>
  );
}

export default Home
