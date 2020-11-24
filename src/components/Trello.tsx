import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import { RootState } from "store/reducers";
import { BoardState } from "store/reducers/trello";

import Navbar from "components/Navbar";
import TrelloBoards from "components/TrelloBoards";

const DivHome = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const DivBoardBox = styled.div`
  margin: 20px;
`;

const Trello = () => {
  const { starCount } = useSelector<RootState, BoardState>(
    (state: RootState) => state.trello
  );

  return (
    <>
      <Navbar />
      <DivHome>
        <DivBoardBox>
          <h3>My Boards</h3>
          <TrelloBoards />
        </DivBoardBox>
        {starCount === 0 ? null : (
          <DivBoardBox>
            <h3>Starred Boards</h3>
            <TrelloBoards star />
          </DivBoardBox>
        )}
      </DivHome>
    </>
  );
};

export default Trello;
