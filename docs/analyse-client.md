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

## 4. **Explications techniques**

- **Documentation** claire sur la structure de la BDD, y compris un MCD (Modèle Conceptuel de Données) et un MLD (Modèle Logique de Données).
- Explication détaillée de l’**organisation de la BDD** et des **étapes à suivre** pour ajouter et gérer les quiz dans psql.

## 5. **Autres précisions**

- **Aucune interface graphique** pour gérer la BDD côté client (psql suffira), mais des **explications** doivent être fournies.
- Pas de besoin de **panneau d’administration** pour la gestion des quiz.
- Un **filtre de difficulté** pour chaque quiz (ex. facile, moyen, difficile).
- Pas de besoin de **stockage des résultats** dans la BDD, les résultats sont visibles par l'élève après chaque quiz mais ne sont pas enregistrés.

## 6. **Extras (selon certains pitchs)**

- Possibilité d’ajouter de nouveaux quiz (fonctionnalité à développer ?).
- Pas de **gestion des résultats** côté plateforme, juste un affichage temporaire.

Ces éléments permettent de bien cerner les attentes du client : une plateforme de quiz simple avec une gestion claire des quiz et des utilisateurs, mais sans trop de complexité pour la gestion technique ou l'interface utilisateur. La BDD doit être bien structurée, mais la plateforme elle-même n’a pas besoin de fonctionnalités avancées pour le client.
