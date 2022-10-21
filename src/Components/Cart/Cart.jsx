import React, { useContext, useEffect, useState } from "react";
import cartContextProvider, {
  cartContext,
} from "../../context/CartContextProvider";
import "./Cart.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
// import img5 from '../../image/content_giphy__2_.gif'
import { Link, useNavigate } from "react-router-dom";
import showToast from "../../helpers/ShowToast";
// import cart1 from '../../image/cart.png'
import { carContextFire } from "../../context/CarContextFire";
import DeleteForeverTwoToneIcon from "@mui/icons-material/DeleteForeverTwoTone";
import Box from "@mui/material/Box";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import { authContext } from "../../context/AuthContext";

const Cart = () => {
  const [plan, setPlan] = useState("");
  const [address, setAddress] = useState("");
  const [mainBlock, setMainBlock] = useState(false);
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [focus, setFocus] = useState("");
  let navigate = useNavigate();

  const { carsArr, getCar, editCar } = useContext(carContextFire);

  const { user } = useContext(authContext);

  const { cart, getCarts, changeProductCount, deleteCartProduct } =
    useContext(cartContext);

  useEffect(() => {
    getCar();
    // console.log(productObj)
  }, []);

  // console.log(cart)
  useEffect(() => {
    getCarts();
  }, []);

  function handleClick() {
    if (!expiry || !cvc || !name) {
      showToast("Заполните поля", "error");
      return;
    }
    carsArr.map((item) => {
      cart.cars.map((elem) => {
        if (elem.item.id === item.id) {
          let obj = {
            owner: user.email,
          };
          editCar(item.id, obj);
          deleteCartProduct(elem.item.id);
        }
      });
    });
    setCvc("");
    setName("");
    navigate("/chatSuccess");
    setMainBlock(false);
  }

  return (
    <div className="cart">
      {cart.cars ? (
        <>
          {cart.cars.length ? (
            <>
              <h1>Оформление аренды</h1>
              <div className="cart__container">
                <div className="cart__container__left">
                  <h3>Состав заказа</h3>
                  {cart.cars.map((elem) => (
                    <div key={elem.item.id} className="cart__down">
                      <img
                        src={elem.item.img[0]}
                        style={{ borderRadius: "15px" }}
                        width={100}
                        height={100}
                        alt="car"
                      />
                      <div className="cart__left">
                        <p>
                          {elem.item.model},{elem.item.yearOfIssue}
                        </p>
                        <div className="cart__input">
                          <input
                            id="inpSum"
                            min={1}
                            type="number"
                            value={elem.count}
                            onChange={(e) =>
                              changeProductCount(elem.item.id, e.target.value)
                            }
                          />
                          <span>дн.</span>
                        </div>
                        <div className="cart__sum">
                          {elem.count < 3 ? (
                            <span>{elem.item.oneDay} сом в сутки</span>
                          ) : elem.count < 6 ? (
                            <span>{elem.item.twoDay} сом в сутки</span>
                          ) : (
                            <span>{elem.item.threeDay} сом в сутки</span>
                          )}
                          <Button
                            onClick={() => deleteCartProduct(elem.item.id)}
                          >
                            <DeleteForeverTwoToneIcon />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                  <h3 style={{ marginTop: "60px" }}>Информация о поездке</h3>
                  <div className="plan">
                    <div className="plan__top">
                      <span>Адрес проживания</span>
                      <TextField
                        sx={{ width: 300 }}
                        id="outlined-basic"
                        label="Адрес"
                        variant="outlined"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                      />
                    </div>
                    <div className="plan__top">
                      <span>Планы на поездку</span>
                      <TextField
                        sx={{ width: 300 }}
                        id="outlined-multiline-static"
                        label="Опишите свои планы на поездку "
                        multiline
                        rows={4}
                        // defaultValue="Default Value"
                        value={plan}
                        onChange={(e) => setPlan(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="cart__container__right">
                  <div className="cart__right">
                    <h4>Ваш чек</h4>
                    <div className="cart__ul">
                      <div className="cart__info">
                        <p>Стоимость аренды</p>
                        <span>{cart.totalPrice} сом</span>
                      </div>
                      <div className="cart__info">
                        <p>Комиссия сервиса</p>
                        <span>1000 сом</span>
                      </div>
                      <hr />
                      <div className="cart__info">
                        <p>К оплате</p>
                        <span>{cart.totalPrice + 1000} сом</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr width="98%" />
              <Button
                onClick={() => setMainBlock(true)}
                variant="contained"
                disableElevation
              >
                Оплатить
              </Button>
            </>
          ) : (
            <div className="bgCart">
              <h1 style={{ margin: "0 auto" }}>
                В данный момент корзина пустая
              </h1>
              <img
                id="nullCart"
                alt="notFound"
                src="https://diniya.ru/images/cart.png"
              />
            </div>
          )}
        </>
      ) : (
        <h2>...Loading</h2>
      )}

      {mainBlock && (
        <div className="main-modal">
          <div className="inner-modal">
            <div className="close">
              <Button
                onClick={() => setMainBlock(false)}
                variant="contained"
                className="btn-closer"
              >
                X
              </Button>
            </div>
            <div className="cl-input">
              <Cards
                number={number}
                name={name}
                expiry={expiry}
                cvc={cvc}
                focused={focus}
              />
              <form className="cl-input__down">
                <input
                  type="tel"
                  name="number"
                  placeholder="Card Number"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                  onFocus={(e) => setFocus(e.target.name)}
                  // ref={ref}
                />
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  onFocus={(e) => setFocus(e.target.name)}
                />
                <input
                  type="text"
                  name="expiry"
                  placeholder="MM/YY"
                  value={expiry}
                  onChange={(e) => setExpiry(e.target.value)}
                  onFocus={(e) => setFocus(e.target.name)}
                />
                <input
                  type="tel"
                  name="cvc"
                  placeholder="CVC"
                  value={cvc}
                  onChange={(e) => setCvc(e.target.value)}
                  onFocus={(e) => setFocus(e.target.name)}
                />
              </form>
              <Button
                onClick={handleClick}
                variant="contained"
                disableElevation
              >
                Оплатить
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
