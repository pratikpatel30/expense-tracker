
import ExpenseItem from "./components/ExpenseItem";


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
      <h2>Let's get Started</h2>
     <ExpenseItem 
     date={expenses[0].date} 
     title={expenses[0].title} 
     amount={expenses[0].amount}> 
     </ExpenseItem>

     <ExpenseItem 
    date={expenses[1].date} 
    title={expenses[1].title} 
    amount={expenses[1].amount}> 
     </ExpenseItem>

     <ExpenseItem 
     date={expenses[2].date} 
     title={expenses[2].title} 
     amount={expenses[2].amount}> 
     </ExpenseItem>

     <ExpenseItem 
     date={expenses[3].date} 
     title={expenses[3].title} 
     amount={expenses[3].amount}> 
     </ExpenseItem>
    </div>
  );
}

export default App;
