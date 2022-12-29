import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const initialData = [
  {
    id: 'e1',
    title: 'Cyberboard R3',
    // maker: 'Angry Miao',
    amount: 424.99,
    date: new Date(2022, 11, 10)
  },
  { 
    id: 'e2', 
    title: 'Bella 75', 
    // maker: 'KBDFans', 
    amount: 279.99, 
    date: new Date(2021, 10, 20) },
  {
    id: 'e3',
    title: 'Montex 27',
    // maker: 'Idobao',
    amount: 89.99,
    date: new Date(2020, 10, 2)
  },
  {
    id: 'e4',
    title: 'Tofu 65',
    // maker: 'KBDFans',
    amount: 199.99,
    date: new Date(2022, 9, 12)
  },
  {
    id: 'e5',
    title: 'Noname 65',
    // maker: 'KBDFans',
    amount: 19.99,
    date: new Date(2018, 7, 12)
  },
  {
    id: 'e6',
    title: 'Rama U80-A',
    // maker: 'KBDFans',
    amount: 349.99,
    date: new Date(2019, 12, 28)
  }
];

export default function App() {
  
  const [expenses, setExpenses] = useState(initialData);  

  const addExpenseHandler = expense => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]
    });
  };
  return (
    <div>
      <h2>Keebs World</h2>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}


