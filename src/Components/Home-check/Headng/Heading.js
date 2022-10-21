import car1 from "../../../image/car1.svg";
import car1Mobile from "../../../image/car1-mobile.svg";
import { Link } from "react-router-dom";
import "./Heading.scss";

const Heading = () => {
  return (
    <section className="heading">
      <div className="heading__container">
        <div className="heading__container__check">
          <h1>Каршеринг в любой точке Кыргызстана</h1>
          <p>Будьте всегда за рулём во время путешествий и командировок.</p>
          <Link
            to="/register"
            className="heading__container__check-link"
            rel="nofollow"
          >
            <button>Зарегистрироваться</button>
          </Link>
          <img src={car1} alt="Woman next to the car" />
          <img
            className="is-mobile"
            src={car1Mobile}
            alt="Woman next to the car"
          />
        </div>
      </div>
    </section>
  );
};

export default Heading;
