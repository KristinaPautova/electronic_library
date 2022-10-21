import React, { useContext, useState } from "react";
import { InputLabel, Select, TextField, FormControl } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import "./AddCar.css";
import { authContext } from "../../context/AuthContext";
import { carContextFire } from "../../context/CarContextFire";
import { useNavigate } from "react-router-dom";
import showToast from "../../helpers/ShowToast";

const AddCar = () => {
  const { user } = useContext(authContext);
  const { addCar } = useContext(carContextFire);

  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [yearOfIssue, setYearOfIssue] = useState("");
  const [img1, setImg1] = useState("");
  const [img2, setImg2] = useState("");
  const [img3, setImg3] = useState("");
  const [carBody, setCarBody] = useState("");
  const [engine, setEngine] = useState("");
  const [volume, setVolume] = useState("");
  const [power, setPower] = useState("");
  const [driveUnit, setDriveUnit] = useState("");
  const [oneDay, setOneDay] = useState("");
  const [twoDay, setTwoDay] = useState("");
  const [threeDay, setThreeDay] = useState("");
  const [mileage, setMileage] = useState("");

  let navigate = useNavigate();

  function handleClick() {
    if (
      !brand ||
      !model ||
      !yearOfIssue ||
      !img1 ||
      !carBody ||
      !engine ||
      !volume ||
      !power ||
      !driveUnit ||
      !mileage
    ) {
      showToast("Заполните поля", "error");
      return;
    }
    let obj = {
      brand,
      userEmail: user.email,
      model,
      yearOfIssue: +yearOfIssue,
      img: [img1, img2, img3],
      category: carBody,
      engine,
      volume: +volume,
      power: +power,
      driveUnit,
      mileage: +mileage,
      oneDay: +oneDay,
      twoDay: +twoDay,
      threeDay: +threeDay,
    };
    addCar(obj);
    navigate("/success");
  }

  return (
    <div>
      <div className="addProduct">
        <h2>Информация об автомобиле</h2>
        <div className="addProduct__center">
          <div className="addProduct__left">
            <TextField
              sx={{ width: 300 }}
              id="outlined-basic"
              label="Марка"
              variant="outlined"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
            />
            <TextField
              sx={{ width: 300 }}
              id="outlined-basic"
              label="Модель"
              variant="outlined"
              value={model}
              onChange={(e) => setModel(e.target.value)}
            />
            <TextField
              sx={{ width: 300 }}
              id="outlined-basic"
              label="Год выпуска"
              variant="outlined"
              value={yearOfIssue}
              type="number"
              onChange={(e) => setYearOfIssue(e.target.value)}
            />
            <TextField
              sx={{ width: 300 }}
              id="outlined-basic"
              label="Фотография 1"
              variant="outlined"
              value={img1}
              onChange={(e) => setImg1(e.target.value)}
            />
            <TextField
              sx={{ width: 300 }}
              id="outlined-basic"
              label="Фотография 2"
              variant="outlined"
              value={img2}
              onChange={(e) => setImg2(e.target.value)}
            />
            <TextField
              sx={{ width: 300 }}
              id="outlined-basic"
              label="Фотография 3"
              variant="outlined"
              value={img3}
              onChange={(e) => setImg3(e.target.value)}
            />
          </div>
          <div className="addProduct__right">
            <TextField
              sx={{ width: 300 }}
              id="outlined-basic"
              label="Объем"
              variant="outlined"
              value={volume}
              type="number"
              onChange={(e) => setVolume(e.target.value)}
            />
            <TextField
              sx={{ width: 300 }}
              id="outlined-basic"
              label="Мощность"
              variant="outlined"
              value={power}
              type="number"
              onChange={(e) => setPower(e.target.value)}
            />
            <TextField
              sx={{ width: 300 }}
              id="outlined-basic"
              label="Пробег"
              variant="outlined"
              value={mileage}
              type="number"
              onChange={(e) => setMileage(e.target.value)}
            />
            <FormControl fullWidth sx={{ width: 300 }}>
              <InputLabel id="demo-simple-select-label">Двигатель</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={engine}
                label="Двигатель"
                onChange={(e) => setEngine(e.target.value)}
              >
                <MenuItem value={"Бензин"}>Бензин</MenuItem>
                <MenuItem value={"Гибрид"}>Гибрид</MenuItem>
                <MenuItem value={"Электрический"}>Электрический</MenuItem>
                <MenuItem value={"Дизель"}>Дизель</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth sx={{ width: 300 }}>
              <InputLabel id="demo-simple-select-label">Кузов</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={carBody}
                label="Кузов"
                onChange={(e) => setCarBody(e.target.value)}
              >
                <MenuItem value={"crossover"}>Кроссовер</MenuItem>
                <MenuItem value={"SUV"}>Внедорожник</MenuItem>
                <MenuItem value={"pickup"}>Пикап</MenuItem>
                <MenuItem value={"sedan"}>Седан</MenuItem>
                <MenuItem value={"minivan"}>Минивэн</MenuItem>
                <MenuItem value={"roadster"}>Родстер</MenuItem>
                <MenuItem value={"cabriolet"}>Кабриолет</MenuItem>
                <MenuItem value={"coupe"}>Купе</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth sx={{ width: 300 }}>
              <InputLabel id="demo-simple-select-label">Привод</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={driveUnit}
                label="Привод"
                onChange={(e) => setDriveUnit(e.target.value)}
              >
                <MenuItem value={"Передний"}>Передний</MenuItem>
                <MenuItem value={"Задний"}>Задний</MenuItem>
                <MenuItem value={"Полный"}>Полный</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>

        <InputLabel id="demo-simple-select-label">Стоимость аренды</InputLabel>
        <TextField
          sx={{ width: 300 }}
          id="outlined-basic"
          label="Обычная цена"
          variant="outlined"
          value={oneDay}
          type="number"
          onChange={(e) => setOneDay(e.target.value)}
        />
        <TextField
          sx={{ width: 300 }}
          id="outlined-basic"
          label="Цена при аренде на 3 дня"
          variant="outlined"
          value={twoDay}
          type="number"
          onChange={(e) => setTwoDay(e.target.value)}
        />
        <TextField
          sx={{ width: 300 }}
          id="outlined-basic"
          label="Цена при аренде более 5 дней"
          variant="outlined"
          value={threeDay}
          type="number"
          onChange={(e) => setThreeDay(e.target.value)}
        />
        <Button onClick={handleClick} variant="contained" disableElevation>
          Добавить автомобиль
        </Button>
      </div>
    </div>
  );
};

export default AddCar;
