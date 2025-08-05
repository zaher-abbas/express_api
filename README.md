```markdown
# Express API Intro

Une API REST simple construite avec Express.js pour gérer des livres.

## Installation

1. Cloner le projet
```
git clone <url-du-repo>
cd express-intro
```
2. Installer les dépendances
```
npm install
```
3. Démarrer le serveur
```
npm start
```
Le serveur sera disponible sur `http://localhost:3000`

## API Endpoints

### Books
- `GET /books` - Récupérer tous les livres
- `GET /books?limit=2` - Limiter le nombre de résultats
- `GET /books?category=fanstasy` - Filtrer les livres par ses category
- `GET /books/:id` - Récupérer un livre par ID
- `POST /books` - Créer un nouveau livre
- `PUT /books/:id` - Mettre à jour un livre
- `DELETE /books/:id` - Supprimer un livre

## Exemple d'utilisation

### Créer un livre
```
POST /books
Content-Type: application/json

{
  "id": 4,
  "title": "Nouveau Livre",
  "author": "Auteur"
}
```
### Récupérer les livres avec limite
```
GET /books?limit=2
```
## Technologies

- Node.js LTS v22.18.00 (géré par NVM)
- Express.js 5.1.0
- Nodemon (développement)

## Scripts

- `npm start` - Démarre le serveur avec nodemon (rechargement automatique)
   Le script "start" dans package.json:
```
```json
"type": "module",
"scripts": {
  "start": "nodemon index.js"
}
```
