import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Page3.css';
import Header from './Header';

const Page3 = () => {
    const navigate = useNavigate();
    const [cart, setCart] = useState(0);

    // Exemple de données de plats (à remplacer par vos données réelles)
    const dishes = [
        {
            type:'Entrée',
            title: 'Plat 1',
            price: '12.99€',
        },
        {
            type:'Plat',
            title: 'Plat 2',
            price: '14.50€',
        },
        {
            type:'Plat',
            title: 'Plat 3',
            price: '14.50€',
        },
        {
            type:'Dessert',
            title: 'Plat 2',
            price: '14.50€',
        }
    ];

    const entrees = dishes.filter(dish => dish.type === 'Entrée');
    const plats = dishes.filter(dish => dish.type === 'Plat');
    const accompagnement = dishes.filter(dish => dish.type === 'Agompagnement');
    const dessert = dishes.filter(dish => dish.type === 'Dessert');


    const addToCart = () => {
        setCart(cart + 1);
    };

    const handleConfirmation = () => {
        navigate('/reservation');
    };

    return (
        <div className="menu-container">
            <Header />
            <div className="cart-float">
                <div className="cart-icon">
                    <span>{cart}</span>
                </div>
            </div>
                        <div>
                        {entrees.length > 0 && (
                            <div className="menu-content">
                            <div className="grey-header">Entrées</div>
                            {entrees.map((dish, index) => (
                                <div className="dish-item" key={index}>
                                <div className="dish-details">
                                    <div className="dish-header">
                                    <div className="dish-title-price">
                                        <h3>{dish.title}</h3>
                                        <span>{dish.price}</span>
                                    </div>
                                    <button onClick={addToCart} className="add-to-cart">+</button>
                                    </div>
                                </div>
                                </div>
                            ))}
                            </div>
                        )}
                        {plats.length > 0 && (
                            <div className="menu-content">
                            <div className="grey-header">Plats</div>
                            {plats.map((dish, index) => (
                                <div className="dish-item" key={index}>
                                <div className="dish-details">
                                    <div className="dish-header">
                                    <div className="dish-title-price">
                                        <h3>{dish.title}</h3>
                                        <span>{dish.price}</span>
                                    </div>
                                    <button onClick={addToCart} className="add-to-cart">+</button>
                                    </div>
                                </div>
                                </div>
                            ))}
                            </div>
                        )}
                        {accompagnement.length > 0 && (
                            <div className="menu-content">
                            <div className="grey-header">Accompagnement</div>
                            {entrees.map((dish, index) => (
                                <div className="dish-item" key={index}>
                                <div className="dish-details">
                                    <div className="dish-header">
                                    <div className="dish-title-price">
                                        <h3>{dish.title}</h3>
                                        <span>{dish.price}</span>
                                    </div>
                                    <button onClick={addToCart} className="add-to-cart">+</button>
                                    </div>
                                </div>
                                </div>
                            ))}
                            </div>
                        )}
                        {dessert.length > 0 && (
                            <div className="menu-content">
                            <div className="grey-header">Desserts</div>
                            {dessert.map((dish, index) => (
                                <div className="dish-item" key={index}>
                                <div className="dish-details">
                                    <div className="dish-header">
                                    <div className="dish-title-price">
                                        <h3>{dish.title}</h3>
                                        <span>{dish.price}</span>
                                    </div>
                                    <button onClick={addToCart} className="add-to-cart">+</button>
                                    </div>
                                </div>
                                </div>
                            ))}
                            </div>
                        )}
                        </div>
            
            <button onClick={handleConfirmation} className="confirm-order">Confirm order</button>
            
    </div>
    );
};

export default Page3;