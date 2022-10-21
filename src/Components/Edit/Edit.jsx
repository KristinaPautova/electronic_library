import React, { useContext, useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./Edit.css";
import { useNavigate, useParams } from "react-router-dom";
import { carContextFire } from "../../context/CarContextFire";

export default function Edit() {
  const { editCar, carDetails, getOneCar } = useContext(carContextFire);

  const [editModal, setEditModal] = useState(carDetails.model);
  const [editOneDay, setEditOneDay] = useState(carDetails.oneDay);
  const [editImage, setEditImage] = useState(carDetails.img[0]);
  const [editYearOfIssue, setEditYearOfIssue] = useState(
    carDetails.yearOfIssue
  );
  const [editCategory, setEditCategory] = useState(carDetails.category);

  let navigate = useNavigate();

  const { id } = useParams();
  function handleClick() {
    if (
      !editModal ||
      !editOneDay ||
      !editImage ||
      !editYearOfIssue ||
      !editCategory
    ) {
      alert("Введите все инпуты");
      return;
    }
    let product = {
      modal: editModal,
      oneDay: +editOneDay,
      img: [editImage, carDetails.img[1], carDetails.img[2]],
      yearOfIssue: editYearOfIssue,
      category: editCategory,
    };

    editCar(id, product);
    navigate("/rent");
  }

  useEffect(() => {
    getOneCar(id);
  }, [id]);

  return (
    <div className="editProduct">
      {carDetails ? (
        <>
          <TextField
            sx={{ width: 300 }}
            id="outlined-basic"
            label="Product name"
            variant="outlined"
            value={editModal}
            onChange={(e) => setEditModal(e.target.value)}
          />
          <TextField
            sx={{ width: 300 }}
            id="outlined-basic"
            label="Price"
            variant="outlined"
            type="number"
            value={editOneDay}
            onChange={(e) => setEditOneDay(e.target.value)}
          />
          <TextField
            sx={{ width: 300 }}
            id="outlined-basic"
            label="Photo"
            variant="outlined"
            value={editImage}
            onChange={(e) => setEditImage(e.target.value)}
          />
          <TextField
            sx={{ width: 300 }}
            id="outlined-basic"
            label="Description"
            variant="outlined"
            value={editYearOfIssue}
            onChange={(e) => setEditYearOfIssue(e.target.value)}
          />
          <TextField
            sx={{ width: 300 }}
            id="outlined-basic"
            label="Category"
            variant="outlined"
            value={editCategory}
            onChange={(e) => setEditCategory(e.target.value)}
          />
          <Button onClick={handleClick} variant="contained" disableElevation>
            Edit Product
          </Button>
        </>
      ) : null}
    </div>
  );
}
