# Analyse client

Voici une synthèse des besoins clients ressortis des pitchs :

## 1. **Structure de la plateforme**

- **Public cible** : Élèves d'un établissement scolaire.
- **Pages principales** :
  - Page de **connexion** pour les élèves (formulaire de login).
  - Page **choix du quiz** avec des options de filtres (thématique, niveau de difficulté, auteur, sujet).
  - Page **quiz** avec les questions et réponses possibles.
  - Page **résultats** avec un récapitulatif du score, mais **sans stockage des résultats** (résultats éphémères).

## 2. **Contenu des quiz**

- Chaque **quiz** aura :
  - Un **titre**.
  - Une **thématique** (ex. culture générale, cosmologie, informatique).
  - Un **auteur** (le créateur du quiz).
  - Des **questions** avec des **réponses possibles**.
  - Un **niveau de difficulté** (par exemple de facile à difficile).

## 3. **Base de données (BDD)**

- Utilisation de **psql** pour gérer la BDD.
- **Tables nécessaires** :
  - Une table pour les **quiz** : contenant titre, auteur, questions, réponses, etc.
  - Une table pour les **utilisateurs** (élèves) : contenant les identifiants de connexion (nom, prénom, email, mot de passe, rôle).
  - Une table pour les **thématiques** : contenant les noms des thématiques des quiz.
  - Une table pour les **questions** : contenant l'intitulé, une anecdote sur la question.
  - Une table pour les **réponses**: contenant l'intitulé, si réponse valide.
  - Une table pour le **niveau de difficulté** : contenant le nom de la difficulté.
- Pas de besoin de **stockage des résultats** dans la BDD (les scores sont uniquement affichés à la fin du quiz, et sont éphémères).