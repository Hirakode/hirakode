# Hirakode — plan de conception et de réalisation

## Intention

Construire un site de studio indépendant qui donne envie de travailler avec Hirakode et permet de comprendre rapidement ses deux métiers : développer des solutions IA et accompagner leur adoption en entreprise. Les références absolues sont Metalab pour la direction artistique, l’échelle, les transitions et la place du travail ; Faculty pour la clarté des expertises et le lien entre technologie et usages.

## Système visuel

- Palette unique B5, définie dans `Organisation-Entreprise/logoCreation/pallettesCouleurs/B5-nuit-or-argent.md` : nuit `#111013`, bordeaux `#7D1A33`, or `#D2AE62`, argent `#C0C4CA`, blanc cassé `#F5F0EE`. Les variantes autorisées servent uniquement les contrastes et le rendu métallique. Les captures des produits gardent leurs couleurs propres.
- Titres : Instrument Serif, très grands, interlignage serré. Texte et interface : Manrope. Polices hébergées localement.
- Logo : deux chevrons angulaires formant un hexagone, barre centrale bordeaux ; Hirakode, avec H majuscule uniquement, accompagné de « solutions ».
- Composition : marges généreuses, lignes fines, alternance nuit / blanc cassé / bordeaux, pas de grille de cartes interchangeable.

## Parcours et pages

1. `/` : navigation flottante ; scène 3D métallique ; promesse métier ; accès aux projets ; sélection éditoriale de trois réalisations ; deux expertises ; démarche en quatre étapes ; équipe de trois associés ; grand appel au contact.
2. `/projets` : index visuel complet et accès aux études de cas.
3. `/projets/whalingview`, `/projets/geodataviz`, `/projets/travelideas` : contexte, problème, réponse produit, fonctionnalités vérifiées, images, compétences et projet suivant. Aucun résultat commercial inventé.
4. `/expertises` : développement de solutions et transformation IA, exemples de cas d’usage et livrables, FAQ.
5. `/studio` : posture, trois personnes et complémentarité produit / ingénierie / data.
6. `/contact` : brief guidé avec validation ; lien mailto vers l’adresse validée `contact@hirakode.com` ; copie possible du brief ; aucun envoi simulé.
7. Page introuvable utile, métadonnées par page, sitemap, robots et image sociale locale.

## Mouvement

- Scène 3D originale : chevrons argent et or, éclairage de studio, mouvement lent et réponse au pointeur ; barre centrale mate.
- Menu plein écran avec typographie monumentale, transitions au survol, focus maîtrisé, fermeture clavier.
- Apparitions au défilement, léger parallaxe des médias, liens et curseurs contextuels natifs.
- Pas de défilement forcé. Respect de `prefers-reduced-motion`, mode pause explicite, version statique en absence de WebGL ; pause hors écran et onglet masqué.

## Construction

Next.js App Router, TypeScript strict, Tailwind CSS, contenu structuré local, composants serveur par défaut. GSAP limité aux révélations et Three.js chargé séparément pour la scène. Export statique : le site ne dépend d’aucune base de données ni d’un service d’envoi.

Les sources des projets restent inchangées. Les captures sont réalisées sur les versions locales et intégrées au portfolio. Les crédits et licences des ressources sont conservés dans `docs/ASSETS.md`.

## Validation et livraison

- Typecheck, ESLint, build de production et tests ciblés du brief / des données de navigation.
- Analyse Snyk Code des nouveaux fichiers et audit des dépendances.
- Revue navigateur de l’accueil, du menu, des trois études de cas et du formulaire ; contrôle des tailles réduites, clavier et animations réduites lorsque les outils de preview l’autorisent.
- Documentation d’exécution et aperçu local vérifié. Aucun commit, push ou déploiement sans instruction supplémentaire.

## État

Plan établi le 11 novembre 2026 avant implémentation. Adresse de contact confirmée par l’utilisateur. La palette B5 est retenue parmi les quatre options locales pour sa cohérence avec la référence Metalab.

Implémentation locale terminée le même jour. Voir `VALIDATION.md` pour les vérifications et la limite d’authentification Snyk. L’export prêt à héberger est produit dans `out/`.
