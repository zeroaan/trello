import React from "react";
import { useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

import CardContent from "components/CardContent";

const DivCardMargin = styled.div`
  margin-bottom: 8px;
`;

interface Props {
  list: string;
  cardId: string;
  index: number;
  listIndex: number;
  boardId: number;
}

const ListCard: React.FC<Props> = ({
  list,
  cardId,
  index,
  listIndex,
  boardId,
}) => {
  const [cardEditBox, setCardEditBox] = useState(false);

  return (
    <div style={{ position: "relative" }}>
      <Draggable
        key={String(cardId)}
        draggableId={String(cardId)}
        index={index}
      >
        {(provided) => (
          <DivCardMargin
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            <CardContent
              list={list}
              setCardEditBox={setCardEditBox}
              index={index}
              listIndex={listIndex}
              boardId={boardId}
            />
          </DivCardMargin>
        )}
      </Draggable>
      {cardEditBox ? (
        <CardContent
          edit
          list={list}
          setCardEditBox={setCardEditBox}
          index={index}
          listIndex={listIndex}
          boardId={boardId}
        />
      ) : null}
    </div>
  );
};

export default ListCard;
