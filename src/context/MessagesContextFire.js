import React, { createContext, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import {
  addDoc,
  collection,
  getFirestore,
  getDocs,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import fire from "../fire";

export const messagesContextFire = createContext();

const INIT_STATE = {
  messages: [],
};

const reducer = (prevState = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_MESSAGES":
      return {
        ...prevState,
        messages: action.payload,
      };
    default:
      return prevState;
  }
};

const MessagesContextFire = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const navigate = useNavigate();
  const db = getFirestore(fire);

  const getMessages = async () => {
    try {
      let database = await getDocs(collection(db, "messages"));
      let array = database.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      dispatch({
        type: "GET_MESSAGES",
        payload: array,
      });
      console.log(array);
    } catch (e) {
      console.error(e);
    }
  };

  const addMessages = async (sms) => {
    try {
      await addDoc(collection(db, "messages"), sms);
      getMessages();
    } catch (e) {
      console.log(e);
    }
  };

  const deleteMessages = async (id) => {
    try {
      // console.log(id)

      let sms = doc(db, "messages", id);
      await deleteDoc(sms);
      getMessages();
      navigate("/realtime");
    } catch (e) {
      console.error(e);
    }
  };

  const editMessages = async (id, obj) => {
    try {
      let editProduct = doc(db, "messages", id);
      await updateDoc(editProduct, obj);
      getMessages();
      navigate("/realtime");
    } catch (e) {
      console.error(e);
    }
  };

  const cloud = {
    getMessages,
    addMessages,
    deleteMessages,
    editMessages,
    MessagesArr: state.messages,
  };

  return (
    <messagesContextFire.Provider value={cloud}>
      {children}
    </messagesContextFire.Provider>
  );
};

export default MessagesContextFire;
