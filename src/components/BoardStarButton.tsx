import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import { starBoard } from "store/actions/trello";

const ButtonStar = styled.button`
  margin: 0 16px;
  background-color: rgba(154, 160, 163, 0.9);
  width: 35px;
  height: 35px;
  textt-tansform: none;
  outline: none;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  font-size: 16px;
  &:hover: {
    background-color: rgba(171, 177, 180, 0.9);
  }
`;

interface Props {
  boardStar: boolean;
  boardId: number;
}

const BoardStarButton: React.FC<Props> = ({ boardStar, boardId }) => {
  const dispatch = useDispatch();

  const onClickStar = () => {
    dispatch(starBoard(boardId));
  };

  const StarColor = boardStar ? "yellow" : "white";

  return (
    <ButtonStar style={{ color: StarColor }} onClick={onClickStar}>
      ☆
    </ButtonStar>
  );
};

export default BoardStarButton;
