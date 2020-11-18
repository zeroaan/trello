import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "store/reducers";
import { BoardState } from "store/reducers/trello";

import Navbar from "components/Navbar";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  screen: {
    maxWidth: "98vw",
    maxHeight: "90vh",
    position: "relative",
    top: "150px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  boards: {
    marginTop: "10px",
    width: "730px",
    height: "150px",
    display: "flex",
    flexFlow: "nowrap",
    overflow: "auto",
  },
  boardLink: {
    height: "80px",
    textDecoration: "none",
    color: "black",
    fontSize: "17px",
    margin: "6px 8px",
    "&:hover": {
      color: "black",
    },
  },
  boardBox: {
    borderRadius: "3px",
    backgroundColor: "white",
    minWidth: "145px",
    maxWidth: "145px",
    minHeight: "80px",
    maxHeight: "80px",
    padding: "15px",
    transition: "all 0.3s ease",
    "&:hover": {
      backgroundColor: "rgb(231,233,237)",
    },
  },
}));

const Trello = () => {
  const classes = useStyles();

  const { boards } = useSelector<RootState, BoardState>(
    (state: RootState) => state.trello
  );

  return (
    <>
      <Navbar />

      <div className={classes.screen}>
        <div>
          <h3>My Boards</h3>
          <div className={classes.boards}>
            {boards.map((v, i) => (
              <Link key={i} to={`/board/${v.id}`} className={classes.boardLink}>
                <div className={classes.boardBox}>{v.boardName}</div>
              </Link>
            ))}
          </div>
        </div>
        <div style={{ marginTop: "30px" }}>
          <h3>Starred Boards</h3>
          <div className={classes.boards}>
            {boards.map((v, i) => {
              if (v.star === true) {
                return (
                  <Link
                    key={i}
                    to={`/board/${v.id}`}
                    className={classes.boardLink}
                  >
                    <div className={classes.boardBox}>{v.boardName}</div>
                  </Link>
                );
              } else {
                return null;
              }
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Trello;
