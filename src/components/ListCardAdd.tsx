import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";

import { addCard, addList } from "store/actions/trello";

import Button from "@material-ui/core/Button";
import CloseIcon from "@material-ui/icons/Close";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  addBt: {
    width: "290px",
    textTransform: "none",
  },
  addTextInput: {
    boxShadow:
      "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
    fontSize: "16px",
    outline: "none",
    border: "none",
    borderRadius: "5px",
    width: "256px",
    padding: "10px 10px",
    resize: "none",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
  addTextBt: {
    borderRadius: "5px",
    outline: "none",
    border: "none",
    backgroundColor: "rgb(90,172,68)",
    marginTop: "5px",
    color: "white",
    padding: "6px 10px",
    fontSize: "16px",
    cursor: "pointer",
  },
  closeIcon: {
    position: "relative",
    top: "5px",
    left: "8px",
    cursor: "pointer",
    color: "rgb(108,120,141)",
    fontSize: "25px",
  },
});

interface Props {
  list?: boolean;
  index: number;
  boardId: number;
}

const ListCardAdd: React.FC<Props> = ({ list, index, boardId }) => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const [addInput, setaddInput] = useState(false);
  const [text, setText] = useState("");
  const inputEl = useRef<HTMLTextAreaElement>(null);

  const onClickOpen = () => {
    setaddInput(true);
  };
  const onClickClose = () => {
    setaddInput(false);
  };
  const onChangeCard = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setText(value);
  };
  const onClickAddCard = () => {
    if (text !== "") {
      if (list) {
        dispatch(addList(text, boardId));
        onClickClose();
      } else {
        dispatch(addCard(text, index, boardId));
      }
      setText("");
    }
    if (inputEl.current) {
      inputEl.current.focus();
    }
  };

  const placeholder = list ? "Input list..." : "Input card...";
  const buttonValue = list ? "+ Add a List" : "+ Add a Card";
  const buttonValueColor = list ? "white" : "black";
  const InputHeight = list ? "20px" : "60px";
  const AddButtonValue = list ? "Add List" : "Add Card";
  const BackgroundColor = list ? "rgb(235,236,240)" : "inherit";

  const AddButton = () => {
    return (
      <Button
        style={{
          color: buttonValueColor,
        }}
        className={classes.addBt}
        onClick={onClickOpen}
        disableRipple
      >
        {buttonValue}
      </Button>
    );
  };
  const AddInput = () => {
    return (
      <div
        style={{
          backgroundColor: BackgroundColor,
          padding: "6px 8px",
          borderRadius: "5px",
        }}
      >
        <textarea
          ref={inputEl}
          style={{ height: InputHeight }}
          className={classes.addTextInput}
          placeholder={placeholder}
          value={text}
          onChange={onChangeCard}
          autoFocus
        />
        <div
          style={{
            width: "100%",
          }}
        >
          <button className={classes.addTextBt} onClick={onClickAddCard}>
            {AddButtonValue}
          </button>
          <CloseIcon className={classes.closeIcon} onClick={onClickClose} />
        </div>
      </div>
    );
  };

  return addInput ? AddInput() : AddButton();
};

export default ListCardAdd;
