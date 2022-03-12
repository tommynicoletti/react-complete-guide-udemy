import React, {useState} from 'react';
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

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
        {filteredExpenses.length === 0 && <p>No expenses found.</p>}
        {filteredExpenses.length > 0 && 
          filteredExpenses.map((expense) => (
            <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
          ))}
      </Card>
    </div>
  );
}

export default Expenses;
