import React from "react";
import Typography from "@mui/material/Typography";
import HomeIcon from '@mui/icons-material/Home';

const styles = {
  container: {
    display: "flex",
    justifyContent: "left",
    alignItems: "center",
    width: "60%",
  },
};

const MediaHeaderInsert = ( { media } ) => {

  return (
    <Typography  variant="h4" component="h3">
      {media.title ? media.title : media.name}{"   "}
      <a href={media.homepage}>
        <HomeIcon color="primary"  fontSize="='large"/>
      </a>
      <br />
      <Typography variant="h6" component="h6">
        {`${media.tagline}`}
      </Typography>
    </Typography>
  );
};

export default MediaHeaderInsert;
