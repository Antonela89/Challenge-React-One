import React from 'react';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import Layout from './components/Layout';

const App = () => {

  return (
    <>
      <GlobalStyle/>
        <Router>
          <Layout>
            <Routes>
                <Route path='/' element={<Home/>}/>
              </Routes>
          </Layout>
        </Router>
    </>
  )
}

export default App
