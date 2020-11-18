import React from "react";
import { useState, useRef, useEffect } from "react";
import { RootState } from "store/reducers";
import { BoardState } from "store/reducers/trello";
import { useRouteMatch } from "react-router";
import List from "components/List";
import Navbar from "components/Navbar";
import "app.css";

import { useDispatch, useSelector } from "react-redux";
import { changeBoardName, addList } from "../store/actions/trello";

import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CloseIcon from "@material-ui/icons/Close";

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
  starBt: {
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
  addBt: {
    margin: "0 32px 0 16px",
    flexShrink: 0,
    width: "300px",
    height: "40px",
    textTransform: "none",
    backgroundColor: "rgb(161,168,171)",
    color: "white",
    "&:hover": {
      backgroundColor: "rgba(171,177,180, 0.9)",
    },
  },
  addList: {
    flexShrink: 0,
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "rgb(235,236,240)",
    width: "300px",
    height: "115px",
    margin: "0 0 0 16px",
    display: "none",
  },
  addBtText: {},
  addListInput: {
    fontSize: "15px",
    outline: "none",
    border: "2px solid rgb(0,121,191)",
    borderRadius: "5px",
    width: "256px",
    height: "17px",
    padding: "10px 10px",
    margin: "12px 9px",
    resize: "none",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
  addListBt: {
    position: "absolute",
    top: "55px",
    left: "10px",
    outline: "none",
    border: "none",
    zIndex: 1200,
    borderRadius: "5px",
    backgroundColor: "rgb(90,172,68)",
    marginTop: "10px",
    color: "white",
    padding: "8px 16px",
    fontSize: "14px",
    cursor: "pointer",
  },
  closeIcon: {
    position: "relative",
    top: "4px",
    left: "100px",
    cursor: "pointer",
    color: "rgb(108,120,141)",
    fontSize: "25px",
  },
}));

const Board = () => {
  const dispatch = useDispatch();
  const match = useRouteMatch<{ boardId: string }>();
  const boardId = Number(match.params.boardId);

  const classes = useStyles();

  const { boards } = useSelector<RootState, BoardState>(
    (state: RootState) => state.trello
  );
  let lists: { title: string; list: string[] }[] = [];
  let firstBoardName: string = "";
  boards.forEach((v, i) => {
    if (v.id === boardId) {
      lists = boards[i].lists;
      firstBoardName = boards[i].boardName;
    }
  });

  const [boardName, setBoardName] = useState(firstBoardName);
  const [textInput, setTextInput] = useState("invisible");
  const [newList, setNewList] = useState("");

  const bnEl = useRef<HTMLInputElement>(null);
  const wtEl = useRef<HTMLInputElement>(null);
  const stEl = useRef<HTMLButtonElement>(null);
  const addListEl = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setBoardName(firstBoardName);
  }, [firstBoardName]);

  const onClickText = () => {
    setTextInput("");
    if (bnEl.current && wtEl.current) {
      bnEl.current.style.width = wtEl.current.scrollWidth - 24 + "px";
    }
  };
  const onBlurInput = () => {
    dispatch(changeBoardName(boardName, boardId));
    setTextInput("invisible");
    if (boardName === "") {
      setBoardName("Board Name");
      dispatch(changeBoardName("Board Name", boardId));
    }
  };
  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(changeBoardName(boardName, boardId));
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

  const onClickAddListBt = () => {
    if (addListEl.current) {
      addListEl.current.style.display = "block";
    }
  };
  const onChangeList = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setNewList(value);
  };
  const onClickAddList = () => {
    if (newList !== "") {
      if (addListEl.current) {
        addListEl.current.style.display = "none";
      }
      dispatch(addList(newList, boardId));
      setNewList("");
    }
  };
  const onClickClose = () => {
    if (addListEl.current) {
      addListEl.current.style.display = "none";
    }
    setNewList("");
  };

  return (
    <>
      <Navbar />
      <div className={classes.screen}>
        <div className={classes.boardName}>
          <button
            ref={stEl}
            style={{ color: "white" }}
            className={classes.starBt}
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
              maxLength={15}
            />
          </form>
        </div>
        <div style={{ display: "flex" }}>
          {lists === undefined ? null : (
            <>
              {lists.map((v: { title: string; list: string[] }, i: number) => (
                <List
                  key={i}
                  title={v.title}
                  list={v.list}
                  index={i}
                  boardId={boardId}
                />
              ))}
            </>
          )}
          <div style={{ position: "relative" }}>
            <Button
              className={classes.addBt}
              onClick={onClickAddListBt}
              disableRipple
            >
              <div style={{ position: "absolute", left: "20px" }}>
                + Add a List
              </div>
            </Button>

            <Card ref={addListEl} className={classes.addList}>
              <div className={classes.addBtText}>
                <input
                  className={classes.addListInput}
                  placeholder="Input List title ..."
                  onChange={onChangeList}
                  value={newList}
                  maxLength={15}
                />
                <button className={classes.addListBt} onClick={onClickAddList}>
                  Add List
                </button>
                <CloseIcon
                  className={classes.closeIcon}
                  onClick={onClickClose}
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default Board;
