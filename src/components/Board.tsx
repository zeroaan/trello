import React from "react";
import { useState, useRef } from "react";
import "app.css";

import Typography from "@material-ui/core/Typography";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  screen: {
    maxWidth: "98vw",
    maxHeight: "90vh",
    position: "relative",
    top: "58px",
    left: "1vw",
  },
  boardName: {
    display: "flex",
  },
  boardNameText: {
    padding: "2px 20px",
    flex: "0 1 auto",
    color: "white",
    borderRadius: "5px",
    fontFamily: `"Jua", sans-serif`,
    cursor: "pointer",
    fontSize: "18px",
    "&:hover": {
      backgroundColor: "rgba(154,160,163, 0.9)",
    },
  },
  boardNameForm: {},
  boardNameInput: {
    padding: "0 20px",
    outline: "none",
    border: "none",
    borderRadius: "5px",
    height: "34px",
    fontSize: "18px",
  },
  boardNameWidth: {
    fontSize: "18px",
    color: "rgba(0,0,0,0)",
    position: "absolute",
    top: 0,
    left: 0,
    userSelect: "none",
    zIndex: -1,
  },
}));

const Board = () => {
  const classes = useStyles();

  const [boardName, setBoardName] = useState("name");
  const [text, setText] = useState("");
  const [textInput, setTextInput] = useState("invisible");

  const bnEl = useRef<HTMLInputElement>(null);
  const wtEl = useRef<HTMLInputElement>(null);

  const onClickText = () => {
    setText("invisible");
    setTextInput("");
    if (bnEl.current && wtEl.current) {
      bnEl.current.style.width = wtEl.current.scrollWidth + 4 + "px";
    }
  };
  const onBlurInput = () => {
    setText("");
    setTextInput("invisible");
    if (boardName === "") {
      setBoardName("My Board");
    }
  };
  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setText("");
    setTextInput("invisible");
  };
  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setBoardName(value);

    if (bnEl.current && wtEl.current) {
      bnEl.current.style.width = wtEl.current.scrollWidth + 24 + "px";
    }
  };

  return (
    <>
      <div className={classes.screen}>
        <div className={classes.boardName}>
          <Typography
            id={text}
            className={classes.boardNameText}
            variant="h6"
            onClick={onClickText}
          >
            {boardName}
          </Typography>
          <form
            className={classes.boardNameForm}
            id={textInput}
            onSubmit={onSubmitForm}
          >
            <input
              ref={bnEl}
              className={classes.boardNameInput}
              value={boardName}
              onChange={onChangeName}
              required
              onBlur={onBlurInput}
            />
          </form>
          <span ref={wtEl} className={classes.boardNameWidth}>
            {boardName}
          </span>
        </div>
      </div>
    </>
  );
};

export default Board;
