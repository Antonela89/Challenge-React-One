import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';

function App() {

  return (
    <>
        <GlobalStyle/>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>

        </Routes>
      </Router>
    </>
  )
}

export default App
