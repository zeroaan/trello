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
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    minHeight: "50px",
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
    margin: "7px 15px",
    backgroundColor: "rgba(98,102,104, 0.5)",
    height: "35px",
    textTransform: "none",
  },
  iconbutton: {
    margin: "0px 15px",
    backgroundColor: "rgba(98,102,104, 0.5)",
    width: "35px",
    height: "35px",
    borderRadius: "5px",
  },
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <>
      <AppBar className={classes.appbar}>
        <Toolbar className={classes.toolbar}>
          <div className={classes.div}>
            <IconButton color="inherit">
              <HomeIcon />
            </IconButton>
            <Button className={classes.button} color="inherit">
              Boards
            </Button>
          </div>
          <Typography variant="h6">Trello</Typography>
          <div className={classes.div}>
            <IconButton className={classes.iconbutton} color="inherit">
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
