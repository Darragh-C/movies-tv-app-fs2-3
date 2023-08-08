import React, { useContext } from "react";
import MovieIcon from '@mui/icons-material/Movie';
import ImageUpload from "../ImageUpload";
import { MoviesContext } from '../../contexts/moviesContext';


const styles = {
  image: {
    width: "100%",
  }
}

const FantasyMoviePoster = () => {

  const context = useContext(MoviesContext);
  const fantasyPoster = context.fantasyPoster;

  return (
    <>
      {fantasyPoster ? (
        <div>
          <img
            style={styles.image}
            src={`https://res.cloudinary.com/${import.meta.env.cloudName}/image/upload/${fantasyPoster}`}
            alt={fantasyPoster}
          />
        </div>
      ) : (
        <MovieIcon fontSize="large"/>
      )}    
      <ImageUpload/>
    </>
  );
};

export default FantasyMoviePoster;
