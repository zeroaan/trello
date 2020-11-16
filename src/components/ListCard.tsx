import React, { useState } from "react";
import { useRef } from "react";

import { useDispatch } from "react-redux";
import { editCard } from "../store/actions/list";

import Paper from "@material-ui/core/Paper";
import CreateIcon from "@material-ui/icons/Create";

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
    left: "200px",
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
    left: "120px",
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
}));

interface Props {
  list: string;
}

const ListCard: React.FC<Props> = ({ list }) => {
  const dispatch = useDispatch();

  const classes = useStyles();

  const [editList, setEditList] = useState(list);
  const editListEl = useRef<HTMLFormElement>(null);
  const editBlack = useRef<HTMLDivElement>(null);
  const editEl = useRef<SVGSVGElement>(null);

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
  };
  const onChageEditList = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setEditList(value);
  };
  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  const onClickSave = (e: any) => {
    const listTitle = e.target.parentElement.parentElement.parentElement.parentElement.querySelector(
      ".MuiCardHeader-content"
    ).innerText;
    if (editListEl.current) {
      editListEl.current.style.display = "none";
    }
    if (editBlack.current) {
      editBlack.current.style.display = "none";
    }
    dispatch(editCard(listTitle, list, editList));
  };

  return (
    <div style={{ position: "relative" }}>
      <Paper
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
          backgroundColor: "rgba(0, 0, 0, 0.45)",
        }}
      ></div>
      <form
        ref={editListEl}
        className={classes.editListform}
        onSubmit={onSubmitForm}
      >
        <textarea
          className={classes.editListInput}
          placeholder="Input card ..."
          value={editList}
          onChange={onChageEditList}
        />
        <button className={classes.editListBt} onClick={onClickSave}>
          Save
        </button>
        <button className={classes.deleteListBt}>Delete</button>
      </form>
    </div>
  );
};

export default ListCard;
