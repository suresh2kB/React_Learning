import "./ExpenseItem.css";
import DateItem from "./DateItem";
import Card from "../UI/Card";

const ExpenseIten = (props) => {
  const clickHandler = () => {
    console.log("Clicked!!!!!!!!!!!!!!!");
  };
  return (
    <Card className="expense-item">
      <DateItem date={props.date}></DateItem>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <h2>HYYY</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseIten;
