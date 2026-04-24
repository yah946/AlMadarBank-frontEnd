# 💳 AlMadar Bank — Frontend E-Banking

## 📌 Description

Ce projet est une application frontend développée dans le cadre de la plateforme e-banking d'AlMadar Bank.

L'objectif est de consommer une API REST sécurisée (JWT) afin de permettre aux utilisateurs de :

* Se connecter à leur compte
* Consulter leurs comptes bancaires
* Visualiser l'historique des transactions
* Effectuer des virements

⚠️ Le backend est déjà fourni.

---

## 🚀 Fonctionnalités

### 🔐 Authentification

* Connexion utilisateur (JWT)
* Stockage du token
* Protection des routes
* Déconnexion sécurisée

### 🏦 Gestion des comptes

* Liste des comptes utilisateurs
* Affichage :

  * type de compte
  * solde
  * statut (ACTIVE / BLOCKED / CLOSED)

### 📊 Détail d’un compte

* Informations du compte
* Historique des transactions

### 💸 Virements

* Création de virement
* Statuts :

  * PENDING
  * COMPLETED
  * FAILED
* Gestion des erreurs métier :

  * solde insuffisant
  * compte bloqué
  * limite atteinte

---

## 🧱 Stack Technique

* Framework : Vue
* HTTP Client : Axios / Fetch
* Routing : Vue Router
* Auth : JWT
<!-- * State Management : (optionnel) -->

---

## 📁 Structure du projet

```
src/
│── components/
│── pages/
│   ├── Login
│   ├── Dashboard
│   ├── AccountDetails
│   └── Transfer
│── services/
│   └── api.js
│── utils/
│── App.js
│── main.js
```

---

## ⚙️ Installation

```bash
# Cloner le projet
git clone https://github.com/yah946/AlMadarBank-frontEnd.git

# Installer les dépendances
npm install

# Lancer le projet
npm run dev
```

---

## 🔑 Authentification

Après connexion :

* Un token JWT est stocké (localStorage ou cookie)
* Chaque requête API inclut :

```
Authorization: Bearer <token>
```

---

## 🔒 Sécurité

* Routes protégées (redirection vers `/login` si non authentifié)
* Gestion des tokens expirés
* Intercepteur HTTP pour les requêtes

---

## 📡 API utilisée

### Auth

* `POST /api/auth/login`
* `POST /api/auth/logout`

### Comptes

* `GET /api/accounts`
* `GET /api/accounts/:id`

### Virements

* `POST /api/transfers`

---

## 🧪 Tests

Tests manuels réalisés sur :

* Connexion invalide
* Accès sans token
* Token expiré
* Virements avec erreurs métier

---

## 👨‍💻 Auteur

Développé dans le cadre d’un projet frontend e-banking.

---

## 📄 Licence

Ce projet est destiné à un usage pédagogique.