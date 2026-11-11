export const contactEmail = "contact@hirakode.com";

export const navigation = [
  { href: "/projets", label: "Nos projets", number: "01" },
  { href: "/expertises", label: "Nos expertises", number: "02" },
  { href: "/studio", label: "Le studio", number: "03" },
  { href: "/contact", label: "Parlons-en", number: "04" },
] as const;

export const projects = [
  {
    slug: "whalingview",
    name: "WhalingView",
    category: "Finance · Data engineering · Produit",
    shortCategory: "La donnée financière, décodée.",
    headline: "Faire émerger le signal.",
    intro: "Rendre les transactions déclarées par les initiés compréhensibles, explorables et utiles à l’analyse.",
    image: "/images/whalingview.webp",
    imageAlt: "Interface WhalingView avec indicateurs, transactions et analyse des initiés — données d’illustration",
    visualClass: "project-whaling",
    summary: "Un tableau de bord qui transforme des déclarations financières publiques en une lecture structurée des mouvements de marché.",
    context: "Les déclarations existent. Le sens reste à construire.",
    problem: "Suivre les opérations publiées par les dirigeants et autres initiés demande de rapprocher des sources, de comprendre les transactions et de garder leur contexte. Une liste de chiffres seule ne suffit pas.",
    response: "WhalingView rassemble ces déclarations dans un produit lisible : transactions normalisées, sociétés suivies, filtres et explications en français. La donnée reste au premier plan ; l’interface aide à la lire.",
    features: [
      { title: "Structurer", text: "Rassembler les déclarations publiques et homogénéiser les informations pour faciliter leur exploration." },
      { title: "Mettre en contexte", text: "Relier les opérations à leur société et distinguer les types de transactions pour éviter les raccourcis." },
      { title: "Rendre lisible", text: "Construire une expérience de suivi claire, avec des indicateurs descriptifs et des explications accessibles." },
    ],
    capabilities: ["Architecture produit", "Pipelines de données", "Développement web", "Design d’interface"],
    note: "Capture du produit avec données d’illustration. WhalingView est un outil d’information et d’analyse ; il ne formule pas de recommandation d’investissement.",
    takeaway: "La valeur d’une donnée commence avec ce que l’on peut en comprendre.",
  },
  {
    slug: "geodataviz",
    name: "GeoDataViz",
    category: "Géographie · Visualisation 3D · Data",
    shortCategory: "Les territoires prennent du relief.",
    headline: "Donner une autre dimension aux données.",
    intro: "Un studio de visualisation qui permet de voir, d’explorer et de comparer les territoires en trois dimensions.",
    image: "/images/geodataviz.webp",
    imageAlt: "GeoDataViz : carte 3D de la France, relief de population et couleur liée au taux de pauvreté",
    visualClass: "project-geo",
    summary: "Des données géographiques complexes deviennent une expérience visuelle, interactive et documentée.",
    context: "Voir les écarts. Comprendre les territoires.",
    problem: "Population, revenus, climat : les chiffres racontent des réalités très différentes selon l’échelle et la représentation. Explorer ces écarts exige à la fois une lecture visuelle forte et des sources explicites.",
    response: "GeoDataViz associe une carte 3D interactive à des outils d’analyse et de comparaison. L’utilisateur choisit les indicateurs, ajuste leur représentation et retrouve le contexte statistique des données.",
    features: [
      { title: "Explorer", text: "Naviguer de la France au globe, rechercher un territoire et observer les données à plusieurs échelles." },
      { title: "Comparer", text: "Mettre les territoires et les évolutions en regard, avec des indicateurs et des millésimes identifiés." },
      { title: "Composer", text: "Ajuster relief, couleurs et lumière dans le studio, puis partager une vue ou exporter une image." },
    ],
    capabilities: ["Data engineering", "WebGL & 3D", "Visualisation interactive", "Expérience utilisateur"],
    note: "Capture de la version locale. Vue France : source INSEE Filosofi 2021 ; fonds cartographiques Natural Earth, IGN et BD TOPAGE. Les sources et les millésimes varient selon les indicateurs.",
    takeaway: "Une visualisation marquante doit aussi permettre de remonter à la donnée.",
  },
  {
    slug: "travelideas",
    name: "Travelideas",
    category: "Voyage · Aide à la décision · Produit",
    shortCategory: "Moins chercher. Mieux partir.",
    headline: "Transformer des envies en destinations.",
    intro: "Une exploration du voyage qui part des préférences de chacun pour faire émerger des destinations à comparer.",
    image: "/images/travelideas.webp",
    imageAlt: "Accueil du produit Ailleurs, développé dans Travelideas : choix de destinations et vue de Lisbonne",
    visualClass: "project-travel",
    summary: "Un moteur de découverte qui rapproche envies, budget et contraintes pour éclairer le choix d’un voyage.",
    context: "Partir d’une envie, pas de cent onglets.",
    problem: "Choisir une destination revient souvent à jongler entre budget, météo, transport et envies personnelles. Les comparaisons deviennent difficiles quand chaque site raconte une partie différente du voyage.",
    response: "Travelideas, présenté sous le nom Ailleurs dans le produit, rassemble ces critères dans un parcours unique : un profil de voyage, des préférences ajustables, un classement expliqué et des destinations à comparer.",
    features: [
      { title: "Personnaliser", text: "Exprimer ses envies, ses contraintes et ses priorités sans créer de compte." },
      { title: "Expliquer", text: "Comprendre les critères du classement et distinguer les données disponibles des estimations." },
      { title: "Comparer", text: "Mettre en regard les destinations, les fourchettes de budget et les possibilités de trajet." },
    ],
    capabilities: ["Conception produit", "Moteur de classement", "Intégration de données", "Développement web"],
    note: "Capture de la version locale du produit Ailleurs. Les budgets sont indicatifs et le site ne réalise pas de réservation. Les photographies et leurs crédits sont documentés dans les sources du projet.",
    takeaway: "Personnaliser une expérience, c’est aussi expliquer les choix qu’elle propose.",
  },
] as const;

