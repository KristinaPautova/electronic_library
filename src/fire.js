import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCnON3Egow1-VYJ1By9vTJIUlccxFNvkxE",
  authDomain: "carshering-car.firebaseapp.com",
  projectId: "carshering-car",
  storageBucket: "carshering-car.appspot.com",
  messagingSenderId: "686212842028",
  appId: "1:686212842028:web:d3b17c67eed6b20ea14789",
  measurementId: "G-JRK1CNH6EC",
};

const fire = firebase.initializeApp(firebaseConfig);
export default fire;
