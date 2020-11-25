import React from "react";
import { useState } from "react";
import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";

import { CardType } from "store/reducers/trello";

import ListCard from "components/Card";
import ListTitle from "components/ListTitle";
import ListAction from "components/ListAction";
import ListCardAdd from "components/ListCardAdd";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const CardStyled = styled(Card)`
  flex-shrink: 0;
  position: relative;
  background-color: rgb(235, 236, 240);
  width: 300px;
  height: 100%;
  margin: 0 0 0 16px;
  overflow: visible;
`;
const ButtonAction = styled.button`
  font-size: 18px;
  position: absolute;
  top: 15px;
  right: 12px;
  font-weight: bold;
  outline: none;
  border: none;
  cursor: pointer;
  border-radius: 50px;
  background-color: rgb(235, 236, 240);
`;
const CardContentStyled = styled(CardContent)`
  margin-top: 10px;
  padding: 0 12px;
  overflow: auto;
  max-height: 375px;
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgb(191, 196, 206);
    border-radius: 10px;
  }
  &::-webkit-scrollbar-track {
    background-color: rgb(218, 219, 226);
    border-radius: 10px;
  }
`;
const DivCardAction = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 278px;
  margin: auto;
  margin-bottom: 6px;
`;

interface Props {
  title: string;
  list: CardType;
  index: number;
  boardId: number;
  listId: string;
}

const List: React.FC<Props> = ({ title, list, index, boardId, listId }) => {
  const [actionOpen, setActionOpen] = useState(false);

  return (
    <>
      <CardStyled>
        <ListTitle title={title} index={index} boardId={boardId} />
        <ButtonAction onClick={() => setActionOpen(true)}>⋯</ButtonAction>
        {actionOpen ? (
          <ListAction
            setActionOpen={setActionOpen}
            index={index}
            boardId={boardId}
          />
        ) : null}
        <Droppable droppableId={String(listId)}>
          {(provided) => (
            <CardContentStyled
              {...provided.droppableProps}
              ref={provided.innerRef}
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
            </CardContentStyled>
          )}
        </Droppable>
        <DivCardAction>
          <ListCardAdd index={index} boardId={boardId} />
        </DivCardAction>
      </CardStyled>
    </>
  );
};

export default List;
