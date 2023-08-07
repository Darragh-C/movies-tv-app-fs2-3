import React, { useState } from "react";
import { Box, Grid } from "@mui/material"; 
import { GridContextProvider, GridDropZone, GridItem, swap} from "react-grid-dnd"
import CardItem from "../components/cardItem";
import testMovies from "../dataStore/testMovies.json";

const DragAndDropPage = (props) => {

  const [items, setItems] = useState([...testMovies]);

  function onChange(sourceId, sourceIndex, targetIndex) {
    const nextState = swap(items, sourceIndex, targetIndex);
    setItems(nextState);
  }
  
  const styles = {
    frame: {
      maxWidth: "100%",
      margin: "20px",
      paddingTop: 5
    },
    gridItem: {
      backgroundColor: "white",
      border: "2px solid white",
      boxShadow: "0 4px 8px 0 black",
      width: "100%",
      cursor: "-webkit-grab",
    },
    container: {
      backgroundColor: "white",
    }
  };

  return (
    <Box sx={styles.frame}> 
      <GridContextProvider onChange={onChange}>
        <GridDropZone
          id="items"
          boxesPerRow={3}
          rowHeight={750}
          style={{ height: 750*Math.ceil(items.length / 3)}}
        >
          {items.map((item) => (
            <GridItem key={item.id} sx={styles.gridItem}>
              <CardItem key={item.id} item={item} />
            </GridItem>
          ))}
        </GridDropZone>
      </GridContextProvider>
    </Box>
  );
};

export default DragAndDropPage;
