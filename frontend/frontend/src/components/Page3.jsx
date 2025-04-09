import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './Page3.css';
import Header from './Header';
import { CartContext } from './CartContainer';

const Page3 = () => {
    const navigate = useNavigate();
    const { addToCart, cartItems } = useContext(CartContext);
    const [menuData, setMenuData] = useState(null);
    const [structuredMenu, setStructuredMenu] = useState(null);

    useEffect(() => {
        fetch('http://localhost:7777/api/menu/today')
            .then(res => res.json())
            .then(data => {
                if (data && data.length > 0) {
                    setMenuData(data[0]);
                    const organized = organizeMenuFlexibly(data[0]);
                    setStructuredMenu(organized);
                }
            })
            .catch(err => console.error('Menu fetch error:', err));
    }, []);

    const organizeMenuFlexibly = (menu) => {
        const organized = {};
        let currentCategory = null;

        if (!menu.items || !Array.isArray(menu.items)) return organized;

        const categoryMarkers = [
            "Entrée",
            "Plat végétarien",
            "Plat viande ou/et poisson",
            "Accompagnement",
            "Dessert"
        ];

        menu.items.forEach(item => {
            const cleanItem = item.replace(/\n/g, ' ').trim();

            const isCategory = categoryMarkers.some(marker =>
                cleanItem.toLowerCase().includes(marker.toLowerCase())
            );

            if (isCategory) {
                const foundCategory = categoryMarkers.find(marker =>
                    cleanItem.toLowerCase().includes(marker.toLowerCase())
                );
                currentCategory = foundCategory;
                organized[currentCategory] = [];
            } else if (currentCategory && cleanItem) {
                organized[currentCategory].push(cleanItem);
            }
        });

        return organized;
    };

    const getPoints = (text, category) => {
        const match = text.match(/(\d+)\s*pt/);
        if (category === 'Accompagnement') return 0;
        return match ? parseInt(match[1], 10) : 0;
    };

    const renderMenuItem = (item, category, idx) => {
        const points = getPoints(item, category);
        const cleanTitle = item.replace(/(\d+\s*pts?)/i, '').trim();

        return (
            <div className="dish-card" key={`${category}-${idx}`}>
                <div className="dish-info">
                    <h4>{cleanTitle}</h4>
                    <p className="dish-price">{points} pt{points > 1 ? 's' : ''}</p>
                </div>
                <button
                    onClick={() => addToCart({
                        title: cleanTitle,
                        type: category,
                        price: points
                    })}
                    className="add-to-cart"
                >
                    +
                </button>
            </div>
        );
    };

    if (!menuData || !structuredMenu) {
        return (
            <div className="menu-container">
                <Header />
                <div className="loading">Chargement du menu...</div>
            </div>
        );
    }

    return (
        <div className="menu-container">
            <Header />
            <div className="menu-content">
                <h2 className="menu-title">Menu du jour - {menuData.date}</h2>

                {Object.entries(structuredMenu).map(([category, items]) => (
                    <div key={category} className="menu-section">
                        <h3 className="category-title">{category}</h3>
                        <div className="dishes-list">
                            {items.map((item, index) =>
                                renderMenuItem(item, category, index)
                            )}
                        </div>
                    </div>
                ))}

                {cartItems.length > 0 && (
                    <button
                        onClick={() => navigate('/reservation')}
                        className="confirm-button"
                    >
                        Valider mon panier ({cartItems.length})
                    </button>
                )}
            </div>
        </div>
    );
};

export default Page3;
