import React, { useState } from 'react';
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const styles = {
  root: {
    maxWidth: 345,
  },
  media: { height: 300 },

  formControl: {
    margin: 1,
    width: 50,
    backgroundColor: "rgb(255, 255, 255)",
  },
};

function FavRank({ items, movie, onAction }) {

  const [selectedItem, setSelectedItem] = useState("");
  

  const handleRank = (e) => {
    console.log("e.target.value:", e.target.value);
    console.log("movie.id:", movie.id);
    setSelectedItem(e.target.value);
    onAction(movie.id, e.target.value - 1);
  }

  return (
    <FormControl sx={styles.formControl}>
      <Select
        labelId={movie.id + "-label"}
        id={movie.id + "-id"}
        onChange={handleRank}
        name={"test"}
        value={selectedItem}
      >
        {items.map((item) => {
          return (
            <MenuItem key={item} value={item}>
              {item}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
}

export default FavRank;

