import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'

function App() {
  <>
    return (
      <Routes>
        <Route>
          <Route exact path="/" component={Home}/>
        </Route>
      </Routes>
    )
  </>
}

export default App;
