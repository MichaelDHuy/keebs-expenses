import React, { useState } from 'react';
import './Expenses.css'
import Card from '../UI/Card';

import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

export default function Expenses(props) {

  const [filteredYear, setFilteredYear] = useState('2022');

  const filterChangeHandler = function(selectedYear) {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>   
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} 
        />
        <ExpensesChart expenses={filteredExpenses} /> 
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}