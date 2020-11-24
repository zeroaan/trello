import React from "react";
import { useState, Dispatch, SetStateAction } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

import { addBoard } from "store/actions/trello";
import { RootState } from "store/reducers";
import { BoardState } from "store/reducers/trello";

import Card from "@material-ui/core/Card";
import CloseIcon from "@material-ui/icons/Close";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  newBoard: {
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

interface Props {
  setCreateBoard: Dispatch<SetStateAction<boolean>>;
}

const BoardCreate: React.FC<Props> = ({ setCreateBoard }) => {
  const classes = useStyles();

  const history = useHistory();

  const dispatch = useDispatch();
  const { boardId } = useSelector<RootState, BoardState>(
    (state: RootState) => state.trello
  );

  const [newBoard, setNewBoard] = useState("");

  const onChangeBoard = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setNewBoard(value);
  };
  const onClickAddBoard = () => {
    if (newBoard !== "") {
      onClickClose();
      dispatch(addBoard(newBoard));
      history.push(`/board/${boardId}`);
    }
  };
  const onClickClose = () => {
    setCreateBoard(false);
  };

  return (
    <>
      <div className={classes.newBoard}>
        <Card className={classes.addBoard}>
          <h3 className={classes.addBoardtitle}>New Board</h3>
          <input
            className={classes.addBoardInput}
            placeholder="Input Board Name ..."
            onChange={onChangeBoard}
            value={newBoard}
            maxLength={15}
          />
          <button className={classes.addBoardBt} onClick={onClickAddBoard}>
            Create a Board
          </button>
          <CloseIcon className={classes.closeIcon} onClick={onClickClose} />
        </Card>
      </div>
    </>
  );
};

export default BoardCreate;
