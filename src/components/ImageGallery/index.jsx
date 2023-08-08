import React from 'react';
import { Typography } from '@mui/material';

const styles = {
  frameContainer: {
    display: "flex",
    justifyContent: "left",
    alignItems: "center",
    minWidth: "80%",
    overflowX: 'auto',
    paddingTop: 30,
    paddingLeft: 40,
  },
  playlistContainer: {
    border: "1px solid #ccc",
    borderRadius: "18px",
    boxShadow: "0 5px 10px rgba(0, 0, 0, 0.1)", 
    padding: "30px",
    minWidth: "80%",
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
    paddingBottom: "20px"
  },
  image: {
    width: "100%",
  }
};

const ImageGallery = ({ galleryImages }) => {
  return (
    <div style={styles.frameContainer}>
      <div style={styles.playlistContainer}>
        <div style={styles.titleDiv}>
          <Typography sx={styles.typeography} variant="h3" component="p">
            User image gallery
          </Typography>
        </div>
        {galleryImages && 
          <div style={{ overflowX: 'auto' }}>
            <div style={styles.cardContainer}>
              {galleryImages.map((imagePath) => (
                <div>
                  <img
                    style={styles.image}
                    src={`https://res.cloudinary.com/${import.meta.env.VITE_CLOUD_NAME}/image/upload/${imagePath}`}
                    alt={imagePath}
                  />
                </div>
              ))}
            </div>
          </div>
        }
      </div>
    </div>
  );
};

export default ImageGallery;
