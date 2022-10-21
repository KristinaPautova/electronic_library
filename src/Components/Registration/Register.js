import React, { useContext, useState } from "react";
import "./Register.scss";
import TextField from "@mui/material/TextField";
import { authContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import showToast from "../../helpers/ShowToast";

const Register = () => {
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

  const [surnameName, setSurnameName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [photo, setPhoto] = useState("");
  const [idNumber, setIdNumber] = useState("");
  const [idDate, setIdDate] = useState("");
  const [dlNumber, setDlNumber] = useState("");
  const [dlDate, setDlDate] = useState("");

  const navigate = useNavigate();

  function handleCheck() {
    if (
      !photo ||
      !email ||
      !surnameName ||
      !password ||
      !dateOfBirth ||
      !phoneNumber
    ) {
      showToast("Заполните поля", "error");
      return;
    }
    if (passwordError) {
      alert(passwordError);
      return;
    }
    if (emailError) {
      alert(emailError);
      return;
    }
    handleSignUp();
    navigate("/");
  }

  return (
    <section className="registration">
      <div className="registration__container">
        <h1>Расскажите о себе</h1>
        <div className="form">
          <fieldset>
            <div className="lega">Информация о вас</div>
            <div className="form-block">
              <label>ФИО</label>
              <TextField
                sx={{ width: 300 }}
                required
                id="surnameName"
                label="ФИО"
                variant="outlined"
                value={surnameName}
                onChange={(e) => setSurnameName(e.target.value)}
              />
            </div>
            <div className="form-block">
              <label>*Дата рождения</label>
              <div className="form-block-date">
                <div className="icon-Vector"></div>
                <TextField
                  sx={{ width: 300 }}
                  id="outlined-basic"
                  variant="outlined"
                  type="date"
                  value={dateOfBirth}
                  onChange={(e) => setDateOfBirth(e.target.value)}
                />
              </div>
            </div>
            <div className="form-block">
              <label>Электронная почта</label>
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
            </div>
            <div className="form-block">
              <label>Телефон (+996 700 00-00-00)</label>
              <TextField
                sx={{ width: 300 }}
                required
                type="number"
                id="outlined-basic"
                label="Number"
                variant="outlined"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <div className="form-block">
              <label>Ваша фотография</label>
              <TextField
                sx={{ width: 300 }}
                required
                id="outlined-basic"
                label="Фото"
                variant="outlined"
                value={photo}
                onChange={(e) => setPhoto(e.target.value)}
              />
            </div>
          </fieldset>

          <fieldset>
            <div className="lega">Паспорт</div>
            <div className="form-block">
              <label>Серия и номер(ID)</label>
              <TextField
                sx={{ width: 300 }}
                type="number"
                id="outlined-basic"
                label="000 0000"
                variant="outlined"
                value={idNumber}
                onChange={(e) => setIdNumber(e.target.value)}
              />
            </div>
            <div className="form-block">
              <label>Дата выдачи</label>
              <div className="form-block-date">
                <div className="icon-Vector"></div>
                <TextField
                  sx={{ width: 300 }}
                  id="outlined-basic"
                  variant="outlined"
                  type="date"
                  value={idDate}
                  onChange={(e) => setIdDate(e.target.value)}
                />
              </div>
            </div>
          </fieldset>

          <fieldset>
            <div className="lega">Водительское удостоверение</div>
            <div className="form-block">
              <label>Серия и номер(DL)</label>
              <TextField
                sx={{ width: 300 }}
                type="number"
                id="outlined-basic"
                label="000 00 00"
                variant="outlined"
                value={dlNumber}
                onChange={(e) => setDlNumber(e.target.value)}
              />
            </div>
            <div className="form-block">
              <label>Дата выдачи</label>
              <div className="form-block-date">
                <div className="icon-Vector"></div>
                <TextField
                  sx={{ width: 300 }}
                  id="outlined-basic"
                  variant="outlined"
                  type="date"
                  value={dlDate}
                  onChange={(e) => setDlDate(e.target.value)}
                />
              </div>
            </div>
          </fieldset>
          <fieldset>
            <div className="lega">Пароль</div>
            <div className="form-block">
              <label>Придумайте пароль</label>
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
            <span>{passwordError}</span>
            <span>{emailError}</span>
          </fieldset>
        </div>
        <button onClick={handleCheck} className="is-disable">
          Продолжить
        </button>
      </div>
    </section>
  );
};

export default Register;
