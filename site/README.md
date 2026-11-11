# Hirakode

Site du studio Hirakode. Direction artistique inspirée de Metalab, présentation métier inspirée de Faculty, palette **B5 — Nuit, or et argent**.

## Exécuter

Node.js 22.18+ ou version LTS plus récente, pnpm.

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Aperçu : <http://127.0.0.1:4320>.

```sh
pnpm typecheck
pnpm lint
pnpm test
pnpm build
```

Le build statique est dans `out/`. Pour le consulter sans serveur Next.js :

```sh
python -m http.server 4321 --bind 127.0.0.1 --directory out
```

## Structure

- `src/app` : accueil, projets, trois études de cas, expertises, studio, contact, crédits et page 404 ; métadonnées, sitemap, robots et image sociale.
- `src/lib/content.ts` : contenus, équipe, offres et projets.
- `src/lib/brief.ts` : validation et préparation du mailto.
- `src/components` : navigation, pied de page, scène 3D et composants éditoriaux.
- `src/app/globals.css` : tokens B5 et composants Tailwind via `@apply` ; animations et adaptations responsive.
- `docs/PLAN.md` : plan rédigé avant implémentation.
- `docs/ASSETS.md` : sources et crédits.
- `docs/VALIDATION.md` : contrôles effectués et limites.

## Comportement

Le formulaire prépare un e-mail vers **contact@hirakode.com** et permet de copier le brief. L’utilisateur relit puis envoie depuis sa messagerie. Le site n’envoie rien automatiquement, ne stocke pas les réponses et ne nécessite ni clé API ni base de données. Une intégration d’envoi serveur peut être ajoutée si ce fonctionnement est souhaité.

La scène Three.js est chargée séparément. Son animation s’arrête hors écran, dans un onglet masqué, à la demande via le bouton pause ou quand le système demande de réduire les animations. Un symbole SVG reste visible si WebGL est indisponible. Le menu utilise un dialogue natif pour le focus et la fermeture au clavier.

## Avant une publication

Les URL canoniques utilisent `https://hirakode.com`, en cohérence avec l’adresse communiquée. Confirmer le domaine de publication et les informations légales de l’entreprise au moment de la mise en ligne. Les mentions légales ne sont pas inventées dans cette version. Le contenu éditorial et les rôles sont prêts à relire avec les trois associés.

Le dépôt source est disponible sur [GitHub](https://github.com/Hirakode/hirakode). Aucun déploiement n’a été réalisé.
