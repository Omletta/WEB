# Application CROUS Villeurbanne 🍽️

Application web pour la gestion des repas au CROUS de Villeurbanne : consultation des menus en temps réel, composition de paniers et réservation de créneaux. 

## Fonctionnalités clés ✨
- **Menu dynamique** données scrapé depuis le site officiel
- **Panier interactif** avec ajout/suppression de plats et calcul automatique des points
- **Réservation intelligente** avec sélection d'horaire et confirmation
- **Système d'authentification** simplifié pour les utilisateurs
- **Dashboard admin** pour la gestion des plats (API)
- Synchronisation en temps réel avec MongoDB Atlas
- Payez sur palce ;)

## Stack technique 🛠️
- **Frontend** : React 18 + Vite + React Router 6
- **State Management** : Context API + Local Storage
- **Backend** : Express.js + Mongoose + Axios
- **Base de données** : MongoDB Atlas avec schémas dynamiques
- **Scraping** : Selenium (Python) + ChromeDriver
- **Styling** : CSS Modules + Responsive Design

## Amélioration 
Aprés longue discussion avce les differents organismes de gestion du crous il nous a été recommandé de proposer une solution scalable mais où le payment se ferait en physique. Nous souhaiterions don ner la possibilité aux utilisateur d'ouvrir l'application Izly directement depuis le navigateur pour afficher leur QR code.

## Installation 💻

### Prérequis
- Node.js 18.x + Python 3.11+
- Compte MongoDB Atlas
- ChromeDriver compatible avec votre version de Chrome

### Configuration
1. **Clonage du projet**
    ```bash
    git clone https://github.com/votre-repo/crous-app.git && cd crous-app
2. **Créer un environnement pour proteger votre machine & Backend**
    cd server && npm install
    cp .env.example .env
    # Remplacer les valeurs dans .env
    npm run start
3. **Fronfend**
    cd ../client && npm install
    npm run dev
4. **Scraping du Menu**
    python scrap.py  # Vérifier le chemin de ChromeDriver