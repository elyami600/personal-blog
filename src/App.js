//import logo from './logo.svg';
import './App.css';
import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Blog from './BlogPage'
import NavigationBar from './Nav';

function App() {
  return (
    <div className="App">
      <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={ <Blog />} />
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
    </Router>
    
    </div>
  );
}

export default App;

