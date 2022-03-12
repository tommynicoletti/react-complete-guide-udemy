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
    <div className="expenses">
      <ExpensesFilter yearSelected={filteredYear}  onChangeYear={yearFilterHandler}  />
      <Card>
        {props.items.map((item, index) => {
          return (
            <ExpenseItem key={index} title={item.title} amount={item.amount} date={item.date} />
          );
        })}
      </Card>
    </div>
  );
}

export default Expenses;
