import React from "react";
import { useState, useRef } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { addBoard } from "store/actions/trello";
import { RootState } from "store/reducers";
import { BoardState } from "store/reducers/trello";

import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Card from "@material-ui/core/Card";
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from "@material-ui/icons/Home";
import AddIcon from "@material-ui/icons/Add";
import CloseIcon from "@material-ui/icons/Close";
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
    userSelect: "none",
  },
  homeLink: {
    textDecoration: "none",
    color: "white",
  },
  newBoard: {
    display: "none",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    zIndex: 1100,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  addBoard: {
    backgroundColor: "rgb(235,236,240)",
    width: "370px",
    height: "200px",
    margin: "auto",
    position: "relative",
    top: "230px",
  },
  addBoardtitle: {
    position: "relative",
    top: "25px",
    left: "43px",
  },
  addBoardInput: {
    position: "relative",
    top: "50px",
    left: "40px",
    fontSize: "15px",
    outline: "none",
    border: "2px solid rgb(0,121,191)",
    borderRadius: "5px",
    width: "256px",
    height: "17px",
    padding: "10px 10px",
    resize: "none",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
  addBoardBt: {
    position: "relative",
    top: "60px",
    left: "115px",
    outline: "none",
    border: "none",
    zIndex: 1200,
    borderRadius: "5px",
    backgroundColor: "rgb(90,172,68)",
    marginTop: "10px",
    color: "white",
    padding: "8px 16px",
    fontSize: "15px",
    cursor: "pointer",
  },
  closeIcon: {
    position: "relative",
    top: "-50px",
    left: "180px",
    cursor: "pointer",
    color: "rgb(108,120,141)",
    fontSize: "28px",
  },
});

const Navbar = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const classes = useStyles();

  const { newBoardId } = useSelector<RootState, BoardState>(
    (state: RootState) => state.trello
  );

  const [newBoard, setNewBoard] = useState("");
  const newBoardEl = useRef<HTMLDivElement>(null);

  const onChangeBoard = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setNewBoard(value);
  };
  const onClickNewBoard = () => {
    if (newBoardEl.current) {
      newBoardEl.current.style.display = "block";
    }
  };
  const onClickAddBoard = () => {
    if (newBoard !== "") {
      onClickClose();
      dispatch(addBoard(newBoard));
      history.push(`/board/${newBoardId + 1}`);
    }
  };
  const onClickClose = () => {
    if (newBoardEl.current) {
      newBoardEl.current.style.display = "none";
    }
    setNewBoard("");
  };

  return (
    <>
      <AppBar className={classes.appbar}>
        <Toolbar className={classes.toolbar}>
          <div className={classes.div}>
            <Link to="/" className={classes.homeLink}>
              <IconButton className={classes.homeiconbutton} color="inherit">
                <HomeIcon />
              </IconButton>
            </Link>
            <Link to="/" className={classes.homeLink}>
              <Button className={classes.button} color="inherit">
                Boards
              </Button>
            </Link>
          </div>
          <Typography className={classes.typography} variant="h6">
            Trello
          </Typography>
          <div className={classes.div}>
            <IconButton className={classes.addiconbutton} color="inherit">
              <AddIcon onClick={onClickNewBoard} />
            </IconButton>
            <Avatar className={classes.avatar}>A</Avatar>
          </div>
          <div ref={newBoardEl} className={classes.newBoard}>
            <Card className={classes.addBoard}>
              <div>
                <h3 className={classes.addBoardtitle}>New Board</h3>
                <input
                  className={classes.addBoardInput}
                  placeholder="Input Board Name ..."
                  onChange={onChangeBoard}
                  value={newBoard}
                  maxLength={15}
                />
                <button
                  className={classes.addBoardBt}
                  onClick={onClickAddBoard}
                >
                  Create a Board
                </button>
                <CloseIcon
                  className={classes.closeIcon}
                  onClick={onClickClose}
                />
              </div>
            </Card>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
