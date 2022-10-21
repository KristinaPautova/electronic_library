import React from "react";
import { useContext, useEffect } from "react";
import { carContextFire } from "../../context/CarContextFire";
import { authContext } from "../../context/AuthContext";
import Card from "@mui/material/Card";
import { Link, useNavigate } from "react-router-dom";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import DeleteForeverTwoToneIcon from "@mui/icons-material/DeleteForeverTwoTone";

const Rented = () => {
  const { carsArr, getCar, editCar } = useContext(carContextFire);
  const { user } = useContext(authContext);
  let navigate = useNavigate();

  function clickEdit(id) {
    let obj = {
      owner: "",
    };
    editCar(id, obj);
    navigate("/rent");
  }

  useEffect(() => {
    getCar();
  }, []);

  return (
    <div>
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "20px",
          marginTop: "80px",
        }}
      >
        История заказов
      </h1>
      {carsArr.map(
        (item) =>
          item.owner === user.email && (
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
                    height="auto"
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
                      <span>Арендовано: {user.email}</span>
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
  );
};

export default Rented;
