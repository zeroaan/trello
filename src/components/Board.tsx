import React from "react";
import { useState, useRef } from "react";
import List from "components/List";
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
    marginBottom: "12px",
  },
  boardNameText: {
    position: "absolute",
    top: 0,
    left: "60px",
    padding: "4px 12px 2px 12px",
    flex: "0 1 auto",
    color: "white",
    borderRadius: "5px",
    fontFamily: `"Jua", sans-serif`,
    cursor: "pointer",
    fontSize: "18px",
    whiteSpace: "pre",
    "&:hover": {
      backgroundColor: "rgba(154,160,163, 0.9)",
    },
  },
  boardNameForm: {
    position: "absolute",
    top: 0,
    left: "60px",
  },
  boardNameInput: {
    padding: "0 12px",
    outline: "none",
    border: "none",
    borderRadius: "5px",
    height: "34px",
    fontSize: "18px",
    whiteSpace: "pre",
  },
  button: {
    margin: "0 16px",
    backgroundColor: "rgba(154,160,163, 0.9)",
    width: "35px",
    height: "35px",
    textTransform: "none",
    outline: "none",
    border: "none",
    borderRadius: "5px",
    fontWeight: "bold",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "rgba(171,177,180, 0.9)",
    },
  },
}));

const Board = () => {
  const classes = useStyles();

  const [boardName, setBoardName] = useState("name");
  const [textInput, setTextInput] = useState("invisible");
  const lists = useState([
    { title: "To do", list: ["todo", "testing", "post", "hello"] },
    { title: "Doing", list: ["wowwowo", "doing"] },
    { title: "Complete", list: ["pratice", "what", "comp"] },
  ])[0];

  const bnEl = useRef<HTMLInputElement>(null);
  const wtEl = useRef<HTMLInputElement>(null);
  const stEl = useRef<HTMLButtonElement>(null);

  const onClickText = () => {
    setTextInput("");
    if (bnEl.current && wtEl.current) {
      bnEl.current.style.width = wtEl.current.scrollWidth - 24 + "px";
    }
  };
  const onBlurInput = () => {
    setTextInput("invisible");
    if (boardName === "") {
      setBoardName("My Board");
    }
  };
  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTextInput("invisible");
  };
  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setBoardName(value);

    if (bnEl.current && wtEl.current) {
      bnEl.current.style.width = wtEl.current.scrollWidth - 8 + "px";
    }
  };
  const onClickStar = () => {
    if (stEl.current) {
      if (stEl.current.style.color === "white") {
        stEl.current.style.color = "yellow";
      } else if (stEl.current.style.color === "yellow") {
        stEl.current.style.color = "white";
      }
    }
  };

  return (
    <>
      <div className={classes.screen}>
        <div className={classes.boardName}>
          <button
            ref={stEl}
            style={{ color: "white" }}
            className={classes.button}
            onClick={onClickStar}
          >
            ☆
          </button>
          <Typography
            ref={wtEl}
            className={classes.boardNameText}
            variant="h6"
            onClick={onClickText}
          >
            {boardName}
          </Typography>
          <form className={classes.boardNameForm} onSubmit={onSubmitForm}>
            <input
              ref={bnEl}
              id={textInput}
              className={classes.boardNameInput}
              value={boardName}
              onChange={onChangeName}
              required
              onBlur={onBlurInput}
            />
          </form>
        </div>
        <div style={{ display: "flex" }}>
          {lists.map((v, i) => (
            <List key={i} title={v.title} list={v.list} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Board;
