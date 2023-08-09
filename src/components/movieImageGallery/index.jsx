import React, { useContext } from "react";
import ImageUpload from "../ImageUpload";
import { MoviesContext } from '../../contexts/moviesContext';
import ImageGallery from "../ImageGallery";
import { Button } from "@mui/material";
import RemoveFromGalleryIcon from "../cardIcons/removeFromGalleryIcon";

const styles = {
  image: {
    width: "100%",
  },
  buttonContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 30,
  },
}

const MovieImageGallery = ({ movieId }) => {

  const context = useContext(MoviesContext);
  const movieGalleries = context.imageGalleries;
  const movieGallery = movieGalleries.find((ig) => ig.movieId === movieId);
  let galleryImages = [];
  if (movieGallery) {
    galleryImages = movieGallery.imagePaths;
  }

  const handleUpload = (imagePath) => {
    context.addGalleryImage(movieId, imagePath);
  }

  const handleAddGallery = () => {
    context.addMovieGallery(movieId);
  }

  const handleDeleteImage = (imagePath) => {
    console.log("deleting image", imagePath);
    context.removeGaleryImage(movieId, imagePath);
  }

  return (
    <>
      {movieGallery ? (
        <>
          <ImageGallery 
            galleryImages={galleryImages} 
            action={(image) => {
              return <RemoveFromGalleryIcon movieId={movieId} imagePath={image}/>
            }}/>    
          <ImageUpload action={handleUpload}/>
        </>
      ) : (
        <div style={styles.buttonContainer}>
          <Button variant="contained" aria-label="add-gallery" onClick={handleAddGallery}>
            Add image gallery
          </Button>
        </div>
        
      )}
   
      
    </>
  );
};

export default MovieImageGallery;
