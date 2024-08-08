import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState("")
  const [data,setData]=useState([])
  const [tSold,setTSold]=useState(0)
  const [tProfit,setTotalProfit]=useState(0)

  const Add=()=>{
    setData([...data,Number(count)])
    setCount("")
    setTSold(pre=>pre+Number(count))
    setTotalProfit(pre=>pre+(Number(count)-100))
  }

  return (
  <div>
    <h1>task 3</h1>
    <p>original price 100</p>

    <input type="number" placeholder='item price' onChange={(e)=>setCount(e.target.value)} value={count} />
    <button onClick={Add}>Add</button>

    <h3>Result</h3>
    <p>Sold price</p>
    <ul>
      {data.map((item,index)=>{
        <li key={index}>{item}</li>
      })}
    </ul>
    <p>Total Sold</p>
    <p>{tSold}</p>
    <p>Total Profit</p>
    <p>{tProfit}</p>
  </div>
  )
}

export default App
