import React, { useContext, useEffect, useState } from "react";
import myCar4 from "../../image/myCar.svg";
import { Link, useNavigate } from "react-router-dom";
import "./MyCar.css";
import { cartContext } from "../../context/CartContextProvider";
import {admin, authContext} from "../../context/AuthContext";
import { carContextFire } from "../../context/CarContextFire";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import DeleteForeverTwoToneIcon from "@mui/icons-material/DeleteForeverTwoTone";

const MyCar = () => {
  const { carsArr, getCar, deleteCar } = useContext(carContextFire);
  const { user } = useContext(authContext);
  const [main, setMain] = useState(true);
  let navigate = useNavigate();

  function changeMain() {
    setMain(false);
    console.log(main);
    navigate("/addCar");
  }

  function clickEdit(id) {
    deleteCar(id);
    navigate("/rent");
  }

  useEffect(() => {
    getCar();
  }, []);

  return (
    <div className="bac_i">
      <h1
        style={{ display: "flex", justifyContent: "center", marginTop: "70px" }}
      >
        Админ
      </h1>
      {carsArr.length ? (
        <div className="container1">
          {carsArr.map(
            (item) =>
                user.email == admin  && (
                <div
                  key={item.id}
                  style={{
                    marginTop: "80px",
                    marginBottom: "50px",
                    minHeight: "500px",
                  }}
                  className="card"
                >
                  <Card sx={{ maxWidth: 300 }}>
                    <Link to={`/rentDetails/${item.id}`}>
                      <CardMedia
                        component="img"
                        alt="green iguana"
                        height="300px"
                        src={item.img[0]}
                      />
                    </Link>
                    <CardContent>
                      <Typography gutterBottom variant="h6" component="div">
                        {item.model},{item.yearOfIssue}
                        <Button onClick={() => clickEdit(item.id)}>
                          <DeleteForeverTwoToneIcon />
                        </Button>
                      </Typography>
                      <div className="text__person">
                        <div className="person__gold">
                          {item.owner && <span>Арендована</span>}
                        </div>
                      </div>
                      <div className="person__price">
                        <div className="person__price_left">
                          <div className="person__price_down">
                            <span>{item.oneDay} сом</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )
          )}
        </div>
      ) : (
        <h2 className="top_top_main">...Loading</h2>
      )}

      {user.email == admin  && (

              <a
                  style={{ display: "flex", justifyContent: "center" }}
                  className="check__container-link"
                  rel="nofollow"
              >
                  <button onClick={changeMain}>Добавить Книгу</button>
              </a>

      )}

    </div>
  );
};

export default MyCar;
