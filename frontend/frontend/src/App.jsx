import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, Routes, Route } from 'react-router-dom';
import Page2 from './components/Page2';
import Page5 from './components/page5';
import HomePage from './components/HomePage'

function App() {
  const [dishes, setDishes] = useState([]);
  const [tray, setTray] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:7777/api/dishes')
      .then(res => setDishes(res.data));
  }, []);

  const addToTray = (dish) => {
    setTray([...tray, dish]);
  };

  return (
    <div style={{ padding: 20 }}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Page2 />} />
        <Route path="/confirmation" element={<Page5 />} />
      </Routes>
    </div>
  );
}

export default App;