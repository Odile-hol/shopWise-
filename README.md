# ShopWise 🇨🇲 - Centralisateur Intelligent d'E-commerce

ShopWise est une plateforme innovante conçue pour résoudre la fragmentation du marché e-commerce au Cameroun. Notre mission est d'offrir une interface unique qui centralise les produits, garantit la fiabilité des vendeurs et apporte une transparence totale sur les coûts.

---

## 🏛️ Architecture Logicielle

Dans le cadre de ce projet de **Software Architecture**, nous avons adopté une structure modulaire inspirée de la **Clean Architecture**. Cela permet une séparation stricte des responsabilités, facilitant le travail collaboratif en équipe.

### 📂 Organisation du Code
- **Core (`/lib/core`)** : Services transversaux (Gestion des appels API, Thèmes, Utilitaires).
- **Models (`/lib/models`)** : Définition des entités métiers (Produits, Vendeurs, Utilisateurs).
- **Screens (`/lib/screens`)** : Couche présentation (UI) développée avec Flutter.
- **Assets (`/assets`)** : Ressources graphiques et identité visuelle (Logo Skylis, Patterns).

---

## 🛠️ Fonctionnalités Clés

### 1. Centralisation Multi-sites
ShopWise agrège les catalogues de sites e-commerce locaux fiables (ex: Glotelho, Jumia, plateformes vérifiées) pour éviter à l'utilisateur de multiplier les recherches sur plusieurs sites.

### 2. Filtrage Géographique (Localisation)
Optimisation de l'expérience d'achat par ville (**Douala, Yaoundé, Bafoussam**, etc.). Les produits sont filtrés pour réduire les délais et les coûts logistiques.

### 3. Calcul du Coût Total Réel
Contrairement aux sites classiques, ShopWise intègre un estimateur qui affiche le prix du produit **frais de livraison inclus** selon la ville de destination.

### 4. Badge "Vendeur Vérifié"
Pour contrer les risques d'arnaques, chaque boutique passe par un processus de vérification de fiabilité avant d'obtenir le badge de certification ShopWise.

---

## 👥 Travail en Équipe & Collaboration

Pour ce projet, nous utilisons les bonnes pratiques de développement logiciel :
* **GitFlow** : Gestion des branches pour éviter les conflits (Main, Develop, Feature branches).
* **Documentation** : Commentaires standardisés pour faciliter la reprise du code par chaque membre.
* **Agilité** : Découpage du projet en modules (Service API, Design UI, Logique Métier).

---

## 🚀 Installation

1. **Cloner le dépôt :**
   ```bash
   git clone [https://github.com/Odile-hol/shopWise-.git](https://github.com/Odile-hol/shopWise-.git)
