import React, {useState} from 'react';
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState(2019);
  const yearFilterHandler = (data) =>{
    console.log(data);
    setFilteredYear(data);
  }
  return (
    <div>
      <Card  className="expenses">
        <ExpensesFilter yearSelected={filteredYear}  onChangeYear={yearFilterHandler}  />
        {props.items.map((expense, index) => {
          return (
            <ExpenseItem key={index} title={expense.title} amount={expense.amount} date={expense.date} />
          );
        })}
      </Card>
    </div>
  );
}

export default Expenses;
