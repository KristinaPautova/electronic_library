import React from "react";
import "./Service.scss";
import profit1 from "../../../image/Profit1.svg";
import profit2 from "../../../image/Proft2.svg";
import profit3 from "../../../image/Profit3.svg";
import profit4 from "../../../image/Profit4.svg";
import lineOne from "../../../image/Line1.svg";

const Service = () => {
  return (
    <section className="profit">
      <div className="profit__container">
        <h2>У вас есть автомобиль?</h2>
        <p>Чтобы он не простаивал — сдавайте его в аренду и зарабатывайте.</p>
        <div className="circles__container">
          <div className="circles__container-wrapper">
            <div className="circles__container-wrapper-circle">
              <img src={profit1} alt="price" />
            </div>
            <p>Вы сами указываете цену</p>
          </div>
          <img src={lineOne} alt="line" />
          <div className="circles__container-wrapper">
            <div className="circles__container-wrapper-circle">
              <img src={profit2} alt="money" />
            </div>
            <p>Мы страхуем автомобили</p>
          </div>
          <img src={lineOne} alt="line" />
          <div className="circles__container-wrapper">
            <div className="circles__container-wrapper-circle">
              <img src={profit3} alt="%" />
            </div>
            <p>Наша комиссия всего 3%</p>
          </div>
          <img src={lineOne} alt="line" />
          <div className="circles__container-wrapper">
            <div className="circles__container-wrapper-circle">
              <img src={profit4} alt="money" />
            </div>
            <p>Выплаты каждую неделю</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
