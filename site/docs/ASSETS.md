# Sources et crédits

## Identité

Palette B5 « Nuit, or et argent », lue dans `/home/chibrus/dev/github/GaelMurtas/Organisation-Entreprise/logoCreation/pallettesCouleurs/`. Symbole reconstruit en SVG et en géométrie 3D à partir de la description de marque : chevrons angulaires, hexagone, barre centrale. Les rendus métalliques et les motifs de l’équipe sont des créations pour cette version du site.

Références de composition : [Metalab](https://www.metalab.com/) et [Faculty](https://faculty.ai/). Aucun code, logo, texte ou média de ces sites n’est repris.

## Captures des produits

| Fichier livré | Origine | Contenu et attribution |
| --- | --- | --- |
| `public/images/whalingview.webp` | `WhalingView/apps/web/public/marketing/dashboard-apercu.png` | Aperçu fourni dans le projet, explicitement marqué « données d’illustration ». Source locale : `/home/chibrus/dev/github/FlorianPascual/WhalingView`. |
| `public/images/geodataviz.webp` | Capture du 11 novembre 2026 de la version locale, port 4319 | Vue France, INSEE Filosofi 2021. Fonds Natural Earth, IGN 2026 et BD TOPAGE 2026 (IGN/OFB/Sandre). Source locale : `/home/chibrus/Documents/ChatGPT/GeoDataViz`. |
| `public/images/travelideas.webp` | Capture du 11 novembre 2026 de la version locale, port 4318 | Accueil Ailleurs, nom de produit de Travelideas. Photo de Lisbonne : [Unsplash, gwotR6GI0FA](https://unsplash.com/photos/gwotR6GI0FA), telle que créditée dans son README et sa page À propos. Source locale : `/home/chibrus/dev/github/FlorianPascual/travelideas`. |

Les captures originales sont conservées dans `../research/project-captures/`. Les fichiers web sont compressés en WebP. La capture Travelideas est recadrée à l’affichage sur l’accueil du produit. Aucun média distant n’est chargé à l’exécution.

## Polices

- Instrument Serif, via `@fontsource/instrument-serif` 5.3.0 : SIL Open Font License, fichier `node_modules/@fontsource/instrument-serif/LICENSE`.
- Manrope, via `@fontsource-variable/manrope` 5.3.0 : SIL Open Font License, fichier `node_modules/@fontsource-variable/manrope/LICENSE`.

Les polices sont incluses dans le build et servies localement. Les licences sont également recopiées dans `public/licenses/`.

## Contenu

Les descriptions s’appuient sur les README et les sources des quatre projets et sur les responsabilités partagées dans `Organisation-Entreprise/sharedFiles/responsabilites-projet.md`. Les fiches présentent des fonctionnalités documentées et une preuve d’adoption confirmée pour Autotraders. Aucun témoignage ni résultat financier n’est inventé. Les offres et textes de marque constituent une première proposition éditoriale pour Hirakode.


## Refonte des projets — 17 novembre 2026

Les captures dans un cadre de navigateur ont été remplacées par quatre compositions spécifiques, réalisées en HTML/CSS : parcours Telegram → IA → MetaTrader, déclarations et synthèse WhalingView, carte GeoDataViz immersive, photo et préférences Ailleurs. Les schémas sont étiquetés comme illustrations, sans opérations, rendements, classements chiffrés ou témoignages fictifs. Les éléments restent rendus côté serveur et n’ajoutent aucune dépendance.

| Ressource | Origine et emploi |
| --- | --- |
| `public/images/autotraders.png` | Copie de `autotraders_vitrine/og.png` ; image sociale de la fiche Autotraders. La présentation principale utilise le schéma HTML/CSS. |
| `public/images/geodataviz-relief.png` | Export PNG natif de [GeoDataViz](https://geodataviz.vercel.app/), effectué dans le navigateur le 17 novembre 2026 : France entière, résolution 16 km, preset Néon cyan, noms des communes désactivés. Hauteur : population ; couleur : pauvreté ; relief statistique amplifié. INSEE Filosofi 2021, Natural Earth, IGN 2026, BD TOPAGE 2026. L’export est conservé intact ; cadrage à l’affichage par CSS. |
| `public/images/lisbon.jpg` | Copie intacte de `travelideas/public/images/lisbon.jpg`, photographie [Unsplash gwotR6GI0FA](https://unsplash.com/photos/gwotR6GI0FA). Cadrage CSS uniquement. |

### Justification des éléments mis en avant

- **Autotraders : plus de 5 000 utilisateurs actifs.** Le site public annonce plus de 5 000 traders ; le porteur du projet a confirmé explicitement dans cette conversation qu’il s’agit d’utilisateurs actifs. Chiffre communiqué en novembre 2026, sans précision sur la fenêtre de mesure ; ne pas le transformer en utilisateurs actifs mensuels, clients payants ou comptes connectés. La mention de provenance et la date figurent dans la fiche. L’intégration LLM et le routage sont documentés dans `Copyguru/BotOnSteroids/README.md`, `nlp/gpt_processing.py` et `nlp/chat_processing.py` ; l’app dans `webapp-autotraders`.
- **WhalingView : synthèses IA ancrées dans les sources.** `WhalingView/pipeline/README.md`, `pipeline/src/wv_pipeline/llm/jobs/trade_explainer.py` et `pipeline/src/wv_pipeline/pulse/method.py`. Le score PulseV1 est descriptif et versionné ; aucune promesse de prédiction ou de performance boursière. Le pipeline prévoit contrôle des faits cités, journalisation et repli déterministe.
- **GeoDataViz : algorithmes et rendu 3D.** README et modules de rendu de `/home/chibrus/Documents/ChatGPT/GeoDataViz` : résolutions multiples, chargement par zones et rendu WebGL instancié. La démo publique a été ouverte et son export utilisé pour le visuel ; les fonctionnalités les plus récentes du dépôt peuvent différer de cette démo.
- **Ailleurs / Travelideas : 424 destinations dans 99 pays et territoires.** `travelideas/README.md` et `src/lib/travel/{destination-score,journey-score}.ts` : pondération des critères, coût, climat, temps utile, couverture et données manquantes. C’est un algorithme explicable, pas une intégration d’IA générative.

Le porteur du projet confirme que WhalingView, GeoDataViz et Travelideas n’ont pas encore d’utilisateurs. Leur statut « Produit exploratoire » est explicite. Leurs repères sont des caractéristiques du produit, jamais des preuves d’adoption. Les témoignages génériques trouvés dans les sources marketing Autotraders n’ont pas été repris, faute de provenance.
