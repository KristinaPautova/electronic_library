import React, { createContext, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import {
  addDoc,
  collection,
  getFirestore,
  getDocs,
  doc,
  deleteDoc,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import fire from "../fire";

export const carContextFire = createContext();

const INIT_STATE = {
  cars: [],
  carDetails: null,
  pageTotalCount: 1,
};

const reducer = (prevState = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_CARS":
      return {
        ...prevState,
        cars: action.payload,
      };
    case "GET_ONE_CAR":
      return { ...prevState, carDetails: action.payload };
    default:
      return prevState;
  }
};

const CarContextFire = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const navigate = useNavigate();
  const db = getFirestore(fire);

  const getCar = async (type = "lol") => {
    try {
      let querySnapshot = {};
      if (type === "all" || type === "lol") {
        querySnapshot = await getDocs(collection(db, "cars"));
      } else if (type !== "all") {
        let q = query(collection(db, "cars"), where("category", "==", type));
        querySnapshot = await getDocs(q);
      }
      let array = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      dispatch({
        type: "GET_CARS",
        payload: array,
      });
      console.log(array);
    } catch (e) {
      console.error(e);
    }
  };

  const getOneCar = async (id) => {
    console.log(id);
    try {
      let data = await getDocs(collection(db, "cars"));
      let carDet = {};
      data.docs.forEach((doc) =>
        doc.id === id ? (carDet = doc.data()) : null
      );
      dispatch({
        type: "GET_ONE_CAR",
        payload: carDet,
      });
    } catch (e) {
      console.error(e);
    }
  };

  const addCar = async (car) => {
    try {
      await addDoc(collection(db, "cars"), car);
      getCar();
    } catch (e) {
      console.log(e);
    }
  };

  const deleteCar = async (id) => {
    try {
      // console.log(id)

      let car = doc(db, "cars", id);
      await deleteDoc(car);
      getCar();
      navigate("/rent");
    } catch (e) {
      console.error(e);
    }
  };

  const editCar = async (id, obj) => {
    try {
      let editProduct = doc(db, "cars", id);
      await updateDoc(editProduct, obj);
      getCar();
      // navigate("/rent");
    } catch (e) {
      console.error(e);
    }
  };

  const cloud = {
    getCar,
    getOneCar,
    addCar,
    deleteCar,
    editCar,
    carsArr: state.cars,
    carDetails: state.carDetails,
    pageTotalCount: state.pageTotalCount,
  };

  return (
    <carContextFire.Provider value={cloud}>{children}</carContextFire.Provider>
  );
};

export default CarContextFire;
