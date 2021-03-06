import React from "react";
import { useEffect, useState, useRef } from "react";

import { useDispatch } from "react-redux";
import { editCard, deleteCard } from "../store/actions/trello";

import Paper from "@material-ui/core/Paper";
import CreateIcon from "@material-ui/icons/Create";
import CloseIcon from "@material-ui/icons/Close";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  list: {
    minHeight: "20px",
    position: "relative",
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "8px",
    padding: "12px",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "rgb(244,245,247)",
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
  editList: {
    width: "235px",
    minHeight: "20px",
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "8px",
    padding: "12px",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "rgb(244,245,247)",
    },
  },
  editListform: {
    display: "none",
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
  closeIcon: {
    position: "absolute",
    top: "93px",
    left: "245px",
    cursor: "pointer",
    color: "black",
    fontSize: "25px",
    zIndex: 1200,
  },
}));

interface Props {
  list: string;
  index: number;
  listIndex: number;
}

const ListCard: React.FC<Props> = ({ list, index, listIndex }) => {
  const dispatch = useDispatch();

  const classes = useStyles();

  const [editList, setEditList] = useState(list);
  const editListEl = useRef<HTMLDivElement>(null);
  const editBlack = useRef<HTMLDivElement>(null);
  const editEl = useRef<SVGSVGElement>(null);
  const paperEl = useRef<HTMLDivElement>(null);
  const textareaEl = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    setEditList(list);
  }, [list]);

  const onMouseOver = () => {
    if (editEl.current) {
      editEl.current.style.display = "block";
    }
  };
  const onMouseOut = () => {
    if (editEl.current) {
      editEl.current.style.display = "none";
    }
  };
  const onClickEditList = () => {
    if (editListEl.current) {
      editListEl.current.style.display = "block";
    }
    if (editBlack.current) {
      editBlack.current.style.display = "block";
    }
    if (paperEl.current && textareaEl.current) {
      textareaEl.current.style.width = `${paperEl.current.scrollWidth - 24}px`;
    }
  };
  const onChangeEditList = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setEditList(value);
  };
  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  const onClickSave = () => {
    if (editList !== "") {
      if (editListEl.current) {
        editListEl.current.style.display = "none";
      }
      if (editBlack.current) {
        editBlack.current.style.display = "none";
      }
      dispatch(editCard(editList, index, listIndex));
    }
  };
  const onClickDelete = () => {
    if (editListEl.current) {
      editListEl.current.style.display = "none";
    }
    if (editBlack.current) {
      editBlack.current.style.display = "none";
    }
    dispatch(deleteCard(index, listIndex));
  };
  const onClickClose = () => {
    if (editListEl.current) {
      editListEl.current.style.display = "none";
    }
    if (editBlack.current) {
      editBlack.current.style.display = "none";
    }
    setEditList(list);
  };
  const onClickEditBlack = () => {
    if (editListEl.current) {
      editListEl.current.style.display = "none";
    }
    if (editBlack.current) {
      editBlack.current.style.display = "none";
    }
    setEditList(list);
  };

  return (
    <div style={{ position: "relative" }}>
      <Paper
        ref={paperEl}
        className={classes.list}
        onMouseOver={onMouseOver}
        onMouseOut={onMouseOut}
      >
        <p style={{ maxWidth: "250px", wordBreak: "break-word" }}>{list}</p>
        <CreateIcon
          ref={editEl}
          className={classes.editIcon}
          onClick={onClickEditList}
        />
      </Paper>
      <div
        ref={editBlack}
        style={{
          display: "none",
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 1100,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
        onClick={onClickEditBlack}
      ></div>
      <div ref={editListEl} className={classes.editListform}>
        <div style={{ height: "82px" }}></div>
        <form onSubmit={onSubmitForm}>
          <textarea
            ref={textareaEl}
            className={classes.editListInput}
            placeholder="Input card ..."
            value={editList}
            onChange={onChangeEditList}
          />
        </form>
        <CloseIcon className={classes.closeIcon} onClick={onClickClose} />
        <button className={classes.editListBt} onClick={onClickSave}>
          Save
        </button>
        <button className={classes.deleteListBt} onClick={onClickDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default ListCard;
