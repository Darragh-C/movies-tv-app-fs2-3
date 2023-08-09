import React from "react";

const styles = {
  image: {
    width: "150px",
  },

}

export default function Image ({imagePath, action}) {
  return (
    <div key={`div-${imagePath}`}>
      <img
        key={`img-${imagePath}`}
        style={styles.image}
        src={`https://res.cloudinary.com/${import.meta.env.VITE_CLOUD_NAME}/image/upload/${imagePath}`}
        alt={imagePath}
      />
      {action && action(imagePath)}
    </div>
  )
}
