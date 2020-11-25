import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import { changeListTitle } from "store/actions/trello";

import CardHeader from "@material-ui/core/CardHeader";

const CardHeaderTitle = styled(CardHeader)`
  margin: 13px 10px 0px 10px;
  font-size: 18px;
  width: 205px;
  height: 1px;
  cursor: pointer;
`;
const InputTitle = styled.input`
  margin: 13px 10px 0px 13px;
  padding: 2px 11px;
  font-size: 18px;
  outline: none;
  border: 2px solid rgb(0, 121, 191);
  border-radius: 5px;
  width: 210px;
  height: 25px;
`;

interface Props {
  title: string;
  index: number;
  boardId: number;
}

const ListTitle: React.FC<Props> = ({ title, index, boardId }) => {
  const dispatch = useDispatch();

  const [changeTitle, setChangeTitle] = useState(false);
  const [textTitle, setTextTitle] = useState(title);

  useEffect(() => {
    setTextTitle(title);
  }, [title]);

  const onClickTitle = () => {
    setChangeTitle(true);
  };
  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onBlurInput();
  };
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setTextTitle(value);
  };
  const onBlurInput = () => {
    if (textTitle !== "") {
      dispatch(changeListTitle(textTitle, index, boardId));
    }
    setChangeTitle(false);
  };

  const Title = () => {
    return (
      <CardHeaderTitle title={title} disableTypography onClick={onClickTitle} />
    );
  };
  const TitleForm = () => {
    return (
      <form onSubmit={onSubmitForm}>
        <InputTitle
          value={textTitle}
          onChange={onChangeInput}
          onBlur={onBlurInput}
          maxLength={15}
          autoFocus
        />
      </form>
    );
  };

  return changeTitle ? TitleForm() : Title();
};

export default ListTitle;
