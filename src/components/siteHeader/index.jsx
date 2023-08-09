import React, { useState, useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { AuthContext } from "../../contexts/authContext";
import LogoutIcon from '@mui/icons-material/Logout';
import IconButton from "@mui/material/IconButton";

const styles = {
  title: {
    flexGrow: 1,
  },
};

const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

const SiteHeader = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  const authContext = useContext(AuthContext);

  const menuOptions = [
    { label: "Movies", path: "/" },
    { label: "Upcoming movies", path: "/movies/upcoming" },
    { label: "TV", path: "/tvshows" },
    { label: "Favorite movies", path: "/movies/favourites" },
    { label: "Movie playlists", path: "/movies/playlists" },
    { label: "Favorite movie cast", path: "/cast/favourites" },
    { label: "Favorite TV shows", path: "/tvshows/favourites" },
    { label: "Fantasy movie", path: "/fantasymovie" },
    { label: "Log in", path: "/login" },
  ];

  const handleMenuSelect = (pageURL) => {
    navigate(pageURL);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLogout = () => {
    authContext.signout();
  }

  return (
    <>
      <AppBar position="fixed" elevation={0} color="primary">
        <Toolbar>
          <Typography variant="h4" sx={styles.title}>
            TMDB Client
          </Typography>
          <Typography variant="h6" sx={styles.title}>
            All you ever wanted to know about Movies and TV!
          </Typography>
      
              <IconButton
                aria-label="menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
                size="large"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={open}
                onClose={() => setAnchorEl(null)}
              >
                {menuOptions.map((opt) => (
                  <MenuItem
                    key={opt.label}
                    onClick={() => handleMenuSelect(opt.path)}
                  >
                    {opt.label}
                  </MenuItem>
                ))}
              </Menu>
              <IconButton
                key={"log-out-btn"}
                color="inherit"
                onClick={(handleLogout)}
              >
                <LogoutIcon/>
              </IconButton>
            

        </Toolbar>
      </AppBar>
      <Offset />
    </>
  );
};

export default SiteHeader;
