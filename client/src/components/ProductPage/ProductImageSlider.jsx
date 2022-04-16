import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "../../styles/ProductPage/ProductImageSlider.scss";

const ProductImageSlider = ({ images }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState();
  return (
    <>
      <div className='bigSwiperContainer'>
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          loop={true}
          spaceBetween={10}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className='bigSwiper'>
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <img src={img} alt='' />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className='smallSwiperContainer'>
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className='smallSwiper'>
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <img src={img} alt='' />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};
export default ProductImageSlider;
