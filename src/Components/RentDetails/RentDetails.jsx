import React, { useContext, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import box from "../../image/Rectangle.svg";
import "./RentDetails.css";
import "swiper/css";
import { authContext } from "../../context/AuthContext";
import { carContextFire } from "../../context/CarContextFire";
import { cartContext } from "../../context/CartContextProvider";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFlip, Pagination, Navigation } from "swiper";
import { checkProductInCart } from "../../helpers/cartFunctions";

const RentDetails = () => {
  const { carDetails, getOneCar, deleteCar } = useContext(carContextFire);
  const { addProductCart } = useContext(cartContext);
  const { user } = useContext(authContext);

  const navigate = useNavigate();
  let { id } = useParams();

  useEffect(() => {
    getOneCar(id);
  }, []);

  return (
    <div>
      {carDetails ? (
        <div className="det">
          <div className="details">
            <div className="details__left">
              <Swiper
                effect={"flip"}
                grabCursor={true}
                pagination={true}
                navigation={true}
                modules={[EffectFlip, Pagination, Navigation]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <img src={carDetails.img[0]} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={carDetails.img[1]} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={carDetails.img[2]} />
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="details__right">
              <Link to="/rent">◀Назад</Link>
              <h3>{carDetails.model}</h3>
              <hr />
              <p>Details</p>
              <div className="details__ul">
                <div className="details__info">
                  <p>Год выпуска</p>
                  <h6>{carDetails.yearOfIssue}</h6>
                </div>
                <div className="details__info">
                  <p>Кузов</p>
                  <h6>{carDetails.category}</h6>
                </div>
                <div className="details__info">
                  <p>Двигатель</p>
                  <h6>
                    {carDetails.volume}л/{carDetails.power} л.с/{" "}
                    {carDetails.engine}
                  </h6>
                </div>
                <div className="details__info">
                  <p>Привод</p>
                  <h6>{carDetails.driveUnit}</h6>
                </div>
                <div className="details__info">
                  <p>Пробег</p>
                  <h6>{carDetails.mileage}</h6>
                </div>
              </div>
              <hr />
              <div className="price">
                <div className="price__left">
                  {carDetails.owner === "false" ? (
                    <p>Доступна</p>
                  ) : carDetails.owner === user.email ? (
                    <p>Арендована вами</p>
                  ) : (
                    <p>Занята</p>
                  )}
                </div>
                <div className="person__price_left">
                  {/*<img style={{marginTop:"5px"}}  src={icon1} alt="busd"/>*/}

                  <img src={box} width="50px" />
                </div>
              </div>
              <div className="home__main_left">
                <Button
                  className={`btn ${
                    checkProductInCart(carDetails.id)
                      ? "btn-danger"
                      : "btn-yellow"
                  }`}
                  onClick={() => addProductCart(carDetails)}
                  style={{ width: "100%" }}
                  variant="contained"
                  disableElevation
                >
                  Add to Cart
                </Button>
              </div>
              <hr />
              <div className="gift">
                <div className="gift-down">
                  <div className="gift_text">
                    <p>{carDetails.oneDay} SOM/сут.</p>
                    <h6>обычная аренда</h6>
                  </div>
                  <div className="gift_text">
                    <p>{carDetails.twoDay} SOM/сут.</p>
                    <h6>при аренде на 3 дня</h6>
                  </div>
                  <div className="gift_text">
                    <p>{carDetails.threeDay} SOM/сут.</p>
                    <h6>при аренде более 5 дней</h6>
                  </div>
                </div>
              </div>
              {carDetails.userEmail === user.email && (
                <>
                  <hr />
                  <div className="right_adminBtn">
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteCar(id)}
                    >
                      Удалить
                    </button>
                    <button
                      className="btn btn-warning"
                      onClick={() => navigate(`/edit/${id}`)}
                    >
                      Редактировать
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      ) : (
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      )}
    </div>
  );
};

export default RentDetails;
