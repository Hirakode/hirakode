# Validation — 11 novembre 2026

## Contrôles techniques

- TypeScript strict : réussi.
- ESLint : réussi, sans avertissement sur le code.
- Tests du brief : 4 réussis (champs obligatoires, limites de longueur, encodage des caractères spéciaux, destinataire fixe et prévention de l’ajout de paramètres de messagerie).
- Build Next.js statique : réussi ; pages, trois paramètres de projet, sitemap, robots et image sociale générés.
- Références locales de l’export : 321 références HTML examinées, aucune cible manquante.
- Audit pnpm : aucune vulnérabilité connue, dépendances de développement comprises, après mise à jour de la dépendance transitive `minimatch` via l’override généré par `pnpm audit --fix=override`.
- ESLint 9 est conservé pour respecter les plages de compatibilité des plugins React, import et accessibilité fournis par la configuration Next.js. La migration vers ESLint 10 attend leur compatibilité déclarée.
- Snyk Code : **non exécuté avec succès**. Le premier appel a signalé une session non authentifiée ; la tentative `snyk_auth` a échoué. Aucun résultat Snyk favorable n’est présumé.

## Contrôles navigateur

Effectués dans le navigateur intégré avec le site local :

- Accueil, rendu réel de la scène WebGL, navigation vers les projets et les autres pages.
- Index et trois études de cas : titres, textes, images chargées, liens « projet suivant » et retour à l’index.
- Page du studio : trois associés et leurs expertises.
- Expertises : ouverture d’une réponse de FAQ et préselection « Transformer nos pratiques » dans le contact depuis le lien de l’offre.
- Contact vide : messages d’erreur lisibles et focus sur le premier champ concerné.
- Contact renseigné avec données fictives : aperçu du message et URI mailto correctement encodée vers `contact@hirakode.com`. Aucun e-mail envoyé.
- Menu : ouverture, fermeture, Échap et retour du focus au déclencheur ; Tab / Maj+Tab restent dans les liens et boutons du dialogue.
- Pause des animations : état accessible mis à jour, scène arrêtée et menu visible même lorsque le mouvement est désactivé.
- Tailles 320 × 740, 390 × 844 et 768 × 1024 : pas de débordement horizontal observé. Captures mobile et tablette conservées dans `docs/screenshots/`.
- Journal du navigateur : aucune erreur applicative observée. L’avertissement Next.js sur le défilement doux a été corrigé avec `data-scroll-behavior`.
- Export de production servi par un serveur HTTP statique : accueil → index → GeoDataViz validé dans le navigateur, sans erreur ni avertissement dans la console. L’image sociale générée a été inspectée visuellement.

La préférence système `prefers-reduced-motion` et le fallback sans WebGL sont implémentés et relus dans le code. La préférence système de la machine n’a pas été modifiée pour les tests. La copie du brief et l’ouverture effective d’une application de messagerie restent dépendantes des permissions et des applications du visiteur ; le texte du message reste toujours sélectionnable.

## Finition métallique du visuel d’accueil

- Scène Three.js : environnement de studio calculé au chargement, éclairages rectangulaires, texture directionnelle partagée, faces argent/or brossées et biseaux polis. Aucune dépendance ajoutée.
- TypeScript et build statique : réussis sur la version finale ; les quatre tests existants restent réussis.
- Accueil vérifié sur ordinateur et à 390 × 844 : scène WebGL chargée, aucun débordement horizontal et aucune erreur ou alerte dans la console.
- Commandes de pause et de reprise vérifiées dans le navigateur. Le chargement différé, le fallback SVG et les conditions d’arrêt des animations sont conservés.
- Captures : `screenshots/home-metal-desktop.jpg` et `screenshots/home-metal-mobile.jpg`.
- Snyk Code tenté : toujours bloqué par l’absence d’authentification ; aucun résultat de sécurité favorable n’est présumé.

## Transformation IA — 17 novembre 2026

