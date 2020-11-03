import styles from "../styles/Slider.module.css";
import { Swiper, SwiperSlide } from "swiper/react";

const imgSlider = [
  {
    image: "/slider1.jpg",
    title: "2010 - 2020",
    caption: "Our journey explained",
  },
  {
    image: "/slider2.jpg",
    title: "How it's made",
    caption: "Sneaker made like shoes",
  },
  {
    image: "/slider3.jpg",
    title: "Shoecare",
    caption: "Get the most out of your sneakers",
  },
  {
    image: "/slider4.jpg",
    title: "Vegan solutions",
    caption: "LT 01 Plant-based nappa",
  },
  {
    image: "/slider5.jpg",
    title: "Shoes from ocean waste",
    caption: "Shop LT 01 ECONYL",
  },
  {
    image: "/slider6.jpg",
    title: "Made from regenerated wood-pulp",
    caption: "Shop LT 01 TENCEL",
  },
];

const Slider = () => {
  return (
    <Swiper
      className={styles.container}
      grabCursor={true}
      spaceBetween={88}
      slidesPerView={3}
    >
      {imgSlider.map((item) => (
        <SwiperSlide key={item.image}>
          <div className={styles.card}>
            <img src={item.image} alt="slider" />
            <p>{item.title}</p>
            <p>{item.caption}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
