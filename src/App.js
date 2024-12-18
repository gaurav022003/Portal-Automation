// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './Context/AppContext';
import Homepage from './components/Homepage'; // Fixed import
import HomeLink from './components/HomeLink';
import Footer from './components/Footer';
import ApprovalProcess from './components/ApprovalProcess';
import SignIn from './components/SignIn';
import './App.css';

function App() {
  return (
    <AppProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/approval-process" element={<ApprovalProcess />} />
          <Route path="/HomeLink" element={<HomeLink />} />
        </Routes>
      </Router>
      <Footer />
    </AppProvider>
  );
}

export default App;