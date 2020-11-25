import React, { useState } from "react";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import { deleteBoard } from "store/actions/trello";

import Card from "@material-ui/core/Card";
import CloseIcon from "@material-ui/icons/Close";
import DeleteIcon from "@material-ui/icons/Delete";

const ButtonDelete = styled.button`
  position: absolute;
  right: 20px;
  background-color: rgba(154, 160, 163, 0.9);
  width: 35px;
  height: 35px;
  text-transform: none;
  outline: none;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background-color: rgba(171, 177, 180, 0.9);
  }
`;
const DivDelete = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1100;
  background-color: rgba(0, 0, 0, 0.5);
`;
const CardStyled = styled(Card)`
  background-color: rgb(235, 236, 240);
  width: 370px;
  height: 200px;
  margin: auto;
  position: relative;
  top: 230px;
`;
const H3Styled = styled.h3`
  position: relative;
  top: 25px;
  left: 43px;
`;
const PStyled = styled.p`
  position: relative;
  top: 50px;
  left: 83px;
  font-size: 20px;
  color: black;
`;
const ButtonDeleteDispatch = styled.button`
  position: relative;
  top: 70px;
  left: 110px;
  outline: none;
  border: none;
  z-index: 1200;
  border-radius: 5px;
  background-color: rgb(250, 60, 84);
  margin-top: 10px;
  color: white;
  padding: 8px 16px;
  font-size: 15px;
  cursor: pointer;
`;
const CloseIconStyled = styled(CloseIcon)`
  position: relative;
  top: -35px;
  left: 165px;
  cursor: pointer;
  color: rgb(108, 120, 141);
  font-size: 28px;
`;

interface Props {
  boardId: number;
}

const BoardDelete: React.FC<Props> = ({ boardId }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [deleteBox, setDeleteBox] = useState(false);

  const onClickDeleteBoard = () => {
    dispatch(deleteBoard(boardId));
    history.push("/");
  };

  const DeleteButton = () => {
    return (
      <>
        <ButtonDelete onClick={() => setDeleteBox(true)}>
          <DeleteIcon style={{ fontSize: "20px", color: "white" }} />
        </ButtonDelete>
      </>
    );
  };
  const DeleteAction = () => {
    return (
      <>
        {DeleteButton()}
        <DivDelete>
          <CardStyled>
            <H3Styled>Delete Board</H3Styled>
            <PStyled>삭제 후 되돌릴 수 없습니다.</PStyled>
            <ButtonDeleteDispatch onClick={onClickDeleteBoard}>
              Delete This Board
            </ButtonDeleteDispatch>
            <CloseIconStyled onClick={() => setDeleteBox(false)} />
          </CardStyled>
        </DivDelete>
      </>
    );
  };

  return deleteBox ? DeleteAction() : DeleteButton();
};

export default BoardDelete;
