import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import BoardCreate from "components/BoardCreate";

import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from "@material-ui/icons/Home";
import AddIcon from "@material-ui/icons/Add";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  appbar: {
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    boxShadow: "none",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    minHeight: "48px",
  },
  flexbox: {
    display: "flex",
  },
  homeLink: {
    textDecoration: "none",
    padding: "5px",
  },
  homeiconbutton: {
    width: "30px",
    height: "30px",
    color: "white",
    "&:hover": {
      background: "none",
    },
  },
  homebutton: {
    backgroundColor: "rgba(154,160,163, 0.9)",
    height: "35px",
    textTransform: "none",
    color: "white",
    "&:hover": {
      backgroundColor: "rgba(140,147,150, 0.9)",
    },
  },
  typography: {
    fontFamily: `"Jua", sans-serif`,
    position: "relative",
    right: "20px",
    userSelect: "none",
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
  avatar: {
    backgroundColor: "rgb(223,225,230)",
    color: "black",
    width: "35px",
    height: "35px",
    cursor: "pointer",
  },
});

const Navbar = () => {
  const classes = useStyles();

  const [createBoard, setCreateBoard] = useState(false);

  const onClickNewBoard = () => {
    setCreateBoard(true);
  };

  return (
    <>
      <AppBar className={classes.appbar}>
        <Toolbar className={classes.toolbar}>
          <div className={classes.flexbox}>
            <Link to="/" className={classes.homeLink}>
              <IconButton className={classes.homeiconbutton}>
                <HomeIcon />
              </IconButton>
            </Link>
            <Link to="/" className={classes.homeLink}>
              <Button className={classes.homebutton}>Boards</Button>
            </Link>
          </div>
          <Typography className={classes.typography} variant="h6">
            Trello
          </Typography>
          <div className={classes.flexbox}>
            <IconButton
              className={classes.addiconbutton}
              color="inherit"
              onClick={onClickNewBoard}
            >
              <AddIcon />
            </IconButton>
            <Avatar className={classes.avatar}>A</Avatar>
          </div>
          {createBoard ? <BoardCreate setCreateBoard={setCreateBoard} /> : null}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
