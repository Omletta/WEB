# Application CROUS Villeurbanne 🍽️

Application web pour la gestion des repas au CROUS de Villeurbanne : consultation des menus en temps réel, composition de paniers et réservation de créneaux. 

## Fonctionnalités clés ✨
- **Menu dynamique** données scrapé depuis le site officiel
- **Panier interactif** avec ajout/suppression de plats et calcul automatique des points
- **Réservation intelligente** avec sélection d'horaire et confirmation
- **Système d'authentification** simplifié pour les utilisateurs
- Synchronisation en temps réel avec MongoDB Atlas
- Payez sur palce ;)

## Stack technique 🛠️
- **Frontend** : ReactJs
- **Backend** : Express.js + Mongoose + Axios
- **Base de données** : MongoDB Atlas 
- **Scraping** : Selenium (Python) + ChromeDriver
- **Styling** : CSS Modules + Responsive Design

## Amélioration 
Aprés longue discussion avce les differents organismes de gestion du crous il nous a été recommandé de proposer une solution scalable mais où le payment se ferait en physique. Nous souhaiterions don ner la possibilité aux utilisateur d'ouvrir l'application Izly directement depuis le navigateur pour afficher leur QR code.

## Installation 💻 : npm install pour installer les modules requis
 **Backend**
    node server.js

 **Fronfend**
    cd frontend/frontend
    npm run dev
 **Scraping du Menu**
    python scrap.py  # Vérifier le chemin de ChromeDriver