- Section d’accueil avant les projets, page `/transformation-ia/`, liens du menu, des expertises et du pied de page, métadonnées et sitemap intégrés.
- Contenu : usages explicitement présentés comme des pistes, démarche en quatre étapes avec livrables, pilote limité et décision de poursuite, accompagnement des équipes, FAQ transparente sur le lancement de l’offre. Les projets existants attestent du savoir-faire technique ; ils ne sont pas présentés comme des missions de transformation IA.
- TypeScript, ESLint, quatre tests existants du brief et build statique : réussis. Build refait après l’ajustement du bouton mobile.
- 430 références locales de l’export examinées : aucune cible ou ancre manquante ; route, sitemap et image sociale vérifiés.
- Navigateur : section présente avant les projets, lien vers la page dédiée, ancre de la démarche, ouverture de la FAQ, passage au contact avec le besoin transformation sélectionné et préparation d’un brouillon encodé avec données fictives. Aucun e-mail envoyé.
- Affichage ordinateur et mobile vérifié ; aucun débordement horizontal observé sur l’accueil à 320 et 768 pixels, ni sur la nouvelle page à 320 et 390 pixels. Bouton de l’accueil ajusté pour rester sur une ligne à 320 pixels.
- Menu à 320 pixels : cinq entrées accessibles, fermeture avec Échap et focus rendu au déclencheur. Aucun avertissement ni erreur applicative observé dans la console durant le parcours.
- Captures conservées : `screenshots/transformation-desktop.jpg` et `screenshots/transformation-mobile.jpg`.
- Snyk Code tenté : bloqué par l’absence d’authentification. Aucun résultat favorable n’est présumé. Aucune dépendance ajoutée.

## Limites de cette livraison locale

Pas de déploiement. Le domaine canonique est `hirakode.com` et l’adresse de contact a été confirmée par l’utilisateur. L’envoi est volontairement réalisé par la messagerie du visiteur : aucun backend, aucun stockage de formulaire et aucune fausse confirmation d’envoi.

Les informations administratives nécessaires aux mentions légales ne figuraient pas dans le brief. Elles restent à intégrer avant publication. Les offres et la rédaction constituent une première version complète à relire avec l’équipe.

## Refonte des projets — 17 novembre 2026

- Autotraders.ai ajouté en première position sur l’accueil et l’index, avec une fiche exportée à `/projets/autotraders/`. Le sitemap et la navigation entre fiches suivent les quatre projets.
- Présentation remplacée par quatre compositions propres aux produits et des récits centrés sur l’usage, les mécanismes IA/algorithmiques et les éléments vérifiables. Chiffre des utilisateurs actifs Autotraders confirmé par le porteur du projet ; aucun chiffre d’adoption attribué aux autres projets. Provenance détaillée dans `ASSETS.md`.
- `pnpm typecheck`, `pnpm lint`, `pnpm test` : réussis, 4 tests sur 4. `pnpm build` final réussi, 16 pages générées. `git diff --check` sans erreur. Les retouches finales sont uniquement des espacements CSS ; la compilation finale inclut le contrôle TypeScript.
- Export statique : 432 références locales `href`/`src` contrôlées, aucun fichier ou chemin manquant.
- Navigateur réel sur l’export : quatre fiches à 320 px, index à 320 / 390 / 820 / 1024 / 1440 px, sans débordement horizontal. Contrôle des limites des compositions : ticket Autotraders et légende séparés ; titre et panneau Ailleurs séparés. Ajustement des hauteurs minimales et du positionnement du schéma sur les fiches.
- Contrôle visuel sur ordinateur et mobile : schéma Autotraders, composition WhalingView, export cartographique GeoDataViz et photo Ailleurs. Vérification spécifique de la fiche Autotraders à 1024 px après correction de l’espacement de sa légende.
- Liens de projet ouverts, parcours fiche → contact vérifié : `?besoin=solutions`, radio « Créer une solution » sélectionnée. Accueil : quatre projets. Page transformation IA : quatre liens en grille de deux colonnes sur ordinateur.
- Démonstration publique GeoDataViz ouverte ; export natif PNG réalisé depuis le preset Néon cyan. Le média sert à la nouvelle présentation avec les sources et l’amplification du relief indiquées.
- Aucun avertissement ni erreur dans la console du navigateur de prévisualisation pendant les vérifications.
- Captures : `screenshots/projects-desktop.jpg`, `screenshots/projects-mobile.jpg`, `screenshots/projects-geodataviz.jpg`.
- Scan `snyk_code_scan` tenté : bloqué par l’absence d’authentification (« User not authenticated. Please run snyk_auth first »). Aucune conclusion Snyk sur la sécurité.
- Aucune nouvelle dépendance, aucun commit, push ou déploiement. Serveur local de contrôle arrêté en fin de tâche.
