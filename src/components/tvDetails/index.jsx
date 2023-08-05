import React, { useState } from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MonetizationIcon from "@mui/icons-material/MonetizationOn";
import StarRate from "@mui/icons-material/StarRate";
import Typography from "@mui/material/Typography";

import NavigationIcon from "@mui/icons-material/Navigation";
import Fab from "@mui/material/Fab";
import Drawer from "@mui/material/Drawer";
//import showReviews from '../showReviews'
import SeasonList from "../seasonList"

const styles = {
  chipSet: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
  },
  chipLabel: {
    margin: 0.5,
  },
  fab: { 
    position: "fixed",
    top: 50,
    right: 2,
  },
};

const TvDetails = ( {show}) => {
  const [drawerOpen, setDrawerOpen] = useState(false); 
  return (
    <>
      <Typography variant="h5" component="h3">
        Overview
      </Typography>

      <Typography variant="h6" component="p">
        {show.overview}
      </Typography>

      {show.genres && show.genres.every((g) => g.name) && (
        <Paper component="ul" sx={styles.chipSet}>
          <li>
            <Chip label="Genres" sx={styles.chipLabel} color="primary" />
          </li>
          {show.genres.map((g) => (
            <li key={g.name}>
              <Chip label={g.name} />
            </li>
          ))}
        </Paper>
      )}
      <Paper component="ul" sx={styles.chipSet}>
        {show.runtime && (
          <Chip icon={<AccessTimeIcon />} label={`${show.runtime} min.`} />
        )}
        {show.revenue && (
          <Chip
            icon={<MonetizationIcon />}
            label={`${show.revenue.toLocaleString()}`}
          />
        )}
        <Chip
          icon={<StarRate />}
          label={`${show.vote_average} (${show.vote_count}`}
        />
     
        <Chip label={show.first_air_date} />
        
        </Paper>
        <Paper component="ul" sx={styles.chipSet}>
          <li>
            <Chip label="Seasons" sx={styles.chipLabel} color="primary" />
          </li>
          <li>
            <Chip label={show.number_of_seasons} />
          </li>
        </Paper>
        <Paper component="ul" sx={styles.chipSet}>
          <li>
            <Chip label="Language" sx={styles.chipLabel} color="primary" />
          </li>
          <li>
            <Chip label={show.original_language} />
          </li>
        </Paper>

      {show.networks && show.networks.every((n) => n.name) && (
        <Paper component="ul" sx={styles.chipSet}>
          <li>
            <Chip label="Where to watch" sx={styles.chipLabel} color="primary" />
          </li>
          {show.networks.map((n) => (
            <li key={n.name}>
              <Chip label={n.name} />
            </li>
          ))}
        </Paper>
      )}

      <SeasonList seasons={show.seasons} show={show.id}/>

      <Fab    
        color="secondary"
        variant="extended"
        onClick={() =>setDrawerOpen(true)}
        sx={styles.fab}
      >
        <NavigationIcon />
        Reviews
      </Fab>
      <Drawer anchor="top" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <showReviews show={show} />
      </Drawer>
    </>
  );
};
export default  TvDetails ;
