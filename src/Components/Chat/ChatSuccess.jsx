import React, { useContext } from "react";
import myCar1 from "../../image/undraw_order_ride_xjs4 (1) 1.svg";
import { Link } from "react-router-dom";
import { authContext } from "../../context/AuthContext";

const ChatSuccess = () => {
  const { user } = useContext(authContext);

  return (
    <div>
      <div className="my_Car">
        <div className="my_Car__top">
          <img src={myCar1} alt="car" />
          <div className="cart__container_success">
            <h2>Успех!</h2>
            <span>Пользователь: {user.email}</span>
            <hr />
            <span>Квитанция с номеров: {Date.now()}</span>
          </div>
        </div>
        <Link to="/rent" className="check__container-link" rel="nofollow">
          <button>Перейти на главную</button>
        </Link>
      </div>
    </div>
  );
};

export default ChatSuccess;
