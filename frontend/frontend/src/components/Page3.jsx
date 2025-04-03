import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './page3.css';

const Page3 = () => {
    const navigate = useNavigate();
    const [cart, setCart] = useState([]);

    // Données de plats améliorées
    const dishes = [
        {
            id: 1,
            type: 'Entrée',
            title: 'Salade Niçoise',
            price: 4.50,
            description: 'Salade composée avec thon, œuf, tomates'
        },
        {
            id: 2,
            type: 'Plat',
            title: 'Poulet rôti',
            price: 6.50,
            description: 'Poulet fermier avec pommes de terre rôties'
        },
        {
            id: 3,
            type: 'Plat',
            title: 'Pâtes Carbonara',
            price: 5.20,
            description: 'Pâtes fraîches avec sauce crème et lardons'
        },
        {
            id: 4,
            type: 'Dessert',
            title: 'Tarte aux pommes',
            price: 3.00,
            description: 'Tarte maison avec pommes du verger'
        }
    ];

    const entrees = dishes.filter(dish => dish.type === 'Entrée');
    const plats = dishes.filter(dish => dish.type === 'Plat');
    const desserts = dishes.filter(dish => dish.type === 'Dessert');

    const addToCart = (dish) => {
        setCart([...cart, dish]);
    };

    const handleConfirmation = () => {
        navigate('/reservation');
    };

    const total = cart.reduce((sum, item) => sum + item.price, 0);

    return (
        <div className="menu-container">
            <div className="header">
                <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/e/e0/Logo_Crous_vectoris%C3%A9.svg" 
                    alt="Logo CROUS" 
                    style={{ height: '40px' }}
                />
            </div>

            <div className="cart-float" onClick={() => console.log('Voir panier')}>
                <div className="cart-icon">
                    <span>{cart.length}</span>
                </div>
            </div>

            <div className="menu-content">
                {entrees.length > 0 && (
                    <>
                        <div className="section-header">Entrées</div>
                        {entrees.map((dish) => (
                            <div className="dish-item" key={dish.id}>
                                <div className="dish-details">
                                    <div className="dish-header">
                                        <div className="dish-title-price">
                                            <h3>{dish.title}</h3>
                                            <span>{dish.price.toFixed(2)}€</span>
                                            <p className="dish-description">{dish.description}</p>
                                        </div>
                                        <button 
                                            onClick={() => addToCart(dish)} 
                                            className="add-to-cart"
                                        >
                                            <span>+</span> Ajouter
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </>
                )}

                {plats.length > 0 && (
                    <>
                        <div className="section-header">Plats Principaux</div>
                        {plats.map((dish) => (
                            <div className="dish-item" key={dish.id}>
                                <div className="dish-details">
                                    <div className="dish-header">
                                        <div className="dish-title-price">
                                            <h3>{dish.title}</h3>
                                            <span>{dish.price.toFixed(2)}€</span>
                                            <p className="dish-description">{dish.description}</p>
                                        </div>
                                        <button 
                                            onClick={() => addToCart(dish)} 
                                            className="add-to-cart"
                                        >
                                            <span>+</span> Ajouter
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </>
                )}

                {desserts.length > 0 && (
                    <>
                        <div className="section-header">Desserts</div>
                        {desserts.map((dish) => (
                            <div className="dish-item" key={dish.id}>
                                <div className="dish-details">
                                    <div className="dish-header">
                                        <div className="dish-title-price">
                                            <h3>{dish.title}</h3>
                                            <span>{dish.price.toFixed(2)}€</span>
                                            <p className="dish-description">{dish.description}</p>
                                        </div>
                                        <button 
                                            onClick={() => addToCart(dish)} 
                                            className="add-to-cart"
                                        >
                                            <span>+</span> Ajouter
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </>
                )}
            </div>

            <button 
                onClick={handleConfirmation} 
                className="confirm-order"
                disabled={cart.length === 0}
            >
                Valider la commande ({total.toFixed(2)}€)
            </button>
        </div>
    );
};

export default Page3;