import React, { useContext } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import Favorite from "@mui/icons-material/Favorite";
import NoCrashIcon from "@mui/icons-material/NoCrash";
import { checkProductInCart } from "../../helpers/cartFunctions";
import { cartContext } from "../../context/CartContextProvider";
import { Checkbox } from "@mui/material";
import { FavoriteBorder } from "@mui/icons-material";
import { favoritesContext } from "../../context/FavoritesContextProvider";
import { Link } from "react-router-dom";

export default function RentCard({ cars }) {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const { addProductCart } = useContext(cartContext);
  const { addProductFavorites } = useContext(favoritesContext);
  return (
    <ImageListItem sx={{ width: 280, height: 270 }}>
      <Link to={`/rentDetails/${cars.id} `}>
        <img
          style={{ borderRadius: "15px", height: "300px", width: "280px" }}
          src={`${cars.img[0]}?w=248&fit=crop&auto=format`}
          srcSet={`${cars.img[0]}?w=248&fit=crop&auto=format&dpr=2 2x`}
          alt={cars.model}
          loading="lazy"
        />
      </Link>
      <ImageListItemBar
        style={{ borderRadius: "15px" }}
        title={`${cars.model},${cars.yearOfIssue}`}
        subtitle={`от ${cars.oneDay}сом/сутки `}
        actionIcon={
          <>
            <IconButton
              // sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
              aria-label={`info about ${cars.model}`}
              onClick={() => addProductCart(cars)}
              size="small"
              color={checkProductInCart(cars.id) ? "success" : "primary"}
            >
              <NoCrashIcon />
            </IconButton>
            <Checkbox
              onClick={() => addProductFavorites(cars)}
              {...label}
              icon={<Favorite style={{ color: "#ab5e71" }} />}
              checkedIcon={<FavoriteBorder style={{ color: "#ab5e71" }} />}
            />
          </>
        }
      />
    </ImageListItem>
  );
}
