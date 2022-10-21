import React, { createContext, useReducer } from "react";
import axios from "axios";

const APIChat = "http://localhost:8000/chat";
// const APIChat = 'https://nft-project-binance.herokuapp.com/chat'

export const chatContext = createContext();

const INIT_STATE = {
  comments: [],
};

const reducer = (prevState = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_COMMENTS":
      return { ...prevState, comments: action.payload };
    default:
      return prevState;
  }
};

const ChatContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const addComment = async (comment) => {
    await axios.post(APIChat, comment);
    getTopics();
  };

  const getTopics = async () => {
    const { data } = await axios.get(APIChat);
    let action = {
      type: "GET_COMMENTS",
      payload: data,
    };
    dispatch(action);
  };

  const deleteProduct = async (id) => {
    await axios.delete(`${APIChat}/${id}`);
    getTopics();
  };

  const editProduct = async (id, obj) => {
    await axios.patch(`${APIChat}/${id}`, obj);
    getTopics();
  };

  let cloud = {
    editProduct,
    deleteProduct,
    addComment,
    getTopics,
    commentsArr: state.comments,
  };

  return <chatContext.Provider value={cloud}>{children}</chatContext.Provider>;
};

export default ChatContextProvider;
