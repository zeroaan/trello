import React from "react";
import { useState } from "react";
import { Droppable } from "react-beautiful-dnd";

import { CardType } from "store/reducers/trello";

import ListCard from "components/Card";
import ListTitle from "components/ListTitle";
import ListAction from "components/ListAction";
import ListCardAdd from "components/ListCardAdd";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
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
  cardActions: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "278px",
    margin: "auto",
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
  const classes = useStyles();

  const [actionOpen, setActionOpen] = useState(false);

  return (
    <>
      <Card className={classes.list}>
        <ListTitle title={title} index={index} boardId={boardId} />
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
        <CardActions className={classes.cardActions}>
          <ListCardAdd index={index} boardId={boardId} />
        </CardActions>
      </Card>
    </>
  );
};

export default List;
