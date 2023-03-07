# Hot-Takes - Piiquante

Project 6 - Openclassrooms

Développer une API sécurisée : "Piiquante" Basée sur Node.js, le framework Express, MongoDB et le plugin Mongoose.

Attentes :

Développer une API back-end conforme aux normes RGPD et OWASP. Chiffrer les mots de passe. Créer un utilisateur de base de données avec MongoDB Sécuriser la base de données avec MongoDB Atlas. Renforcer l'authentification sur toutes les routes. Stocker les mots de passe de manière sécurisée. Les adresses e-mail doivent être uniques et le plugin Mongoose doit être utilisé.

Ce que j'ai appris et implémenté :

Node.js et le framework Express pour le serveur. MongoDB et le plugin Mongoose pour la base de données. Développer une API avec une architecture de routes, de contrôleurs, de middleware et de modèles. Définir CRUD en fonction de la politique CORS (partage de ressources entre domaines). Multer pour gérer les données multipart/form-data et télécharger des fichiers. Bcrypt pour la fonction de hachage des mots de passe. Jsonwebtoken pour une authentification sécurisée. Mongoose pour la modélisation d'objets MongoDB. Password-validator pour s'assurer qu'un mot de passe fort est créé. Express-rate-limit pour limiter les demandes répétées aux API publiques.

#Frontend#

Prérequis :

1 - Clonez le repo: https://github.com/OpenClassrooms-Student-Center/Web-Developer-P6 (Créé par OpenclassClassrooms)

2 - Installez nodeJS :https://nodejs.org/en/download/

3 - npm run ng serve

#Backend#

Prérequis :

1 - Installez toutes les dépendances avec npm install

2 - Créez un fichier .env à la racine et ajoutez-y les clés suivantes et leurs valeurs secrètes :

DB_USER= DB_PASS= DB_TOKEN=

3 - Démarrez le serveur avec :

nodemon server

4 - Ouvrez votre navigateur : http://localhost:4200
