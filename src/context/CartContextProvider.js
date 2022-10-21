import React, { createContext, useReducer } from "react";
import {
  calcSumPrice,
  calcTotalPrice,
  getCountProductsCart,
} from "../helpers/cartFunctions";
export const cartContext = createContext();

let INIT_STATE = {
  cart: {},
  cartLength: getCountProductsCart(),
};

const reducer = (prevState = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_CART":
      return { ...prevState, cart: action.payload };
    case "CHANGE_CART_COUNT":
      return { ...prevState, cartLength: action.payload };
    default:
      return prevState;
  }
};

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const addProductCart = (productItem) => {
    let cart = JSON.parse(localStorage.getItem("cars"));
    if (!cart) {
      cart = {
        cars: [],
        totalPrice: 0,
      };
    }

    let newProduct = {
      item: productItem,
      count: 1,
      sumPrice: 0,
    };

    //хранятся только дубликаты
    let filterCart = cart.cars.filter((elem) => {
      return elem.item.id === productItem.id;
    });

    //Проверка на дубликаты

    if (filterCart.length > 0) {
      cart.cars = cart.cars.filter((elem) => {
        return elem.item.id !== productItem.id;
      });
    } else {
      cart.cars.push(newProduct);
    }

    newProduct.sumPrice = calcSumPrice(newProduct);
    cart.totalPrice = calcTotalPrice(cart.cars);

    localStorage.setItem("cars", JSON.stringify(cart));

    dispatch({
      type: "CHANGE_CART_COUNT",
      payload: cart.cars.length,
    });
  };

  const getCarts = () => {
    let cart = JSON.parse(localStorage.getItem("cars"));
    if (!cart) {
      cart = {
        cars: [],
        totalPrice: 0,
      };
    }

    dispatch({
      type: "GET_CART",
      payload: cart,
    });
  };

  const changeProductCount = (id, count) => {
    let cart = JSON.parse(localStorage.getItem("cars"));
    cart.cars = cart.cars.map((elem) => {
      if (elem.item.id === id) {
        elem.count = count;
        elem.sumPrice = calcSumPrice(elem);
      }
      return elem;
    });
    cart.totalPrice = calcTotalPrice(cart.cars);
    localStorage.setItem("cars", JSON.stringify(cart));
    getCarts();
  };

  const deleteCartProduct = (id) => {
    let cart = JSON.parse(localStorage.getItem("cars"));
    cart.cars = cart.cars.filter((elem) => {
      return elem.item.id !== id;
    });
    cart.totalPrice = calcTotalPrice(cart.cars);
    localStorage.setItem("cars", JSON.stringify(cart));
    dispatch({
      type: "CHANGE_CART_COUNT",
      payload: cart.cars.length,
    });
    getCarts();
  };

  // ================

  let cloud = {
    addProductCart,
    getCarts,
    cart: state.cart,
    cartLength: state.cartLength,
    changeProductCount,
    deleteCartProduct,
  };

  return <cartContext.Provider value={cloud}>{children}</cartContext.Provider>;
};

export default CartContextProvider;
