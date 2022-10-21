import React, { Fragment, useContext } from "react";
import "./Auth.scss";
import close from "../../image/close.svg";
import login from "../../image/Login.svg";
import { useNavigate } from "react-router-dom";
import { authContext } from "../../context/AuthContext";
import TextField from "@mui/material/TextField";

const Auth = ({ authBlock, setAuthBlock }) => {
  const {
    email,
    user,
    password,
    hasAccount,
    emailError,
    passwordError,
    setEmail,
    setPassword,
    handleLogout,
    handleSignUp,
    handleLogin,
    setHasAccount,
  } = useContext(authContext);

  const navigate = useNavigate();

  const signIn = () => {
    handleLogin();
    setAuthBlock(!authBlock);
    navigate("/");
  };

  const signUp = () => {
    setAuthBlock(!authBlock);
    navigate("/register");
  };

  return (
    <Fragment>
      <div className="entrance">
        <div className="entrance__container">
          <div className="entrance__container-close">
            <img onClick={() => setAuthBlock(false)} src={close} alt="close" />
          </div>
          <div className="entrance__container_wrapper">
            <img src={login} alt="men and table" />
            <h3>Авторизация</h3>
            <div className="entrance__container_wrapper_block">
              <TextField
                sx={{ width: 300 }}
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                sx={{ width: 300 }}
                required
                fullWidth
                name="password"
                type="password"
                id="password"
                label="Пароль"
                variant="outlined"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              onClick={signIn}
              className="entrance__container_wrapper-button"
            >
              Войти
            </button>
            <hr />
            <a
              onClick={signUp}
              className="entrance__container_wrapper-link is-animated"
              rel="nofollow"
            >
              Зарегистрироваться
            </a>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Auth;
