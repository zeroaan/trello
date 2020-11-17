import React from "react";

import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from "@material-ui/icons/Home";
import AddIcon from "@material-ui/icons/Add";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  appbar: {
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    boxShadow: "none",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    minHeight: "48px",
  },
  avatar: {
    backgroundColor: "rgb(223,225,230)",
    color: "black",
    width: "35px",
    height: "35px",
    cursor: "pointer",
  },
  div: {
    display: "flex",
  },
  button: {
    margin: "6px 15px",
    backgroundColor: "rgba(154,160,163, 0.9)",
    height: "35px",
    textTransform: "none",
    "&:hover": {
      backgroundColor: "rgba(140,147,150, 0.9)",
    },
  },
  homeiconbutton: {
    marginTop: "8px",
    width: "30px",
    height: "30px",
    "&:hover": {
      background: "none",
    },
  },
  addiconbutton: {
    margin: "0px 15px",
    backgroundColor: "rgba(154,160,163, 0.9)",
    width: "35px",
    height: "35px",
    borderRadius: "5px",
    "&:hover": {
      backgroundColor: "rgba(140,147,150, 0.9)",
    },
  },
  typography: {
    fontFamily: `"Jua", sans-serif`,
    position: "relative",
    right: "20px",
  },
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <>
      <AppBar className={classes.appbar}>
        <Toolbar className={classes.toolbar}>
          <div className={classes.div}>
            <IconButton className={classes.homeiconbutton} color="inherit">
              <HomeIcon />
            </IconButton>
            <Button className={classes.button} color="inherit">
              Boards
            </Button>
          </div>
          <Typography className={classes.typography} variant="h6">
            Trello
          </Typography>
          <div className={classes.div}>
            <IconButton className={classes.addiconbutton} color="inherit">
              <AddIcon />
            </IconButton>
            <Avatar className={classes.avatar}>A</Avatar>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
