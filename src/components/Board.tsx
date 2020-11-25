import React from "react";
import { useState, useEffect } from "react";
import { useRouteMatch } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { DragDropContext } from "react-beautiful-dnd";
import styled from "styled-components";

import { sortList } from "store/actions/trello";
import { RootState } from "store/reducers";
import { BoardState, ListType, CardType } from "store/reducers/trello";

import List from "components/List";
import Navbar from "components/Navbar";
import BoardStarButton from "components/BoardStar";
import BoardTitle from "components/BoardTitle";
import BoardDelete from "components/BoardDelete";
import ListCardAdd from "components/ListCardAdd";

const DivScreen = styled.div`
  max-width: 98vw;
  max-height: 90vh;
  position: relative;
  top: 58px;
  left: 1vw;
`;
const DivFlex = styled.div`
  display: flex;
  margin-bottom: 12px;
`;
const DivListAdd = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 290px;
  height: 100%;
  background-color: rgba(154, 160, 163, 0.9);
  border-radius: 5px;
  margin: 0 16px;
`;

const Board = () => {
  const match = useRouteMatch<{ boardId: string }>();
  const boardId = Number(match.params.boardId);

  const dispatch = useDispatch();
  const { boards } = useSelector<RootState, BoardState>(
    (state: RootState) => state.trello
  );
  let lists: ListType = [];
  let firstBoardName: string = "";
  let boardStar: boolean = false;
  boards.forEach((v, i) => {
    if (v.id === boardId) {
      lists = boards[i].lists;
      firstBoardName = boards[i].boardName;
      boardStar = boards[i].star;
    }
  });

  const [boardName, setBoardName] = useState(firstBoardName);

  useEffect(() => {
    setBoardName(firstBoardName);
  }, [firstBoardName]);

  const onDragEnd = (result: any) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }
    dispatch(
      sortList(
        boardId,
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
        draggableId
      )
    );
  };

  return (
    <>
      <Navbar />
      <DivScreen>
        <DivFlex>
          <BoardStarButton boardStar={boardStar} boardId={boardId} />
          <BoardTitle boardName={boardName} boardId={boardId} />
          <BoardDelete boardId={boardId} />
        </DivFlex>
        <DragDropContext onDragEnd={onDragEnd}>
          <DivFlex>
            {lists === undefined ? null : (
              <>
                {lists.map(
                  (
                    v: { id: string; title: string; cards: CardType },
                    i: number
                  ) => (
                    <List
                      key={i}
                      title={v.title}
                      list={v.cards}
                      index={i}
                      boardId={boardId}
                      listId={v.id}
                    />
                  )
                )}
              </>
            )}
            <DivListAdd>
              <ListCardAdd list index={0} boardId={boardId} />
            </DivListAdd>
          </DivFlex>
        </DragDropContext>
      </DivScreen>
    </>
  );
};

export default Board;
