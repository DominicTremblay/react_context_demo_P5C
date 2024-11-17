# L'API Context de React

L'API Context de React permet de **partager un état ou des données globales** (comme un thème, un utilisateur authentifié, ou des paramètres d'application) entre plusieurs composants sans avoir à passer les props manuellement à chaque niveau de la hiérarchie des composants.

Elle est composée de trois éléments principaux :

1. **createContext** : Crée un contexte qui contient les données partagées.
2. **Provider (Context.Provider)** : Enveloppe les composants et fournit les données aux composants enfants.
3. **Consumer (useContext)** : Permet à un composant d'accéder aux données du contexte.


## Structure de gestion de l'état

1. Custom Hook - contient la requete pour obtenir la liste de films de l'API
2. Reducer - pour centraliser la gestion de l'état
3. Context - Creation d'un contexte des données globales accessibles à tous les composants


