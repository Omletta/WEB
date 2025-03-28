import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Vendre from './Vendre.jsx';

const Feed = () => {
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:7777/api/dishes')
      .then(res => setDishes(res.data));
  }, []);

  return (
    <div className="feed-container">
        <Vendre 
            img="https://janedeboy-cdn.com/arts/1500/105587_3.jpg" 
            title="tongs Hawaï" 
            price="15€"
        />
        <Vendre 
            img="https://www.mycacatoes.fr/3900-large_default/morango-glitter-black.jpg" 
            title="tongs Dark" 
            price="90€"
        />
        <Vendre 
            img="https://mouckichatbloggueur.wordpress.com/files/2009/07/tong-chat.jpeg" 
            title="tongs chat" 
            price="8€"
        />
      {dishes.map((dish) => (
        <Vendre
          key={dish._id}
          img={dish.imageUrl}
          title={dish.name}
          price={`${dish.price.toFixed(2)} €`}
        />
      ))}
    </div>
  );
};

export default Feed;
