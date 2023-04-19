import { Products } from '../Other/Products'
import DisplayFood from './DisplayFood';

import { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

const FoodShop = () => {
  return (
    <div className="food-shop" id="food-shop">
      <h1>All of the Best Cat Foods!</h1>
      <Swiper
        centeredSlides={true}
        loop={true}
        slidesPerView={1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className='mySwipper'
        style={{width: '1200px', marginBottom: '16px'}}
        >
        <SwiperSlide><p>These foods are certified!</p></SwiperSlide>
        <SwiperSlide><p>Really safe for your cats!</p></SwiperSlide>
        <SwiperSlide><p>Healthy foods are priority!</p></SwiperSlide>
        <SwiperSlide><p>Made with chosen ingredients!</p></SwiperSlide>
      </Swiper>
      <div className="cat-food">
        {Products.map((data) => {
          return(
            // key to prevent error of duplicating.
            <DisplayFood key={data.id} data={data} />
          )
        })}
      </div>
    </div>
  );
}

export default FoodShop;
