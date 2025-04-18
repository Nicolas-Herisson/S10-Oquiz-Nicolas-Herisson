# Quizz

Création d'une application Quizz
Application SSR (Server Side Rendering)

Attention: Je n'ai pas créé le CSS, celui-ci m'a été fourni afin de nous concentrer sur les objectifs.

# Technos

- Argon2
- dotenv
- ejs
- email-validator
- password-validator
- express
- express-session
- postgreSQL
- Sequelize

# Objectif

- Création de wireframes
- Analyse des besoins
- Création d'un MCD et d'un MLD
- Création des users stories
  
## Pour la V1 des models
- Utilisation/creation des classes
- Utilisation d'héritage des classes
  
## Pour la V2 des models
- Découverte des models/associations de sequelize sans utilisations pour setup la BDD
  
- Utilisation des ejs partials
- Mise en place d'un système d'identification et d'authentification
- Utilisation d'argon2
- Utilisation d'email-validator et de password-validator
  

# Setup

A la racine du projet:

## Installer toutes les dépendances


```bash
pnpm i 
```

ou

```bash
npm i
```

## Définir les variables d'environnement

- Copier le .envExample, le renommer en .env et remplacer les valeurs par celles correspondantes.

## Créer la BDD

- Créer la BDD postgreSQL
- La remplir avec l'aide du fichier "./data/db.sql" (se connecter à la BDD, utiliser la commande `\i ./data/db.sql`)

## Setup de la BDD

- Avant de lancer le script, remplacer les arguments avec les données souhaitées, par exemple:
  psql -U "nomDeL'utilisateur" -d "nomDeLaBDD" -f data/create_tables.sql

```bash
pnpm db:reset
```

ou

```bash
npm run db:reset
```

## Démarrer le client

```bash
pnpm dev
```

ou

```bash
npm run dev
```