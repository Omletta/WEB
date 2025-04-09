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
    const [activeCategory, setActiveCategory] = useState(null);

    useEffect(() => {
        fetch('http://localhost:7777/api/menu/today')
            .then(res => res.json())
            .then(data => {
                if (data && data.length > 0) {
                    setMenuData(data[0]);
                    const organized = organizeMenuFlexibly(data[0]);
                    setStructuredMenu(organized);
                    setActiveCategory(Object.keys(organized)[0]);
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
                    <div className="dish-meta">
                        {points > 0 && (
                            <span className="dish-badge">
                                {points} pt{points > 1 ? 's' : ''}
                            </span>
                        )}
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                addToCart({
                                    title: cleanTitle,
                                    type: category,
                                    price: points
                                });
                            }}
                            className="add-to-cart"
                        >
                            <span>+</span>
                        </button>
                    </div>
                </div>
            </div>
        );
    };

    if (!menuData || !structuredMenu) {
        return (
            <div className="menu-container">
                <Header />
                <div className="loading-screen">
                    <div className="loading-spinner"></div>
                    <p>Chargement du menu...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="menu-container">
            <Header />
            
            <div className="menu-hero">
                <div className="hero-content">
                    <h1>Menu du jour</h1>
                    <p className="menu-date">{
  menuData.date ? (
    new Date(menuData.date).toString() !== 'Invalid Date' 
      ? new Date(menuData.date).toLocaleDateString('fr-FR', { 
          weekday: 'long', 
          day: 'numeric', 
          month: 'long' 
        })
      : menuData.date
  ) : 'Date non disponible'
}</p>
                </div>
                <div className="hero-overlay"></div>
            </div>

            <div className="menu-nav">
                {Object.keys(structuredMenu).map(category => (
                    <button
                        key={category}
                        className={`nav-item ${activeCategory === category ? 'active' : ''}`}
                        onClick={() => setActiveCategory(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div className="menu-content">
                {activeCategory && structuredMenu[activeCategory] && (
                    <div className="menu-section">
                        <div className="dishes-grid">
                            {structuredMenu[activeCategory].map((item, index) =>
                                renderMenuItem(item, activeCategory, index)
                            )}
                        </div>
                    </div>
                )}
            </div>

            {cartItems.length > 0 && (
                <button
                    onClick={() => navigate('/reservation')}
                    className="confirm-button floating-btn"
                >
                    <span className="cart-count">{cartItems.length}</span>
                    Valider mon panier
                    <span className="total-price">
                        {cartItems.reduce((sum, item) => sum + item.price, 0)} pts
                    </span>
                </button>
            )}
        </div>
    );
};

export default Page3;