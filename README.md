# Triple Triad Deck Builder

## Description

Triple Triad Deck Builder est une application web développée dans le cadre d'un exercice pour gérer et organiser les cartes du jeu de plateau Triple Triad, introduit par SquareEnix dans Final Fantasy 8. L'objectif principal de cet exercice était de manipuler les données relatives aux cartes, de créer la base de données, et de mettre en place les fonctionnalités pour gérer les cartes et les decks en utilisant Node.js, Express, EJS, et PostgreSQL.

## Objectifs de l'Exercice

- **Manipulation des Données** : Travailler avec les données des cartes et mettre en place les fonctionnalités de gestion de ces données.
- **Création de la Base de Données** : Utiliser le fichier `data/create_db.sql` pour créer la base de données PostgreSQL nécessaire.
- **Développement des Fonctionnalités** : Implémenter des fonctionnalités telles que la recherche de cartes, la gestion des decks, etc.

## Technologies Utilisées

- **Node.js** : Environnement d'exécution JavaScript pour le côté serveur.
- **Express** : Framework web pour Node.js facilitant la gestion des routes et des requêtes HTTP.
- **EJS** : Moteur de templates pour générer du HTML dynamique côté serveur.
- **PostgreSQL** : Système de gestion de base de données relationnelle pour stocker les données des cartes et des decks.

## Fonctionnalités Implémentées

1. **Détail d'une Carte**
   - Affiche les informations complètes d'une carte lorsque l'on clique dessus depuis la page d'accueil.

2. **Recherche de Cartes**
   - Recherche des cartes par élément.

3. **Construction de Deck**
   - Permet de créer un deck de 5 cartes différentes.
   - Ajouter des cartes au deck depuis la vue des cartes.
   - Visualiser le deck actuel.
   - Supprimer des cartes du deck.

4. **Bonus**
   - Recherche par niveau (exact).
   - Recherche par valeur (au moins).
   - Recherche par nom (contient).

## Note sur le Design

Veuillez noter que le design de l'application n'a pas été réalisé dans le cadre de cet exercice. L'accent a été mis sur la manipulation des données, la création de la base de données et la mise en œuvre des fonctionnalités demandées.

## ScreenShot
### AFFICHAGE DES CARTES
![image](https://github.com/user-attachments/assets/fbf8d290-ed32-498a-af43-8c945ce5243b)

### SEARCH
![image](https://github.com/user-attachments/assets/acc9aebb-f520-4134-a55f-1d9a832dde3d)

### DECK 
![image](https://github.com/user-attachments/assets/edc71ef0-b81a-4dd0-a367-aac23bee33c0)


## Installation

### Prérequis

- Node.js
- PostgreSQL
- npm (ou yarn)

### Cloner le Dépôt

Clonez le dépôt sur votre machine locale :

```bash
git clone https://github.com/Benaat64/Triple-Triad-Deck-Builder.git
cd Triple-Triad-Deck-Builder
```
### Configuration de la Base de Données
1. Créez la base de données PostgreSQL en utilisant le fichier data/create_db.sql :
```bash
psql -U [votre_utilisateur] -d [votre_base_de_donnees] -f data/create_db.sql
```
2. Configurez les paramètres de connexion à la base de données dans le fichier .env. Exemple de configuration .env :
```bash
DB_HOST=localhost
DB_USER=your_username
DB_PORT=5432
DB_NAME=your_database_name
DB_PASSWORD=your_password
PORT=3000
```
### Installation des Dépendances
Installez les dépendances du projet :
```bash
npm install
```
### Démarrer le Serveur
Démarrez l'application :
```bash
npm start
```
## Utilisation
Après avoir démarré le serveur, ouvrez votre navigateur et allez à l'adresse http://localhost:3000 (ou au port que vous avez configuré dans le fichier .env) pour voir le site en action.

