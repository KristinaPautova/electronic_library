import React from "react";
import "./Check.scss";
import car5 from "../../../image/car5.svg";
import { Link } from "react-router-dom";

const Check = () => {
  return (
    <section className="check">
      <div className="check__container">
        <img src={car5} />
        <h2>Попробуйте аренду на себе</h2>
        <Link to="/register" className="check__container-link" rel="nofollow">
          <button>Зарегистрироваться</button>
        </Link>
      </div>
    </section>
  );
};

export default Check;
