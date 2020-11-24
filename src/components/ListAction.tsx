import React from "react";
import { useState, Dispatch, SetStateAction } from "react";
import { useDispatch } from "react-redux";

import { copyList, deleteList } from "store/actions/trello";

import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  listAc: {
    zIndex: 100,
    position: "absolute",
    top: "13px",
    right: "-160px",
    width: "200px",
    height: "165px",
    border: "1px solid rgb(218,219,226)",
  },
  listAcTitle: {
    fontFamily: `"Jua", sans-serif`,
    position: "relative",
    top: "8px",
    textAlign: "center",
  },
  listAcClose: {
    position: "absolute",
    top: "12px",
    right: "9px",
    fontSize: "17px",
    cursor: "pointer",
  },
  listAcHr: {
    position: "relative",
    top: "10px",
    width: "170px",
    margin: "auto",
    border: "1px solid rgb(218,219,226)",
    backgroundColor: "rgb(218,219,226)",
  },
  listAcdivBt: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "15px",
  },
  listAcBt: {
    width: "179px",
  },
  listAcdiv: {
    margin: "20px 15px",
  },
  listAcaddListInput: {
    fontSize: "15px",
    outline: "none",
    border: "2px solid rgb(0,121,191)",
    borderRadius: "5px",
    width: "145px",
    height: "12px",
    padding: "10px 10px",
    margin: "8px 0px",
    resize: "none",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
  listAcaddListBt: {
    position: "relative",
    left: "48px",
    borderRadius: "5px",
    outline: "none",
    border: "none",
    backgroundColor: "rgb(90,172,68)",
    color: "white",
    padding: "6px 13px",
    fontSize: "15px",
    cursor: "pointer",
  },
  listAcDeleteListBt: {
    margin: "0 47px",
    borderRadius: "5px",
    outline: "none",
    border: "none",
    backgroundColor: "rgb(250,60,84)",
    color: "white",
    padding: "6px 16px",
    fontSize: "15px",
    cursor: "pointer",
  },
});

interface Props {
  setActionOpen: Dispatch<SetStateAction<boolean>>;
  index: number;
  boardId: number;
}

const ListAction: React.FC<Props> = ({ setActionOpen, index, boardId }) => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const [newList, setNewList] = useState("");
  const [copyAction, setCopyAction] = useState(false);
  const [deleteAction, setDeleteAction] = useState(false);

  const onClickListAcClose = () => {
    setActionOpen(false);
  };
  const onClickListAcAddCard = () => {
    onClickListAcClose();
  };
  const onClickListAcCopy = () => {
    setCopyAction(true);
  };
  const onClickListAcDelete = () => {
    setDeleteAction(true);
  };
  const onChangeList = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setNewList(value);
  };
  const onClickAddList = () => {
    if (newList !== "") {
      onClickListAcClose();
      dispatch(copyList(newList, index, boardId));
      setNewList("");
    }
  };
  const onClickDeleteList = () => {
    onClickListAcClose();
    dispatch(deleteList(index, boardId));
  };

  const ActionHome = () => {
    return (
      <div className={classes.listAcdivBt}>
        <Button
          className={classes.listAcBt}
          onClick={onClickListAcAddCard}
          disableRipple
        >
          Add Card
        </Button>
        <Button
          className={classes.listAcBt}
          onClick={onClickListAcCopy}
          disableRipple
        >
          Copy List
        </Button>
        <Button
          className={classes.listAcBt}
          onClick={onClickListAcDelete}
          disableRipple
        >
          Delete This List
        </Button>
      </div>
    );
  };
  const ListCopy = () => {
    return (
      <div className={classes.listAcdiv}>
        <p>Name</p>
        <input
          className={classes.listAcaddListInput}
          placeholder="Input List title ..."
          onChange={onChangeList}
          value={newList}
          maxLength={15}
          autoFocus
        />
        <button className={classes.listAcaddListBt} onClick={onClickAddList}>
          Create
        </button>
      </div>
    );
  };
  const ListDelete = () => {
    return (
      <div className={classes.listAcdiv}>
        <p style={{ margin: "35px 0 20px 0" }}>삭제 후 되돌릴 수 없습니다.</p>
        <button
          className={classes.listAcDeleteListBt}
          onClick={onClickDeleteList}
        >
          Delete
        </button>
      </div>
    );
  };

  return (
    <>
      <Paper className={classes.listAc} onMouseLeave={onClickListAcClose}>
        <Typography className={classes.listAcTitle} variant="subtitle1">
          {copyAction
            ? "Copy List"
            : deleteAction
            ? "Delete List"
            : "List Actions"}
        </Typography>
        <CloseIcon
          className={classes.listAcClose}
          onClick={onClickListAcClose}
        />
        <hr className={classes.listAcHr} />
        {copyAction ? ListCopy() : deleteAction ? ListDelete() : ActionHome()}
      </Paper>
    </>
  );
};

export default ListAction;
