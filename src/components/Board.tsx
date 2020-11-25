import React from "react";
import { useState, useRef, useEffect } from "react";
import { useRouteMatch, useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { DragDropContext } from "react-beautiful-dnd";

import {
  changeBoardName,
  starBoard,
  deleteBoard,
  sortList,
} from "store/actions/trello";
import { RootState } from "store/reducers";
import { BoardState, ListType, CardType } from "store/reducers/trello";

import List from "components/List";
import Navbar from "components/Navbar";
import ListCardAdd from "components/ListCardAdd";

import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CloseIcon from "@material-ui/icons/Close";
import DeleteIcon from "@material-ui/icons/Delete";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
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
    display: "none",
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
    fontSize: "16px",
    "&:hover": {
      backgroundColor: "rgba(171,177,180, 0.9)",
    },
  },
  deleteBt: {
    position: "absolute",
    right: "20px",
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
  deleteBoardbox: {
    display: "none",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    zIndex: 1100,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  deleteBoard: {
    backgroundColor: "rgb(235,236,240)",
    width: "370px",
    height: "200px",
    margin: "auto",
    position: "relative",
    top: "230px",
  },
  deleteBoardtitle: {
    position: "relative",
    top: "25px",
    left: "43px",
  },
  deleteBoarddesc: {
    position: "relative",
    top: "50px",
    left: "83px",
    fontSize: "20px",
    color: "black",
  },
  deleteBoardBt: {
    position: "relative",
    top: "70px",
    left: "110px",
    outline: "none",
    border: "none",
    zIndex: 1200,
    borderRadius: "5px",
    backgroundColor: "rgb(250,60,84)",
    marginTop: "10px",
    color: "white",
    padding: "8px 16px",
    fontSize: "15px",
    cursor: "pointer",
  },
  closeIconDeleteBoard: {
    position: "relative",
    top: "-35px",
    left: "165px",
    cursor: "pointer",
    color: "rgb(108,120,141)",
    fontSize: "28px",
  },
  listAdd: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "290px",
    height: "100%",
    backgroundColor: "rgba(154,160,163, 0.9)",
    borderRadius: "5px",
    margin: "0 16px",
  },
});

const Board = () => {
  const classes = useStyles();

  const history = useHistory();
  const match = useRouteMatch<{ boardId: string }>();
  const boardId = Number(match.params.boardId);

  const dispatch = useDispatch();
  const { boards } = useSelector<RootState, BoardState>(
    (state: RootState) => state.trello
  );
  let lists: ListType = [];
  let firstBoardName: string = "";
  let boardStar: boolean = false;
  boards.forEach((v, i) => {
    if (v.id === boardId) {
      lists = boards[i].lists;
      firstBoardName = boards[i].boardName;
      boardStar = boards[i].star;
    }
  });

  const [boardName, setBoardName] = useState(firstBoardName);

  const bnEl = useRef<HTMLInputElement>(null);
  const wtEl = useRef<HTMLInputElement>(null);
  const stEl = useRef<HTMLButtonElement>(null);
  const deleteBoardEl = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setBoardName(firstBoardName);
  }, [firstBoardName]);

  const displayBlock = (
    ref: React.RefObject<HTMLInputElement | HTMLDivElement>
  ) => {
    if (ref.current) {
      ref.current.style.display = "block";
    }
  };
  const displayNone = (
    ref: React.RefObject<HTMLInputElement | HTMLDivElement>
  ) => {
    if (ref.current) {
      ref.current.style.display = "none";
    }
  };
  const onClickText = () => {
    displayBlock(bnEl);
    if (bnEl.current && wtEl.current) {
      bnEl.current.style.width = wtEl.current.scrollWidth - 24 + "px";
    }
  };
  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onBlurInput();
  };
  const onBlurInput = () => {
    if (boardName !== "") {
      displayNone(bnEl);
      dispatch(changeBoardName(boardName, boardId));
    }
  };
  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setBoardName(value);
    if (bnEl.current && wtEl.current) {
      bnEl.current.style.width = wtEl.current.scrollWidth - 8 + "px";
    }
  };
  const onClickStar = () => {
    dispatch(starBoard(boardId));
  };
  const onClickDeleteBoard = () => {
    displayNone(deleteBoardEl);
    dispatch(deleteBoard(boardId));
    history.push("/");
  };

  const onDragEnd = (result: any) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }
    dispatch(
      sortList(
        boardId,
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
        draggableId
      )
    );
  };

  return (
    <>
      <Navbar />
      <div className={classes.screen}>
        <div className={classes.boardName}>
          {boardStar ? (
            <button
              ref={stEl}
              style={{ color: "yellow" }}
              className={classes.starBt}
              onClick={onClickStar}
            >
              ☆
            </button>
          ) : (
            <button
              ref={stEl}
              style={{ color: "white" }}
              className={classes.starBt}
              onClick={onClickStar}
            >
              ☆
            </button>
          )}
          <Typography
            ref={wtEl}
            className={classes.boardNameText}
            variant="h6"
            onClick={onClickText}
          >
            {boardName}
          </Typography>
          <button
            className={classes.deleteBt}
            onClick={() => displayBlock(deleteBoardEl)}
          >
            <DeleteIcon style={{ fontSize: "20px", color: "white" }} />
          </button>
          <div ref={deleteBoardEl} className={classes.deleteBoardbox}>
            <Card className={classes.deleteBoard}>
              <div>
                <h3 className={classes.deleteBoardtitle}>Delete Board</h3>
                <p className={classes.deleteBoarddesc}>
                  삭제 후 되돌릴 수 없습니다.
                </p>
                <button
                  className={classes.deleteBoardBt}
                  onClick={onClickDeleteBoard}
                >
                  Delete This Board
                </button>
                <CloseIcon
                  className={classes.closeIconDeleteBoard}
                  onClick={() => displayNone(deleteBoardEl)}
                />
              </div>
            </Card>
          </div>
          <form className={classes.boardNameForm} onSubmit={onSubmitForm}>
            <input
              ref={bnEl}
              className={classes.boardNameInput}
              value={boardName}
              onChange={onChangeName}
              onBlur={onBlurInput}
              maxLength={15}
            />
          </form>
        </div>
        <DragDropContext onDragEnd={onDragEnd}>
          <div style={{ display: "flex" }}>
            {lists === undefined ? null : (
              <>
                {lists.map(
                  (
                    v: { id: string; title: string; cards: CardType },
                    i: number
                  ) => (
                    <List
                      key={i}
                      title={v.title}
                      list={v.cards}
                      index={i}
                      boardId={boardId}
                      listId={v.id}
                    />
                  )
                )}
              </>
            )}
            <div className={classes.listAdd}>
              <ListCardAdd list index={0} boardId={boardId} />
            </div>
          </div>
        </DragDropContext>
      </div>
    </>
  );
};

export default Board;
