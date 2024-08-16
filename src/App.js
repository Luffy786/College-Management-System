import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Performance from './components/Performance';
import Timetable from './components/Timetable';
import Notices from './components/Notices';
import Login from './components/Login';
import './styles.css';
import Layout from './components/Layout';

function App() {
  return (<Layout>
    <Router>
      <div>     
        <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/performance" element={<Performance />} />
          <Route path="/timetable" element={<Timetable />} />
          <Route path="/notices" element={<Notices />} />
          <Route path="/login" element={<Login />} />
          {/* Add more routes here as you create more components */}
        </Routes>
      </div>
    </Router>
    </Layout>
  );
}

export default App;
