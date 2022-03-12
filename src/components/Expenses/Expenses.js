import React, {useState} from 'react';
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from './ExpensesList';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');
  const yearFilterHandler = (data) =>{
    setFilteredYear(data);
  }
  const filteredExpenses = props.items.filter(expense=>expense.date.getFullYear().toString()===filteredYear);

  return (
    <div>
      <Card  className="expenses">
        <ExpensesFilter yearSelected={filteredYear}  onChangeYear={yearFilterHandler}  />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
