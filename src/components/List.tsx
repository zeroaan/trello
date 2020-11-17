import React from "react";
import { useEffect, useState, useRef } from "react";
import ListCard from "components/ListCard";

import { useDispatch } from "react-redux";
import { changeTitle, addCard } from "../store/actions/list";

import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
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
    overflow: "visible",
  },
  listName: {
    margin: "13px 10px",
    fontSize: "18px",
    width: "210px",
    height: "1px",
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
    paddingTop: "2px",
    paddingLeft: "12px",
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
    marginTop: "12px",
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
  cardContent: {
    padding: "0 12px",
    overflow: "auto",
    maxHeight: "375px",
    "&::-webkit-scrollbar": {
      width: "8px",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "rgb(191,196,206)",
      borderRadius: "10px",
    },
    "&::-webkit-scrollbar-track": {
      backgroundColor: "rgb(218,219,226)",
      borderRadius: "10px",
    },
  },
  listAc: {
    zIndex: 100,
    position: "absolute",
    top: "13px",
    right: "-160px",
    width: "200px",
    height: "165px",
    border: "1px solid rgb(218,219,226)",
    display: "none",
  },
  listAcTitle: {
    fontFamily: `"Jua", sans-serif`,
    position: "relative",
    top: "8px",
    left: "55px",
  },
  listAcClose: {
    position: "absolute",
    top: "11px",
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
  listAcBt: {
    width: "179px",
  },
}));

interface Props {
  title: string;
  list: string[];
  index: number;
}

const List: React.FC<Props> = ({ title, list, index }) => {
  const dispatch = useDispatch();

  const classes = useStyles();

  const [textTitle, setTextTitle] = useState(title);
  const [card, setCard] = useState("");
  const cardAdd = useRef<HTMLButtonElement>(null);
  const textInput = useRef<HTMLInputElement>(null);
  const cardInput = useRef<HTMLInputElement>(null);
  const listAcEl = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTextTitle(title);
  }, [title]);

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
    dispatch(changeTitle(textTitle, index));
  };
  const onBlurInput = () => {
    if (textTitle !== "") {
      if (textInput.current) {
        textInput.current.style.display = "none";
      }
      dispatch(changeTitle(textTitle, index));
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
  const onClickAddCard = () => {
    if (card !== "") {
      dispatch(addCard(card, index));
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

  const onClickListAc = () => {
    if (listAcEl.current) {
      listAcEl.current.style.display = "block";
    }
  };
  const onClickListAcClose = () => {
    if (listAcEl.current) {
      listAcEl.current.style.display = "none";
    }
  };
  const onClickListAcAddCard = () => {
    onClickListAcClose();
    onClickAddBt();
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
            maxLength={15}
          />
        </form>
        <button className={classes.menuBt} onClick={onClickListAc}>
          ⋯
        </button>
        <Paper
          ref={listAcEl}
          className={classes.listAc}
          onMouseLeave={onClickListAcClose}
        >
          <Typography className={classes.listAcTitle} variant="subtitle1">
            List Actions
          </Typography>
          <CloseIcon
            className={classes.listAcClose}
            onClick={onClickListAcClose}
          />
          <hr className={classes.listAcHr} />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop: "15px",
            }}
          >
            <Button
              className={classes.listAcBt}
              onClick={onClickListAcAddCard}
              disableRipple
            >
              Add Card
            </Button>
            <Button className={classes.listAcBt} disableRipple>
              Copy List
            </Button>
            <Button className={classes.listAcBt} disableRipple>
              Delete This List
            </Button>
          </div>
        </Paper>
        <CardContent className={classes.cardContent}>
          {list.map((v, i) => (
            <ListCard key={i} list={v} index={i} listIndex={index} />
          ))}
        </CardContent>
        <CardActions>
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
