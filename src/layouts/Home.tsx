// import React from 'react';
import Carousel from '@/components/carousel'

const Home = (): JSX.Element => {
  return (
    <>
      <Carousel
        className="swiper-container two"
        loop={true}
        speed={1000}
        autoplay={{
          delay: 3000
        }}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        navigation={false}
        coverflowEffect={{
          rotate: 0,
          stretch: 80,
          depth: 200,
          modifier: 1,
          slideShadows: false
        }}
      >
        {/*         {data.map((data) => (
          <div key={project.id}>
            <ProjectCard {...project} />
          </div>
        ))} */}
      </Carousel>
    </>
  )
}

export default Home
