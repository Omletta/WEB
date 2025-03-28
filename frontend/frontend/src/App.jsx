import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, Routes, Route } from 'react-router-dom';
import Page2 from './Page2';
import Page5 from './page5';

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
        <Route path="/" element={
          <>
            <h1>🍽️ Student Restaurant Menu</h1>
            
            <Link to="/login">
              <button style={{
                padding: '15px 30px',
                fontSize: '1.1em',
                backgroundColor: '#e30613',
                color: 'white',
                margin: '20px 0',
                borderRadius: '8px',
                cursor: 'pointer'
              }}>
                Connexion CROUS
              </button>
            </Link>

            <div>
              <h2>Dishes</h2>
              {dishes.map((dish) => (
                <div key={dish._id} style={{ border: '1px solid #ddd', margin: 10, padding: 10 }}>
                  <h3>{dish.name}</h3>
                  <p>{dish.description}</p>
                  <strong>{dish.price.toFixed(2)} €</strong><br />
                  <button onClick={() => addToTray(dish)}>Add to Tray</button>
                </div>
              ))}
            </div>

            <div>
              <h2>Your Tray</h2>
              {tray.map((dish, index) => (
                <div key={index}>{dish.name} - {dish.price.toFixed(2)} €</div>
              ))}
              <p>
                <strong>Total:</strong> {tray.reduce((total, dish) => total + dish.price, 0).toFixed(2)} €
              </p>
            </div>
          </>
        }/>
        
        <Route path="/login" element={<Page2 />} />
        <Route path="/confirmation" element={<Page5 />} />
      </Routes>
    </div>
  );
}

export default App;