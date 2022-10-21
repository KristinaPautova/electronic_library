import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import MainRouts from "./MainRouts";
import Footer from "./Components/Footer/Footer";
import AuthContextProvider from "./context/AuthContext";
import CarContextFire from "./context/CarContextFire";
import { ToastContainer } from "react-toastify";
import CartContextProvider from "./context/CartContextProvider";
import ChatContextProvider from "./context/ChatContextProvider";
import FavoritesContextProvider from "./context/FavoritesContextProvider";
import MessagesContextFire from "./context/MessagesContextFire";

function App() {
  return (
    <AuthContextProvider>
      <CarContextFire>
        <MessagesContextFire>
          <FavoritesContextProvider>
            <CartContextProvider>
              <ChatContextProvider>
                <NavBar />
                <MainRouts />
                <Footer />
                <ToastContainer
                  position="top-center"
                  autoClose={3000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover={false}
                />
              </ChatContextProvider>
            </CartContextProvider>
          </FavoritesContextProvider>
        </MessagesContextFire>
      </CarContextFire>
    </AuthContextProvider>
  );
}

export default App;
