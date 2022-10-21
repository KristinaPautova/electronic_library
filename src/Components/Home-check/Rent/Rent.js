import React from "react";
import "./Rent.scss";
import lineTwo from "../../../image/Line2.svg";

const Rent = () => (
  <section className="rent-rule">
    <div className="rent-rule__container">
      <h2>Как арендовать автомобиль</h2>
      <div className="circles__container">
        <div className="circles__container-wrapper">
          <div className="circles__container-wrapper-circle">
            <div className="number">1</div>
          </div>
          <p>Выберите автомобиль</p>
        </div>
        <img src={lineTwo} alt="line" />
        <div className="circles__container-wrapper">
          <div className="circles__container-wrapper-circle">
            <div className="number">2</div>
          </div>
          <p>Забронируйте дату и время</p>
        </div>
        <img src={lineTwo} alt="line" />
        <div className="circles__container-wrapper">
          <div className="circles__container-wrapper-circle">
            <div className="number">3</div>
          </div>
          <p>Получите автомобиль</p>
        </div>
      </div>
    </div>
  </section>
);

export default Rent;
