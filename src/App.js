import "./App.css";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import UserProfile from "./components/UserProfile";
import LogIn from "./components/LogIn";
import Debits from "./components/Debits";
import Credits from "./components/Credits";

function App() {
  const [accountBalance, setAccountBalance] = useState(14568.27);
  const [currentUser, setCurrentUser] = useState({ userName: "bob_loblaw", memberSince: '08/23/99' });
  const [debits, setDebits] = useState([]);
  const [credits, setCredits] = useState([]);

  const mockLogIn = (logInInfo) => {
    const newUser = {...currentUser};
    newUser.userName = logInInfo.userName;
    setCurrentUser(newUser);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home accountBalance={accountBalance}/>}/>
        <Route path="/userProfile" element={<UserProfile userName={currentUser.userName} memberSince={currentUser.memberSince}/>}/>
        <Route path='/login' element={<LogIn user={currentUser} mockLogIn={mockLogIn}/>}/>
        <Route path="/debits" element={<Debits accountBalance={accountBalance} setAccountBalance={setAccountBalance} setDebits={setDebits} debits={debits}/>}/>
        <Route path="/credits" element={<Credits accountBalance={accountBalance} setAccountBalance={setAccountBalance} setCredits={setCredits} credits={credits}/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
