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

## Limites de cette livraison locale

Pas de déploiement. Le domaine canonique est `hirakode.com` et l’adresse de contact a été confirmée par l’utilisateur. L’envoi est volontairement réalisé par la messagerie du visiteur : aucun backend, aucun stockage de formulaire et aucune fausse confirmation d’envoi.

Les informations administratives nécessaires aux mentions légales ne figuraient pas dans le brief. Elles restent à intégrer avant publication. Les offres et la rédaction constituent une première version complète à relire avec l’équipe.
