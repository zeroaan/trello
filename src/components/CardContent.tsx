import React from "react";
import { useState, useEffect, Dispatch, SetStateAction } from "react";
import { useDispatch } from "react-redux";

import { editCard, deleteCard } from "store/actions/trello";

import Paper from "@material-ui/core/Paper";
import CreateIcon from "@material-ui/icons/Create";
import CloseIcon from "@material-ui/icons/Close";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  list: {
    minHeight: "22px",
    position: "relative",
    display: "flex",
    justifyContent: "space-between",
    padding: "12px",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "rgb(244,245,247)",
    },
    "&.dragging": {
      opacity: "0.4",
    },
    "&:hover svg": {
      display: "block",
    },
  },
  editIcon: {
    color: "rgb(131,140,145)",
    display: "none",
    padding: "10px",
    position: "absolute",
    top: "4px",
    right: "4px",
    fontSize: "16px",
    borderRadius: "5px",
    "&:hover": {
      color: "black",
      backgroundColor: "rgb(235,236,240)",
    },
  },
  blackBox: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    zIndex: 1100,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  editListInput: {
    position: "absolute",
    top: "-12px",
    left: 0,
    fontSize: "16px",
    outline: "none",
    border: "none",
    borderRadius: "5px",
    width: "252px",
    height: "60px",
    padding: "12px 12px",
    marginTop: "12px",
    resize: "none",
    zIndex: 1200,
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
  closeIcon: {
    position: "absolute",
    top: "93px",
    left: "245px",
    cursor: "pointer",
    color: "black",
    fontSize: "25px",
    zIndex: 1200,
  },
  editListBt: {
    position: "absolute",
    top: "80px",
    left: "0px",
    outline: "none",
    border: "none",
    zIndex: 1200,
    borderRadius: "5px",
    backgroundColor: "rgb(90,172,68)",
    marginTop: "10px",
    color: "white",
    padding: "8px 21px",
    fontSize: "16px",
    cursor: "pointer",
  },
  deleteListBt: {
    position: "absolute",
    top: "80px",
    left: "85px",
    outline: "none",
    border: "none",
    zIndex: 1200,
    borderRadius: "5px",
    backgroundColor: "rgb(250,60,84)",
    marginTop: "10px",
    color: "white",
    padding: "8px 15px",
    fontSize: "16px",
    cursor: "pointer",
  },
});

interface Props {
  edit?: boolean;
  setCardEditBox: Dispatch<SetStateAction<boolean>>;
  list: string;
  index: number;
  listIndex: number;
  boardId: number;
}

const CardContent: React.FC<Props> = ({
  edit,
  setCardEditBox,
  list,
  index,
  listIndex,
  boardId,
}) => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const [editList, setEditList] = useState(list);

  useEffect(() => {
    setEditList(list);
  }, [list]);

  const onClickEditOpen = () => {
    setCardEditBox(true);
  };
  const onClickEditClose = () => {
    setCardEditBox(false);
  };
  const onChangeEditList = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setEditList(value);
  };
  const onClickSave = () => {
    if (editList !== "") {
      dispatch(editCard(editList, index, listIndex, boardId));
    }
    onClickEditClose();
  };
  const onClickDelete = () => {
    dispatch(deleteCard(index, listIndex, boardId));
    onClickEditClose();
  };

  const ContentCard = () => {
    return (
      <Paper className={classes.list}>
        <p style={{ maxWidth: "250px", wordBreak: "break-word" }}>{list}</p>
        <CreateIcon className={classes.editIcon} onClick={onClickEditOpen} />
      </Paper>
    );
  };
  const EditCard = () => {
    return (
      <>
        <div className={classes.blackBox} onClick={onClickEditClose}></div>
        <div style={{ height: "82px" }}></div>
        <textarea
          className={classes.editListInput}
          placeholder="Input card ..."
          value={editList}
          onChange={onChangeEditList}
          autoFocus
        />
        <CloseIcon className={classes.closeIcon} onClick={onClickEditClose} />
        <button className={classes.editListBt} onClick={onClickSave}>
          Save
        </button>
        <button className={classes.deleteListBt} onClick={onClickDelete}>
          Delete
        </button>
      </>
    );
  };

  return edit ? EditCard() : ContentCard();
};

export default CardContent;
