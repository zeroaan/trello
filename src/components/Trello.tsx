import React from "react";
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
}));

const Trello = () => {
  const classes = useStyles();

  return (
    <>
      <Navbar />
      <div className={classes.screen}>
        <div>
          <h3>My Boards</h3>
          <div
            style={{
              marginTop: "10px",
              width: "730px",
              height: "140px",
              display: "flex",
              flexFlow: "nowrap",
              overflow: "auto",
            }}
          >
            <div
              style={{
                borderRadius: "3px",
                backgroundColor: "white",
                minWidth: "160px",
                height: "100px",
                margin: "6px 8px",
              }}
            ></div>
          </div>
        </div>
        <div>
          <h3 style={{ marginTop: "30px" }}>Starred Boards</h3>
          <div
            style={{
              marginTop: "10px",
              width: "730px",
              height: "140px",
              display: "flex",
              flexFlow: "nowrap",
              overflow: "auto",
            }}
          >
            <div
              style={{
                borderRadius: "3px",
                backgroundColor: "white",
                minWidth: "160px",
                height: "100px",
                margin: "6px 8px",
              }}
            ></div>
            <div
              style={{
                borderRadius: "3px",
                backgroundColor: "white",
                minWidth: "160px",
                height: "100px",
                margin: "6px 8px",
              }}
            ></div>
            <div
              style={{
                borderRadius: "3px",
                backgroundColor: "white",
                minWidth: "160px",
                height: "100px",
                margin: "6px 8px",
              }}
            ></div>
            <div
              style={{
                borderRadius: "3px",
                backgroundColor: "white",
                minWidth: "160px",
                height: "100px",
                margin: "6px 8px",
              }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Trello;
