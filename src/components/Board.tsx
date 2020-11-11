import React from "react";
import Navbar from "components/Navbar";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  screen: {
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgb(131,140,145)",
    display: "fixed",
  },
  div: {
    width: "98vw",
    height: "90vh",
    position: "relative",
    top: "58px",
    left: "1vw",
  },
}));

const Board = () => {
  const classes = useStyles();

  return (
    <>
      <Navbar />
      <div className={classes.screen}>
        <h2 className={classes.div}>Board</h2>
      </div>
    </>
  );
};

export default Board;
