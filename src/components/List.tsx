import React from "react";
import { useState, useRef } from "react";
import ListCard from "components/ListCard";

import { useDispatch } from "react-redux";
import { addCard } from "../store/actions/list";

import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import CloseIcon from "@material-ui/icons/Close";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  list: {
    flexShrink: 0,
    position: "relative",
    backgroundColor: "rgb(235,236,240)",
    width: "300px",
    height: "100%",
    margin: "0 0 0 16px",
  },
  listName: {
    fontSize: "18px",
  },
  listNameForm: {
    position: "absolute",
    top: "13px",
    left: "12px",
  },
  menuBt: {
    fontSize: "18px",
    position: "absolute",
    top: "15px",
    right: "12px",
    fontWeight: "bold",
    outline: "none",
    border: "none",
    cursor: "pointer",
    borderRadius: "50px",
    backgroundColor: "rgb(235,236,240)",
  },
  listNameInput: {
    fontSize: "18px",
    outline: "none",
    border: "2px solid rgb(0,121,191)",
    borderRadius: "5px",
    width: "230px",
    height: "25px",
    display: "none",
  },
  addBt: {
    width: "100%",
    textTransform: "none",
  },
  addBtText: {
    display: "none",
    position: "relative",
    top: "-8px",
    left: "-4px",
  },
  addCardInput: {
    boxShadow:
      "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
    fontSize: "15px",
    outline: "none",
    border: "none",
    borderRadius: "5px",
    width: "256px",
    height: "60px",
    padding: "10px 10px",
    resize: "none",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
  addCardBt: {
    borderRadius: "5px",
    outline: "none",
    border: "none",
    backgroundColor: "rgb(90,172,68)",
    marginTop: "10px",
    color: "white",
    padding: "6px 10px",
    fontSize: "16px",
    cursor: "pointer",
  },
  closeIcon: {
    position: "relative",
    top: "7px",
    left: "8px",
    cursor: "pointer",
    color: "rgb(108,120,141)",
    fontSize: "25px",
  },
}));

interface Props {
  title: string;
  list: string[];
}

const List: React.FC<Props> = ({ title, list }) => {
  const dispatch = useDispatch();

  const classes = useStyles();

  const [textTitle, setTextTitle] = useState(title);
  const [card, setCard] = useState("");
  const cardAdd = useRef<HTMLButtonElement>(null);
  const textInput = useRef<HTMLInputElement>(null);
  const cardInput = useRef<HTMLInputElement>(null);

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setTextTitle(value);
  };
  const onClickName = () => {
    if (textInput.current) {
      textInput.current.style.display = "block";
    }
  };
  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (textInput.current) {
      textInput.current.style.display = "none";
    }
  };
  const onBlurInput = () => {
    if (textInput.current) {
      textInput.current.style.display = "none";
    }
  };
  const onClickAddBt = () => {
    if (cardInput.current) {
      cardInput.current.style.display = "block";
    }
    if (cardAdd.current) {
      cardAdd.current.style.display = "none";
    }
  };
  const onClickAddCard = (e: any) => {
    if (card !== "") {
      const listTitle = e.target.parentElement.parentElement.parentElement.querySelector(
        ".MuiCardHeader-content"
      ).innerText;
      if (cardInput.current) {
        cardInput.current.style.display = "none";
      }
      if (cardAdd.current) {
        cardAdd.current.style.display = "block";
      }
      dispatch(addCard(listTitle, card));
      setCard("");
    }
  };
  const onChangeCard = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setCard(value);
  };
  const onClickClose = () => {
    if (cardInput.current) {
      cardInput.current.style.display = "none";
    }
    if (cardAdd.current) {
      cardAdd.current.style.display = "block";
    }
  };

  return (
    <>
      <Card className={classes.list}>
        <CardHeader
          className={classes.listName}
          title={title}
          onClick={onClickName}
          disableTypography
        />
        <form className={classes.listNameForm} onSubmit={onSubmitForm}>
          <input
            ref={textInput}
            className={classes.listNameInput}
            value={textTitle}
            onChange={onChangeInput}
            required
            onBlur={onBlurInput}
          />
        </form>
        <button className={classes.menuBt}>⋯</button>
        <CardContent
          style={{ padding: "0 12px", overflow: "auto", maxHeight: "375px" }}
        >
          {list.map((v, i) => (
            <ListCard key={i} list={v} />
          ))}
        </CardContent>
        <CardActions style={{ marginTop: "12px" }}>
          <Button
            ref={cardAdd}
            className={classes.addBt}
            onClick={onClickAddBt}
            disableRipple
          >
            + Add a Card
          </Button>
          <div ref={cardInput} className={classes.addBtText}>
            <textarea
              className={classes.addCardInput}
              placeholder="Input card ..."
              onChange={onChangeCard}
              value={card}
            />
            <button className={classes.addCardBt} onClick={onClickAddCard}>
              Add Card
            </button>
            <CloseIcon className={classes.closeIcon} onClick={onClickClose} />
          </div>
        </CardActions>
      </Card>
    </>
  );
};

export default List;
