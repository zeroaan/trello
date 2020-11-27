import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import { addCard, addList } from "store/actions/trello";

import Button from "@material-ui/core/Button";
import CloseIcon from "@material-ui/icons/Close";

const ButtonLCAc = styled(Button)<{ mycolor: string }>`
  padding: 8px;
  width: 278px;
  text-transform: none;
  border-radius: 5px;
  color: ${(props) => props.mycolor};
`;
const DivBackGroundColor = styled.div<{ backgroundColor: string }>`
  padding: 8px;
  border-radius: 5px;
  background-color: ${(props) => props.backgroundColor};
`;
const TextareaLCAc = styled.textarea<{ height: string }>`
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14),
    0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  font-size: 16px;
  outline: none;
  border: none;
  border-radius: 5px;
  width: 256px;
  padding: 10px 10px;
  resize: none;
  height: ${(props) => props.height};
  &::-webkit-scrollbar {
    display: none;
  }
`;
const ButtonAddLCAc = styled.button`
  border-radius: 5px;
  outline: none;
  border: none;
  background-color: rgb(90, 172, 68);
  margin-top: 5px;
  color: white;
  padding: 6px 10px;
  font-size: 16px;
  cursor: pointer;
`;
const CloseIconLCAc = styled(CloseIcon)`
  position: relative;
  top: 5px;
  left: 8px;
  cursor: pointer;
  color: rgb(108, 120, 141);
  font-size: 25px;
`;

interface Props {
  list?: boolean;
  index: number;
  boardId: number;
}

const ListCardAdd: React.FC<Props> = ({ list, index, boardId }) => {
  const dispatch = useDispatch();

  const [addInput, setaddInput] = useState(false);
  const [text, setText] = useState("");
  const inputEl = useRef<HTMLTextAreaElement>(null);

  const onClickOpen = () => {
    setaddInput(true);
  };
  const onClickClose = () => {
    setaddInput(false);
    setText("");
  };
  const onChangeCard = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setText(value);
  };
  const onClickAddCard = () => {
    if (text !== "") {
      if (list) {
        dispatch(addList(text, boardId));
        onClickClose();
      } else {
        dispatch(addCard(text, index, boardId));
      }
      setText("");
    }
    if (inputEl.current) {
      inputEl.current.focus();
    }
  };

  const placeholder = list ? "Input list..." : "Input card...";
  const buttonValue = list ? "+ Add a List" : "+ Add a Card";
  const AddButtonValue = list ? "Add List" : "Add Card";
  const buttonValueColor = list ? "white" : "black";
  const BackgroundColor = list ? "rgb(235,236,240)" : "inherit";
  const InputHeight = list ? "20px" : "60px";

  const AddButton = () => {
    return (
      <ButtonLCAc mycolor={buttonValueColor} onClick={onClickOpen} disableRipple>
        {buttonValue}
      </ButtonLCAc>
    );
  };
  const AddInput = () => {
    return (
      <DivBackGroundColor backgroundColor={BackgroundColor}>
        <TextareaLCAc
          height={InputHeight}
          ref={inputEl}
          placeholder={placeholder}
          value={text}
          onChange={onChangeCard}
          autoFocus
        />
        <ButtonAddLCAc onClick={onClickAddCard}>{AddButtonValue}</ButtonAddLCAc>
        <CloseIconLCAc onClick={onClickClose} />
      </DivBackGroundColor>
    );
  };

  return addInput ? AddInput() : AddButton();
};

export default ListCardAdd;
