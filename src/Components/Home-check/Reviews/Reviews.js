import React from "react";
import "./Reviews.scss";
import left from "../../../image/left.svg";
import right from "../../../image/right.svg";
import men from "../../../image/review0.png";
import men2 from "../../../image/Ellipse 19.png";
import men3 from "../../../image/Ellipse 21.png";
import points from "../../../image/points.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { EffectFlip, Pagination, Navigation } from "swiper";

const Reviews = () => {
  return (
    <section className="review">
      <div className="review__container">
        <h2>Отзывы клиентов</h2>
        <div className="review__container__slide">
          <div className="review__container__slide-rect">
            <Swiper
              effect={"flip"}
              grabCursor={true}
              pagination={true}
              navigation={true}
              modules={[EffectFlip, Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="comment__men">
                  <img
                    width={53}
                    height={53}
                    style={{ borderRadius: "15px" }}
                    src={men}
                  />
                  <div className="men__top">
                    <p>Иван Иванов</p>
                    <span>Бишкек</span>
                    <div className="men__top__text">
                      Классный сервис! В путешествиях по стране часто берём
                      машину в аренду. Здесь нету ограничений по зоне
                      перемещения и поэтому есть возможность съездить в
                      интересные туристические места, которые отдалены от
                      города.
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="comment__men">
                  <img
                    width={53}
                    height={53}
                    style={{ borderRadius: "15px" }}
                    src={men2}
                  />
                  <div className="men__top">
                    <p>Павел И.</p>
                    <span>Бишкек</span>
                    <div className="men__top__text">
                      Владелец общительный, показал и рассказал все об
                      автомобиле. Договорились, что передадим ему машину в
                      другом районе города! Рекомендую! Отличный автомобиль за
                      эти деньги. Динамики для города достаточно, расход также
                      небольшой.
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="comment__men">
                  <img
                    width={53}
                    height={53}
                    style={{ borderRadius: "15px" }}
                    src={men3}
                  />
                  <div className="men__top">
                    <p>Владимир И.</p>
                    <span>Бишкек</span>
                    <div className="men__top__text">
                      Отличный автомобиль за эти деньги. Динамики для города
                      достаточно, расход также небольшой, не зря Солярис берут
                      таксисты. Владелец общительный, показал и рассказал все об
                      автомобиле.
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
