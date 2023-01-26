import "./Expenses.css";
import ExpenseIten from "./ExpenseItem";
import Card from "../UI/Card";

const Expenses = (props) => {
  return (
    <Card className="expenses">
      {props.expenses.map((object) => (
        <ExpenseIten
          title={object.title}
          amount={object.amount}
          date={object.date}
        />
      ))}
    </Card>
  );
};

export default Expenses;
