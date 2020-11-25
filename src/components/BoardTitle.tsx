import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import { changeBoardName } from "store/actions/trello";

import Typography from "@material-ui/core/Typography";

const TypographyBoardTitle = styled(Typography)`
  position: absolute;
  top: 0;
  left: 60px;
  padding: 4px 12px 2px 12px;
  flex: 0 1 auto;
  color: white;
  border-radius: 5px;
  font-family: "Jua", sans-serif;
  cursor: pointer;
  font-size: 18px;
  white-space: pre;
  &:hover {
    background-color: rgba(154, 160, 163, 0.9);
  }
`;
const FormBoardTitle = styled.form`
  position: absolute;
  top: 0;
  left: 60px;
`;
const InputBoardTitle = styled.input`
  padding: 0 12px;
  outline: none;
  border: none;
  border-radius: 5px;
  width: 230px;
  height: 34px;
  font-size: 18px;
  white-space: pre;
`;

interface Props {
  boardName: string;
  boardId: number;
}

const BoardTitle: React.FC<Props> = ({ boardName, boardId }) => {
  const dispatch = useDispatch();

  const [titleInput, setTitleInput] = useState(false);
  const [boardText, setBoardText] = useState(boardName);

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setBoardText(value);
  };

  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onBlurInput();
  };
  const onBlurInput = () => {
    if (boardText !== "") {
      dispatch(changeBoardName(boardText, boardId));
      setTitleInput(false);
    }
  };

  const BoardTitleText = () => {
    return (
      <TypographyBoardTitle variant="h6" onClick={() => setTitleInput(true)}>
        {boardName}
      </TypographyBoardTitle>
    );
  };
  const BoardTitleInput = () => {
    return (
      <FormBoardTitle onSubmit={onSubmitForm}>
        <InputBoardTitle
          value={boardText}
          onChange={onChangeName}
          onBlur={onBlurInput}
          maxLength={15}
          autoFocus
        />
      </FormBoardTitle>
    );
  };

  return titleInput ? BoardTitleInput() : BoardTitleText();
};

export default BoardTitle;
