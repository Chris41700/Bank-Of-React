import './App.css';
import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import UserProfile from './components/UserProfile'
import LogIn from './components/LogIn'

function App() {
  const mockLogIn = (logInInfo) => {
    const newUser = {...currentUser}
    newUser.userName = logInInfo.userNamesetCurrentUser(newUser)
  }

  const [accountBalance, setAccountBalance] = useState(14568.27)
  const [currentUser, setCurrentUser] = useState({ userName: "bob_loblaw", memberSince: '08/23/99' })

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home accountBalance={accountBalance}/>}/>
        <Route path="/userProfile" element={<UserProfile userName={currentUser.userName} memberSince={currentUser.memberSince}/>}/>
        <Route path='/login' element={<LogIn user={currentUser} mockLogIn={mockLogIn}/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
