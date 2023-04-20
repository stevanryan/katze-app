import '../../Style/All.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, EffectFade } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
// import 'swiper/css/navigation'
// add Navigation to 'swiper'
import 'swiper/css/effect-fade'

import cat1 from '../../Images/real-image/cat1.jpg'
import cat2 from '../../Images/real-image/cat2.jpg'
import cat3 from '../../Images/real-image/cat3.jpg'
import cat4 from '../../Images/real-image/cat4.jpg'
import cat5 from '../../Images/real-image/cat5.jpg'
import cat6 from '../../Images/real-image/cat6.jpg'
import cat7 from '../../Images/real-image/cat7.jpg'
import cat8 from '../../Images/real-image/cat8.jpg'

const SwiperComponent = () => {
  return (
    <div className="landing-cat">
      <Swiper
        // spaceBetween={30}
        centeredSlides={true}
        loop={true}
        slidesPerView={1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        // navigation={true}
        effect={'fade'}
        modules={[Autoplay, Pagination, EffectFade]}
        className='mySwipper'
      >
        <SwiperSlide><img src={cat1} alt="cat1"/></SwiperSlide>
        <SwiperSlide><img src={cat2} alt="cat2"/></SwiperSlide>
        <SwiperSlide><img src={cat3} alt="cat3"/></SwiperSlide>
        <SwiperSlide><img src={cat4} alt="cat4"/></SwiperSlide>
        <SwiperSlide><img src={cat5} alt="cat5"/></SwiperSlide>
        <SwiperSlide><img src={cat6} alt="cat6"/></SwiperSlide>
        <SwiperSlide><img src={cat7} alt="cat7"/></SwiperSlide>
        <SwiperSlide><img src={cat8} alt="cat8"/></SwiperSlide>
      </Swiper>
    </div>
  );
}

export default SwiperComponent
