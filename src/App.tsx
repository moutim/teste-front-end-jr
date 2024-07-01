import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './app.scss';
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={ <Home /> } />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
