import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import "./Filter.css";
import { yellow } from "@mui/material/colors";

const color = yellow[600];

function Filter({ type, setType }) {
  return (
    <div className="slider__filter">
      <FormControl className="slider">
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <FormControlLabel value="all" control={<Radio />} label="Все" />
          <FormControlLabel
            value="crossover"
            control={<Radio />}
            label="Кроссовер"
          />
          <FormControlLabel
            value="SUV"
            control={<Radio />}
            label="Внедорожник"
          />
          <FormControlLabel value="pickup" control={<Radio />} label="Пикап" />
          <FormControlLabel value="sedan" control={<Radio />} label="Седан" />
          <FormControlLabel
            value="minivan"
            control={<Radio />}
            label="Минивэн"
          />
          <FormControlLabel
            value="roadster"
            control={<Radio />}
            label="Родстер"
          />
          <FormControlLabel
            value="cabriolet"
            control={<Radio />}
            label="Кабриолет"
          />
          <FormControlLabel value="coupe" control={<Radio />} label="Купе" />
        </RadioGroup>
      </FormControl>
    </div>
  );
}

export default Filter;
