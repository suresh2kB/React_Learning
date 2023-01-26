import Expenses from "./components/Expenses/Expenses";

function App() {
  const expenses = [
    {
      id: "1",
      title: "Car insurance",
      amount: "345.56",
      date: new Date(2023, 2, 23),
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
      date: new Date(2022, 2, 23),
    },
    {
      id: "4",
      title: "Bus insurance",
      amount: "345.56",
      date: new Date(2026, 2, 23),
    },
  ];
  return (
    <div>
      <div>
        <h2>Let's get started Suresh bhai baki sab thik</h2>
        <h1>Hello</h1>
        <Expenses expenses={expenses}></Expenses>
      </div>
    </div>
  );
}

export default App;
