import { useEffect, useRef, useContext } from 'react';
import { Button } from '@mui/material';


const styles = {
  buttonContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 30,
  },
};

const ImageUpload = ({ action }) => {

  const cloudinaryRef = useRef();
  const widgetRef = useRef();
  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget({
      cloudName: import.meta.env.VITE_CLOUD_NAME,
      uploadPreset: import.meta.env.VITE_UPLOAD_PRESET,
    }, function(error, result) {
      if (result.event === "success") {
        console.log('SUCCESS!', result);
        action(result.info.path);
      } else {
        console.log("stuff happening", result);
      }
    })
    console.log("cloudinaryRef.current", cloudinaryRef.current)
  }, [])

  return (
    <div style={styles.buttonContainer}>
      <Button variant="contained" aria-label="upload image" onClick={() => widgetRef.current.open()}>
        Upload Image
      </Button>      
    </div>

  )
}
export default ImageUpload;