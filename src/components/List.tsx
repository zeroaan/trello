import React from "react";
import { useEffect, useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { Droppable } from "react-beautiful-dnd";

import { changeListTitle, addCard } from "store/actions/trello";
import { CardType } from "store/reducers/trello";

import ListCard from "components/Card";
import ListAction from "components/ListAction";

import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import CloseIcon from "@material-ui/icons/Close";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
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
    cursor: "pointer",
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
    minHeight: "5px",
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
  listAcBack: {
    position: "absolute",
    top: "12px",
    left: "9px",
    fontSize: "15px",
    cursor: "pointer",
    zIndex: 1,
  },
});

interface Props {
  title: string;
  list: CardType;
  index: number;
  boardId: number;
  listId: string;
}

const List: React.FC<Props> = ({ title, list, index, boardId, listId }) => {
  const dispatch = useDispatch();

  const classes = useStyles();

  const [actionOpen, setActionOpen] = useState(false);

  const [textTitle, setTextTitle] = useState(title);
  const [card, setCard] = useState("");
  const cardAdd = useRef<HTMLButtonElement>(null);
  const textInput = useRef<HTMLInputElement>(null);
  const cardInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setTextTitle(title);
  }, [title]);

  const displayBlock = (
    ref: React.RefObject<HTMLButtonElement | HTMLInputElement | HTMLDivElement>
  ) => {
    if (ref.current) {
      ref.current.style.display = "block";
    }
  };
  const displayNone = (
    ref: React.RefObject<HTMLButtonElement | HTMLInputElement | HTMLDivElement>
  ) => {
    if (ref.current) {
      ref.current.style.display = "none";
    }
  };
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setTextTitle(value);
  };
  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onBlurInput();
  };
  const onBlurInput = () => {
    if (textTitle !== "") {
      displayNone(textInput);
      dispatch(changeListTitle(textTitle, index, boardId));
    }
  };
  const onClickAddBt = () => {
    displayBlock(cardInput);
    displayNone(cardAdd);
  };
  const onClickAddCard = () => {
    if (card !== "") {
      dispatch(addCard(card, index, boardId));
      setCard("");
    }
  };
  const onChangeCard = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setCard(value);
  };
  const onClickClose = () => {
    displayBlock(cardAdd);
    displayNone(cardInput);
  };
  const onDragOverCard = (e: React.DragEvent) => {
    e.preventDefault();
  };

  return (
    <>
      <Card className={classes.list} onDragOver={onDragOverCard}>
        <CardHeader
          className={classes.listName}
          title={title}
          onClick={() => displayBlock(textInput)}
          disableTypography
        />
        <form className={classes.listNameForm} onSubmit={onSubmitForm}>
          <input
            ref={textInput}
            className={classes.listNameInput}
            value={textTitle}
            onChange={onChangeInput}
            onBlur={onBlurInput}
            maxLength={15}
          />
        </form>
        <button className={classes.menuBt} onClick={() => setActionOpen(true)}>
          ⋯
        </button>
        {actionOpen ? (
          <ListAction
            setActionOpen={setActionOpen}
            index={index}
            boardId={boardId}
          />
        ) : null}
        <Droppable droppableId={String(listId)}>
          {(provided) => (
            <CardContent
              {...provided.droppableProps}
              ref={provided.innerRef}
              className={classes.cardContent}
            >
              {list.map((v, i) => (
                <ListCard
                  key={i}
                  list={v.text}
                  cardId={v.id}
                  index={i}
                  listIndex={index}
                  boardId={boardId}
                />
              ))}
              {provided.placeholder}
            </CardContent>
          )}
        </Droppable>
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
