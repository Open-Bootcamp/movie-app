import React from 'react'
import SwiperCore, { A11y, Autoplay, EffectCoverflow, Navigation, Pagination } from 'swiper'
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react'
import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'
import Slide from './Slide'

const Carousel: React.FunctionComponent<SwiperProps> = (props) => {
  SwiperCore.use([Autoplay])
  return (
    <Swiper
      modules={[Navigation, Pagination, A11y, EffectCoverflow]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      {...props}
    >
      {React.Children.map(props.children, (child, i) => (
        <SwiperSlide key={i}>
          <Slide>
            {child}
          </Slide>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default Carousel
