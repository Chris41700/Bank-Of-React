import './App.css';
import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'

function App() {
  const [accountBalance, setAccountBalance] = useState(14568.27)

  return (
    <browserRouter>
      <Routes>
        <Route path='/' element={<Home accountBalance={accountBalance}/>}/>
      </Routes>
    </browserRouter>
  )
}

export default App;
