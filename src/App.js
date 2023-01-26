import Expenses from "./components/Expenses/Expenses";

import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
    {
      id: "1",
      title: "Car insurance",
      amount: "345.56",
      date: new Date(2023, 2, 24),
    },
    {
      id: "2",
      title: "Cycle insurance",
      amount: "433.56",
      date: new Date(2023, 6, 23),
    },
    {
      id: "3",
      title: "Jeep insurance",
      amount: "345.56",
      date: new Date(2022, 9, 26),
    },
    {
      id: "4",
      title: "Bus insurance",
      amount: "345.56",
      date: new Date(2026, 5, 12),
    },
  ];

  const onAddExpenseHandler = (expense) => {
    console.log("Received data!!!!");
    console.log(expense);
    expenses.push(expense);
  };

  return (
    <div>
      <div>
        <NewExpense onAddExpense={onAddExpenseHandler}></NewExpense>
        <Expenses expenses={expenses}></Expenses>
      </div>
    </div>
  );
}

export default App;
