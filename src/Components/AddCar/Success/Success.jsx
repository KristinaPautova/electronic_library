import React from "react";
import myCar1 from "../../../image/undraw_by_my_car_ttge.svg";
import { Link } from "react-router-dom";

const Success = () => {
  return (
    <div className="my_Car">
      <div className="my_Car__top">
        <img src={myCar1} alt="car" />
        <h2>Успех!</h2>
        <h4>
          Автомобиль добавлен. Дождитесь, когда указанная вами информация
          пройдёт проверку модераторами.
        </h4>
      </div>
      <Link to="/" className="check__container-link" rel="nofollow">
        <button>Перейти на главную</button>
      </Link>
    </div>
  );
};

export default Success;
