import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home-check/Home/Home";
import Questions from "./Components/Questions/Questions";
import Register from "./Components/Registration/Register";
import RentList from "./Components/RentList/RentList";
import MyCar from "./Components/MyCar/MyCar";
import AddCar from "./Components/AddCar/AddCar";
import Success from "./Components/AddCar/Success/Success";
import Cart from "./Components/Cart/Cart";
import Chat from "./Components/Chat/Chat";
import Favorites from "./Components/Favorites/Favorites";
import RealtimeChat from "./Components/RealtimaChat/RealtimaChat";
import ChatSuccess from "./Components/Chat/ChatSuccess";
import Rented from "./Components/Rented/Rented";
import RentDetails from "./Components/RentDetails/RentDetails";
import Edit from "./Components/Edit/Edit";

const MainRouts = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/questions" element={<Questions />} />
      <Route path="/register" element={<Register />} />
      <Route path="/rent" element={<RentList />} />
      <Route path="/myCar" element={<MyCar />} />
      <Route path="/addCar" element={<AddCar />} />
      <Route path="/success" element={<Success />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/favorite" element={<Favorites />} />
      <Route path="/realtime" element={<RealtimeChat />} />
      <Route path="/chatSuccess" element={<ChatSuccess />} />
      <Route path="/rented" element={<Rented />} />
      <Route path="/rentDetails/:id" element={<RentDetails />} />
      <Route path="/edit/:id" element={<Edit />} />
    </Routes>
  );
};

export default MainRouts;
