import React from "react";
import "./Description.scss";
import car2 from "../../../image/car2.svg";
import car3 from "../../../image/car3.svg";
import car4 from "../../../image/car4.svg";

const Description = () => {
  return (
    <section className="main-description">
      <div className="main-description__container">
        <div className="main-description__container-block">
          <img src={car2} alt="girl and car" />
          <div className="main-description__container-block-text">
            <h2>Аренда напрямую от владельцев</h2>
            <span>
              Вы получите автомобиль от его собственника, а мы проверим
              юридическую чистоту и техническую исправность.
            </span>
          </div>
        </div>
        <div className="main-description__container-block">
          <img src={car3} alt="three cars" />
          <div className="main-description__container-block-text">
            <h2>Автомобили на любой вкус</h2>
            <span>
              Вы всегда можете подобрать автомобиль любого класса от бюджетных
              моделей до премиум-класса и спорткаров.
            </span>
          </div>
        </div>
        <div className="main-description__container-block">
          <img src={car4} alt="phone and server" />
          <div className="main-description__container-block-text">
            <h2>Гарантия честной аренды</h2>
            <span>
              Общение и оплата происходит через наш сервис, что предотвращает
              вас от обмана.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Description;
