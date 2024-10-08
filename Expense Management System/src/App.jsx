import { useState } from 'react'
import './App.css'

function App() {
  let [amount, setAmount] = useState(0);
  let [type, setType] = useState("income");
  let [transaction, setTransactions] = useState([]);

  let handleTransactions = () => {
    console.log("amount=>", amount);
    console.log("type=>", type);
    setTransactions([...transaction, { amount, type }]);
    setAmount(0);
  };

  let totalIncome = transaction.reduce((acc, curr) => {
    return curr.type == 'income' ? acc + Number(curr.amount) : acc
  }, 0)

  let totalExpense = transaction.reduce((acc, curr) => {
    return curr.type == 'expense' ? acc + Number(curr.amount) : acc
  }, 0)

  let balance = totalIncome - totalExpense

  let delExpense = (index) => {

    let copy = [...transaction]
    copy.splice(index, 1)
    setTransactions(copy)

  }

  return (
    <>
      <h1>Expense Management System</h1>


        <div className='total-container'>
          <div>
            <p>Total Income</p>
            <p>{totalIncome}</p>
          </div>
          <div>
            <p>Total Expense</p>
            <p>{totalExpense}</p>
          </div>
          <div>
            <p>Balance</p>
            <p>{balance}</p>
          </div>
        </div>

        <div className='input-container'>


          <input
            onChange={(e) => setAmount(e.target.value)}
            value={amount}
            type="text"
            name=""
            id=""
          />
          <select
            onChange={(e) => setType(e.target.value)}
            value={type}
            name=""
            id=""
          >
            <option value="income">income</option>
            <option value="expense">expense</option>
          </select>
          <button onClick={handleTransactions}>Submit</button>
        </div>

        <div className='output-container'>
          <ul className='unorder-container'>
            {transaction.map((data, index) => {
              return (
                <li key={index} className='output-list'>
                  {data.amount} {data.type}
                  <button onClick={() => delExpense(index)}>Delete</button>
                </li>
              );
            })}
          </ul>

        
      </div>
    </>
  )
}

export default App
