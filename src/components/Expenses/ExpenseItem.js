import React, { useState } from "react";

import "./ExpenseItem.css";
import DateItem from "./DateItem";
import Card from "../UI/Card";

const ExpenseIten = (props) => {
  const [title, setTitle] = useState(props.title);
  const [amount, setAmount] = useState(props.amount);

  const clickHandler = () => {
    // setTimeout(() => {
    //   setTitle("Updated!!!");
    // }, 1000);
    setTitle("Updated!!!");
    setAmount("$23234");
  };

  return (
    <Card className="expense-item">
      <DateItem date={props.date}></DateItem>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseIten;
