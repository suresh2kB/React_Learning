import "./Expenses.css";
import ExpenseIten from "./ExpenseItem";

function Expenses(props) {
  return (
    <div className="expenses">
      {props.expenses.map((object) => (
        <ExpenseIten
          title={object.title}
          amount={object.amount}
          date={object.date}
        />
      ))}
    </div>
  );
}

export default Expenses;
