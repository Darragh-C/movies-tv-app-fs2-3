import { useEffect, useRef, useContext } from 'react';
import { Button } from '@mui/material';
import { MoviesContext } from '../../contexts/moviesContext';

const styles = {
  buttonContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 30,
  },
};

const ImageUpload = () => {

  const context = useContext(MoviesContext);

  const cloudinaryRef = useRef();
  const widgetRef = useRef();
  useEffect(() => {
    console.log('Cloud Name:', import.meta.env.CLOUD_NAME);
    console.log('Upload Preset:', import.meta.env.UPLOAD_PRESET);
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget({
      cloudName: import.meta.env.VITE_CLOUD_NAME,
      uploadPreset: import.meta.env.VITE_UPLOAD_PRESET,
    }, function(error, result) {
      if (result.event === "success") {
        console.log('SUCCESS!', result);
        context.addFantasyPoster(result.info.path);
      } else {
        console.log("stuff happening", result);
      }
      
    })
    console.log("cloudinaryRef.current", cloudinaryRef.current)
  }, [])

  return (
    <div style={styles.buttonContainer}>
      <Button variant="contained" aria-label="upload image" onClick={() => widgetRef.current.open()}>
        Upload
      </Button>      
    </div>

  )
}
export default ImageUpload;