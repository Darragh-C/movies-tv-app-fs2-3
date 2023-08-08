import React, { useContext } from "react";
import ImageUpload from "../ImageUpload";
import { MoviesContext } from '../../contexts/moviesContext';
import ImageGallery from "../ImageGallery";


const styles = {
  image: {
    width: "100%",
  }
}

const MovieImageGallery = ({ movieId }) => {

  const context = useContext(MoviesContext);
  const imageGalleries = context.imageGalleries;
  const imageGallery = imageGalleries.find((ig) => ig.movieId === movieId);

  function handleUpload (imagePath) {
    context.addGalleryImage(movieId, imagePath);
  }

  return (
    <>
      {imageGallery && (
        <ImageGallery galleryImages={imageGallery.imagePaths}/>
      )}    
      <ImageUpload action={handleUpload}/>
    </>
  );
};

export default MovieImageGallery;
