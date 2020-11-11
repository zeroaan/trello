import React from "react";
import { useState } from "react";
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
  boardName: {},
  boardNameText: {
    color: "white",
    fontFamily: `"Jua", sans-serif`,
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "rgba(154,160,163, 0.9)",
    },
  },
  boardNameInput: {
    outline: "none",
    border: "none",
    borderRadius: "5px",
    height: "30px",
    fontSize: "18px",
  },
}));

const Board = () => {
  const classes = useStyles();

  const [boardName, setBoardName] = useState("name");
  const [text, setText] = useState("");
  const [textInput, setTextInput] = useState("invisible");

  const onClickText = () => {
    setText("invisible");
    setTextInput("");
  };
  const onBlurInput = () => {
    setText("");
    setTextInput("invisible");
  };
  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setText("");
    setTextInput("invisible");
  };
  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setBoardName(value);
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
          <form id={textInput} onSubmit={onSubmitForm}>
            <input
              className={classes.boardNameInput}
              value={boardName}
              onChange={onChangeName}
              maxLength={10}
              onBlur={onBlurInput}
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default Board;
