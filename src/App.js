import './App.css';
import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Blog from './BlogPage';
import NavigationBar from './Nav';
import About from './AboutPage';

function App() {
  return (
    <Router>
      <div className="App">
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Blog />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
