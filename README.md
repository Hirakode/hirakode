# Hirakode

Site du studio Hirakode : développement de solutions IA et transformation IA des entreprises.

L’application Next.js se trouve dans [`site/`](site/). Le dossier [`research/`](research/) conserve les références visuelles et les captures des trois projets présentés.

## Démarrer

Node.js 22.18+ ou une version LTS plus récente, avec pnpm.

```sh
cd site
pnpm install --frozen-lockfile
pnpm dev
```

Aperçu local : <http://127.0.0.1:4320>.

Voir la [documentation du site](site/README.md), le [plan de conception](site/docs/PLAN.md) et les [contrôles réalisés](site/docs/VALIDATION.md).

Pour un hébergement, utiliser `site/` comme répertoire racine du projet. `pnpm build` génère l’export statique dans `site/out/`.
