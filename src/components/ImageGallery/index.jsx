import React from 'react';
import { Typography } from '@mui/material';
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import RemoveFromGalleryIcon from "../cardIcons/removeFromGalleryIcon";
import Image from '../image';

const styles = {
  frameContainer: {
    display: "flex",
    justifyContent: "left",
    alignItems: "center",
    minWidth: "80%",
    overflowX: 'auto',
    paddingTop: 20,

  },
  playlistContainer: {
    border: "1px solid #ccc",
    borderRadius: "18px",
    boxShadow: "0 5px 10px rgba(0, 0, 0, 0.1)", 
    minWidth: "100%",
  },
  cardContainer: {
    display: 'flex',
    overflowX: 'auto',
  },
  card: {
    flex: '0 0 auto',
    minWidth: 200,
    margin: '0 8px',
  },
  typeography: {
    display:"flex",
    justifyContent:"left",
  },
  titleDiv: {
    paddingTop: "20px"
  },
  image: {
    width: "150px",
  }
};

const ImageGallery = ({ galleryImages, action }) => {
  return (
    <>
      <div style={styles.titleDiv}>
        <Typography sx={styles.typeography} variant="h5" component="p">
          User image gallery
        </Typography>
      </div>
      <div style={styles.frameContainer}>
        <div style={styles.playlistContainer}>
          {galleryImages && 
            <div style={{ overflowX: 'auto' }}>
              <div style={styles.cardContainer}>
                {galleryImages.map((imagePath) => (
                  <Image key={imagePath} imagePath={imagePath} action={action}/>
                ))}
              </div>
            </div>
          }
        </div>
      </div>    
      
    </>

  );
};

export default ImageGallery;
