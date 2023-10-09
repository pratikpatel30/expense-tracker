import React  from 'react';
import Expenses from './components/Expenses/Expenses';

import NewExpense from './components/NewExpense/NewExpense';

function App() {
  // let expenseDate = new Date(2021, 3, 28);
  // let expenseTitle = "School Fee";
  // let expenseAmount = 300;
  // make one array
  let expenses =[
    {
      id: 'e1',
      title: 'School Fee',
      amount: 250,
      date:new Date(2021, 5, 12)
    },
    {
      id: 'e2',
      title: 'Books',
      amount: 200,
      date:new Date(2021, 6, 22)
    },
    {
      id: 'e3',
      title: 'Food',
      amount: 20,
      date:new Date(2021, 7, 25)
    },
    {
      id: 'e4',
      title: 'Birthday Celebration',
      amount: 300,
      date:new Date(2021, 8, 10)
    }
  ];

  return (
    <div>
      <NewExpense />
      <Expenses item={expenses}/>
     
    </div>
  );
}

export default App;
