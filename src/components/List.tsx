import React from "react";
import { useState } from "react";
import ListCard from "components/ListCard";

import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  list: {
    flexShrink: 0,
    position: "relative",
    backgroundColor: "rgb(235,236,240)",
    width: "300px",
    height: "100%",
    margin: "0 16px",
  },
  listName: {
    fontSize: "18px",
  },
  listNameForm: {
    position: "absolute",
    top: "13px",
    left: "12px",
  },
  menuBt: {
    fontSize: "18px",
    position: "absolute",
    top: "15px",
    right: "12px",
    fontWeight: "bold",
    outline: "none",
    border: "none",
    cursor: "pointer",
    borderRadius: "50px",
    backgroundColor: "rgb(235,236,240)",
  },
  listNameInput: {
    fontSize: "18px",
    outline: "none",
    border: "2px solid rgb(0,121,191)",
    borderRadius: "5px",
    width: "230px",
    height: "25px",
  },
  addBt: {
    width: "100%",
    textTransform: "none",
  },
}));

interface Props {
  title: string;
  list: string[];
}

const List: React.FC<Props> = ({ title, list }) => {
  const classes = useStyles();

  const [textTitle, setTextTitle] = useState(title);
  const [textInput, setTextInput] = useState("invisible");

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setTextTitle(value);
  };
  const onClickName = () => {
    setTextInput("");
  };
  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTextInput("invisible");
  };
  const onBlurInput = () => {
    setTextInput("invisible");
  };

  return (
    <>
      <Card className={classes.list}>
        <CardHeader
          className={classes.listName}
          title={title}
          onClick={onClickName}
          disableTypography
        />
        <form className={classes.listNameForm} onSubmit={onSubmitForm}>
          <input
            id={textInput}
            className={classes.listNameInput}
            value={textTitle}
            onChange={onChangeInput}
            required
            onBlur={onBlurInput}
          />
        </form>
        <button className={classes.menuBt}>⋯</button>
        <CardContent style={{ padding: "0 12px" }}>
          {list.map((v, i) => (
            <ListCard key={i} list={v} />
          ))}
        </CardContent>
        <CardActions>
          <Button className={classes.addBt} disableRipple>
            + Add a Card
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default List;
