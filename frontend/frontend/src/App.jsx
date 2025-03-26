import { useState, useEffect } from 'react';
import axios from 'axios';

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
      <h1>🍽️ Student Restaurant Menu</h1>

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
    </div>
  );
}

export default App;