export type Project = (typeof projects)[number];

export const services = [
  {
    id: "solutions",
    number: "01",
    title: "Créer vos solutions IA.",
    description: "Du premier cas d’usage au produit intégré à votre quotidien. Nous concevons et développons des outils qui répondent à un besoin précis, avec vos données et vos contraintes.",
    tags: ["Applications sur mesure", "Automatisation", "Agents & assistants", "Data & visualisation"],
    examples: ["Un assistant qui retrouve l’information dans votre documentation.", "Un processus qui extrait, classe et prépare vos documents.", "Un outil métier qui relie vos données et facilite la décision."],
    deliverables: "Un périmètre clair, un prototype testable, une solution intégrée et la documentation pour la faire évoluer.",
  },
  {
    id: "transformation",
    number: "02",
    title: "Faire évoluer vos pratiques.",
    description: "Identifier où l’IA peut vous être utile, choisir les bons premiers projets et accompagner vos équipes. Une trajectoire concrète, construite avec les personnes qui feront vivre le changement.",
    tags: ["Diagnostic & cadrage", "Feuille de route", "Ateliers", "Accompagnement des équipes"],
    examples: ["Repérer les tâches répétitives et les cas d’usage prioritaires.", "Évaluer la faisabilité avec vos données, vos outils et vos équipes.", "Tester les nouveaux usages, former et mesurer leur adoption."],
    deliverables: "Une cartographie des opportunités, des priorités partagées, une feuille de route et des ateliers adaptés aux métiers.",
  },
] as const;

export const steps = [
  { title: "Comprendre", subtitle: "Partir de votre réalité.", text: "Vos équipes, vos outils, vos données. Nous définissons ensemble le problème à résoudre et les critères qui permettront de juger la solution." },
  { title: "Explorer", subtitle: "Donner forme à l’idée.", text: "Un prototype pour rendre les choix tangibles. Nous testons les hypothèses, confrontons les usages et décidons de la suite sur des éléments concrets." },
  { title: "Construire", subtitle: "Passer du test au terrain.", text: "Nous développons, intégrons et vérifions la solution dans votre environnement, avec des points réguliers et des livrables que vous pouvez essayer." },
  { title: "Transmettre", subtitle: "Vous donner la main.", text: "Documentation, prise en main et accompagnement des équipes. Nous préparons la suite pour que le produit reste utile et puisse évoluer." },
] as const;

export const team = [
  { name: "Anatole", role: "Produit & accompagnement", description: "Relier les besoins métier, l’expérience utilisateur et la mise en œuvre du projet.", symbol: "01" },
  { name: "Gaël", role: "Data & machine learning", description: "Explorer les données, concevoir les modèles et donner du sens aux résultats.", symbol: "02" },
  { name: "Florian", role: "Ingénierie & développement", description: "Construire les applications, relier les systèmes et les faire fonctionner ensemble.", symbol: "03" },
] as const;
