import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';
import Home from './pages/Home/Home';

const App: React.FC = () => {
  return (
    <Router>
      <main className='limiter'>
        <Routes>
          <Route path="/" element={ <Home /> } />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
