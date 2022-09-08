import React from 'react';
import Carousel from '@/components/Carousel';

const data = [
  {
    title: "Strangers Things",
    description:
      "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl.",
    year: 2016,
    category: "series",
    rating: 8.7,
    image: {
      xl: "https://res.cloudinary.com/dqm2lvou8/image/upload/v1662563819/movie-app/series/strangers-things/strangers-1440_vleifx.jpg",
      lg: "https://res.cloudinary.com/dqm2lvou8/image/upload/v1662563818/movie-app/series/strangers-things/strangers-260_ylspah.jpg",
      md: "https://res.cloudinary.com/dqm2lvou8/image/upload/v1662563818/movie-app/series/strangers-things/strangers-280_kox12h.jpg",
      sm: "https://res.cloudinary.com/dqm2lvou8/image/upload/v1662563818/movie-app/series/strangers-things/strangers-160_mpqpbh.jpg",
    },
    isRecent: true,
    isTrending: false,
  },
  {
    title: "Peaky Blinders",
    description:
      "A gangster family epic set in 1900s England, centering on a gang who sew razor blades in the peaks of their caps, and their fierce boss Tommy Shelby.",
    year: 2013,
    category: "series",
    rating: 8.8,
    image: {
      xl: "https://res.cloudinary.com/dqm2lvou8/image/upload/v1662564634/movie-app/series/peaky-blinders/peaky-1440_mxcq1h.jpg",
      lg: "https://res.cloudinary.com/dqm2lvou8/image/upload/v1662564634/movie-app/series/peaky-blinders/peaky-260_x1nefv.jpg",
      md: "https://res.cloudinary.com/dqm2lvou8/image/upload/v1662564633/movie-app/series/peaky-blinders/peaky-280_jw1fd9.jpg",
      sm: "https://res.cloudinary.com/dqm2lvou8/image/upload/v1662564633/movie-app/series/peaky-blinders/peaky-160_jr7dxd.jpg",
    },
    isRecent: false,
    isTrending: true,
  },
  {
    title: "The Avengers",
    description:
      "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
    year: 2012,
    category: "movie",
    rating: 8.0,
    image: {
      xl: "https://res.cloudinary.com/dqm2lvou8/image/upload/v1662564924/movie-app/movies/avengers/avengers-1440_agfwrs.jpg",
      lg: "https://res.cloudinary.com/dqm2lvou8/image/upload/v1662564923/movie-app/movies/avengers/avengers-260_zf8zfq.jpg",
      md: "https://res.cloudinary.com/dqm2lvou8/image/upload/v1662564923/movie-app/movies/avengers/avengers-280_ayzxhr.jpg",
      sm: "https://res.cloudinary.com/dqm2lvou8/image/upload/v1662564923/movie-app/movies/avengers/avengers-160_hmzsom.jpg",
    },
    isRecent: false,
    isTrending: false,
  },
];

function Home() {
  return (
    <>
      <Carousel
        className="swiper-container two"
        loop={true}
        speed={1000}
        autoplay={{
          delay: 3000,
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
          slideShadows: false,
        }}
      >
{/*         {data.map((data) => (
          <div key={project.id}>
            <ProjectCard {...project} />
          </div>
        ))} */}
      </Carousel>
    </>
  );
}

export default Home
