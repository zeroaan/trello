import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { RootState } from "store/reducers";
import { BoardState } from "store/reducers/trello";

const DivBoards = styled.div`
  margin-top: 10px;
  width: 730px;
  height: 150px;
  display: flex;
  flex-flow: nowrap;
  overflow: auto;
  &::-webkit-scrollbar {
    height: 11px;
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
const DivBoardBox = styled.div`
  border-radius: 3px;
  background-color: white;
  min-width: 145px;
  max-width: 145px;
  min-height: 80px;
  max-height: 80px;
  padding: 15px;
  transition: all 0.3s ease;
  &:hover {
    backgroundcolor: rgb(231, 233, 237);
  }
`;
const DivBoardLink = styled(Link)`
  position: relative;
  left: -7px;
  height: 80px;
  text-decoration: none;
  color: black;
  font-size: 17px;
  margin: 6px 8px;
  &:hover {
    color: black;
  }
`;

interface Props {
  star?: boolean;
}

const TrelloBoards: React.FC<Props> = ({ star }) => {
  const { boards } = useSelector<RootState, BoardState>(
    (state: RootState) => state.trello
  );

  const AllBoards = () => {
    return (
      <DivBoards>
        {boards.map((v, i) => (
          <DivBoardLink key={i} to={`/board/${v.id}`}>
            <DivBoardBox>{v.boardName}</DivBoardBox>
          </DivBoardLink>
        ))}
      </DivBoards>
    );
  };
  const StarBoards = () => {
    return (
      <DivBoards>
        {boards.map((v, i) => {
          if (v.star === true) {
            return (
              <DivBoardLink key={i} to={`/board/${v.id}`}>
                <DivBoardBox>{v.boardName}</DivBoardBox>
              </DivBoardLink>
            );
          } else {
            return null;
          }
        })}
      </DivBoards>
    );
  };

  return star ? StarBoards() : AllBoards();
};

export default TrelloBoards;
