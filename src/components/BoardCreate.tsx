import React from "react";
import { useState, Dispatch, SetStateAction } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import styled from "styled-components";

import { addBoard } from "store/actions/trello";
import { RootState } from "store/reducers";
import { BoardState } from "store/reducers/trello";

import Card from "@material-ui/core/Card";
import CloseIcon from "@material-ui/icons/Close";

const DivNewBoard = styled.div`
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
const H3BoardTitle = styled.h3`
  position: relative;
  top: 25px;
  left: 43px;
`;
const InputStyled = styled.input`
  position: relative;
  top: 50px;
  left: 40px;
  font-size: 15px;
  outline: none;
  border: 2px solid rgb(0, 121, 191);
  border-radius: 5px;
  width: 256px;
  height: 17px;
  padding: 10px 10px;
  resize: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const ButtonStyled = styled.button`
  position: relative;
  top: 60px;
  left: 115px;
  outline: none;
  border: none;
  z-index: 1200;
  border-radius: 5px;
  background-color: rgb(90, 172, 68);
  margin-top: 10px;
  color: white;
  padding: 8px 16px;
  font-size: 15px;
  cursor: pointer;
`;
const CloseIconStyled = styled(CloseIcon)`
  position: relative;
  top: -50px;
  left: 180px;
  cursor: pointer;
  color: rgb(108, 120, 141);
  font-size: 28px;
`;

interface Props {
  setCreateBoard: Dispatch<SetStateAction<boolean>>;
}

const BoardCreate: React.FC<Props> = ({ setCreateBoard }) => {
  const history = useHistory();

  const dispatch = useDispatch();
  const { boardId } = useSelector<RootState, BoardState>(
    (state: RootState) => state.trello
  );

  const [newBoard, setNewBoard] = useState("");

  const onChangeBoard = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setNewBoard(value);
  };
  const onClickAddBoard = () => {
    if (newBoard !== "") {
      onClickClose();
      dispatch(addBoard(newBoard));
      history.push(`/board/${boardId}`);
    }
  };
  const onClickClose = () => {
    setCreateBoard(false);
  };

  return (
    <>
      <DivNewBoard>
        <CardStyled>
          <H3BoardTitle>New Board</H3BoardTitle>
          <InputStyled
            placeholder="Input Board Name ..."
            value={newBoard}
            onChange={onChangeBoard}
            maxLength={15}
            autoFocus
          />
          <ButtonStyled onClick={onClickAddBoard}>Create a Board</ButtonStyled>
          <CloseIconStyled onClick={onClickClose} />
        </CardStyled>
      </DivNewBoard>
    </>
  );
};

export default BoardCreate;
