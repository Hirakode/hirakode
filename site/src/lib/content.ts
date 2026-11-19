export const contactEmail = "contact@hirakode.com";

export const navigation = [
  { href: "/transformation-ia", label: "Transformation IA", number: "01" },
  { href: "/projets", label: "Nos projets", number: "02" },
  { href: "/expertises", label: "Nos expertises", number: "03" },
  { href: "/studio", label: "Le studio", number: "04" },
  { href: "/contact", label: "Parlons-en", number: "05" },
] as const;

export const projects = [
  {
    slug: "autotraders",
    name: "Autotraders.ai",
    category: "Trading · IA générative · Automatisation",
    shortCategory: "Du message à l’exécution.",
    headline: "Une IA qui comprend. Un système qui exécute.",
    intro: "Relier les signaux Telegram aux comptes MetaTrader, avec une interprétation par IA et des règles propres à chaque utilisateur.",
    image: "/images/project-ui/autotraders-home.jpg",
    imageAlt: "Accueil du site officiel Autotraders, interface bleu nuit et cyan",
    visualClass: "project-auto",
    technology: "IA générative & automatisation",
    status: "En production",
    url: "https://www.autotraders.ai/",
    summary: "Des messages de trading interprétés par un modèle de langage, puis transformés en ordres selon les paramètres de chaque compte.",
    context: "Un signal arrive. Tout reste à orchestrer.",
    problem: "Les signaux Telegram arrivent sous des formats variés. Les lire, en extraire les paramètres puis les reporter sur plusieurs comptes impose des manipulations répétitives et une attention constante.",
    response: "Autotraders relie cette chaîne : réception du message, interprétation par un modèle de langage, application des règles du compte et transmission à MetaTrader. L’utilisateur définit les conditions dans lesquelles l’automatisation intervient.",
    features: [
      { title: "Comprendre les messages", text: "Le modèle de langage extrait les informations du signal et les convertit en données structurées pour la suite du traitement." },
      { title: "Appliquer les règles", text: "Les paramètres de risque, le dimensionnement des positions et le routage sont adaptés à chaque compte, au-delà de la seule interprétation du texte." },
      { title: "Relier les systèmes", text: "Telegram, le moteur de traitement et MetaTrader communiquent dans un parcours automatisé, avec une interface pour configurer les comptes et suivre les opérations." },
    ],
    capabilities: ["Intégration de LLM", "Automatisation métier", "Architecture backend", "Application web"],
    mechanism: "L’IA interprète le langage. Le moteur métier applique les paramètres.",
    workflow: [
      { title: "Message Telegram", text: "Un signal reçu dans un canal connecté constitue l’entrée du traitement." },
      { title: "Interprétation & règles", text: "Le LLM structure le message ; le système prépare l’ordre selon les réglages du compte." },
      { title: "Exécution MetaTrader", text: "Les ordres sont transmis via MetaAPI aux comptes MetaTrader 4 ou 5 concernés." },
    ],
    proof: { value: "5 000+", label: "utilisateurs actifs", kind: "Adoption", detail: "Une automatisation utilisée en conditions réelles. Plus de 5 000 utilisateurs actifs, chiffre communiqué par l’équipe Autotraders en novembre 2026." },
    note: "Captures du site public Autotraders et de son aperçu des réglages, réalisées le 17 novembre 2026. Les exemples affichés sur ce site ne constituent pas une preuve de performance financière. Autotraders automatise l’exécution de signaux ; le trading comporte un risque de perte.",
    takeaway: "Faire passer une intégration IA du prototype à un produit utilisé au quotidien.",
  },
  {
    slug: "whalingview",
    name: "WhalingView",
    category: "Finance · Data engineering · Produit",
    shortCategory: "La donnée financière, décodée.",
    headline: "Faire émerger le signal.",
    intro: "Rendre les transactions déclarées par les initiés compréhensibles, explorables et utiles à l’analyse.",
    image: "/images/project-ui/whalingview-home.jpg",
    imageAlt: "Accueil WhalingView : interface crème, baleine turquoise et exploration des déclarations publiques",
    visualClass: "project-whaling",
    technology: "Pipelines de données & synthèses IA",
    status: "Produit exploratoire",
    url: null,
    summary: "Des déclarations financières dispersées deviennent des données structurées, un indice descriptif et des synthèses IA reliées aux sources.",
    context: "Les déclarations existent. Le sens reste à construire.",
    problem: "Suivre les opérations publiées par les dirigeants et autres initiés demande de rapprocher des sources, de comprendre les transactions et de garder leur contexte. Une liste de chiffres seule ne suffit pas.",
    response: "WhalingView rassemble ces déclarations dans un produit lisible : transactions normalisées, sociétés suivies, filtres et explications en français. La donnée reste au premier plan ; l’interface aide à la lire.",
    features: [
      { title: "Rapprocher les sources", text: "Normaliser les déclarations SEC et du Congrès américain, tout en conservant l’origine et le contexte des opérations." },
      { title: "Décrire la convergence", text: "Un indice descriptif combine les achats déclarés, leur récence et la diversité des acteurs selon une méthode versionnée." },
      { title: "Expliquer avec l’IA", text: "Des synthèses en langage naturel s’appuient sur un contexte structuré. Les noms, dates et chiffres sont contrôlés ; un texte déterministe prend le relais en cas de rejet." },
    ],
    capabilities: ["Architecture produit", "Pipelines de données", "Développement web", "Design d’interface"],
    mechanism: "Des sources publiques à une explication que l’on peut vérifier.",
    workflow: [
      { title: "Collecter & normaliser", text: "Les déclarations hétérogènes sont rapprochées dans un modèle de données commun." },
      { title: "Calculer & contextualiser", text: "L’indice descriptif et le contexte de chaque opération sont préparés avant la synthèse." },
      { title: "Rédiger & contrôler", text: "L’IA formule l’explication ; des contrôles vérifient son ancrage dans les informations fournies." },
    ],
    proof: { value: "IA sourcée", label: "des synthèses contrôlées", kind: "Dans le produit", detail: "Un pipeline de synthèse avec vérification des faits cités, traçabilité des tentatives et texte de repli. Le produit est au stade exploratoire." },
    note: "Captures de l’interface locale WhalingView, réalisées le 17 novembre 2026. Cette version comprend des données de démonstration. L’indice Pulse est descriptif, sans promesse prédictive. WhalingView est un outil d’information et d’analyse, sans recommandation d’investissement.",
    takeaway: "La valeur d’une donnée commence avec ce que l’on peut en comprendre.",
  },
  {
    slug: "geodataviz",
    name: "GeoDataViz",
    category: "Géographie · Visualisation 3D · Data",
    shortCategory: "Les territoires prennent du relief.",
    headline: "Donner une autre dimension aux données.",
    intro: "Un studio de visualisation qui permet de voir, d’explorer et de comparer les territoires en trois dimensions.",
    image: "/images/geodataviz-relief.png",
    imageAlt: "GeoDataViz : carte 3D de la France, relief de population et couleur liée au taux de pauvreté",
    visualClass: "project-geo",
    technology: "Algorithmes géospatiaux & WebGL",
    status: "Produit exploratoire",
    url: "https://geodataviz.vercel.app/",
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
    mechanism: "Adapter le détail des données à l’échelle que l’on explore.",
    workflow: [
      { title: "Préparer les données", text: "Les sources statistiques et géographiques sont rapprochées, avec leurs millésimes et leurs unités." },
      { title: "Adapter la résolution", text: "Des grilles à plusieurs résolutions et un chargement par zones permettent d’ajuster le niveau de détail." },
      { title: "Dessiner en 3D", text: "Le rendu WebGL instancié transforme les valeurs en reliefs et couleurs dans le navigateur." },
    ],
    proof: { value: "3D", label: "une exploration dans le navigateur", kind: "À explorer", detail: "Une démonstration publique permet de manipuler les données et leur représentation. Le visuel est un export réalisé dans cette démonstration, avec le preset Néon cyan." },
    note: "Export de la démonstration publique, réalisé le 17 novembre 2026. Vue France, résolution 16 km, relief statistique amplifié : source INSEE Filosofi 2021 ; fonds cartographiques Natural Earth, IGN et BD TOPAGE. Les sources et les millésimes varient selon les indicateurs.",
    takeaway: "Une visualisation marquante doit aussi permettre de remonter à la donnée.",
  },
  {
    slug: "travelideas",
    name: "Travelideas",
    category: "Voyage · Aide à la décision · Produit",
    shortCategory: "Moins chercher. Mieux partir.",
    headline: "Transformer des envies en destinations.",
    intro: "Une exploration du voyage qui part des préférences de chacun pour faire émerger des destinations à comparer.",
    image: "/images/project-ui/travelideas-home.jpg",
    imageAlt: "Accueil Ailleurs / Travelideas : interface verte et crème, découverte des destinations et photographie de Lisbonne",
    visualClass: "project-travel",
    technology: "Recommandation multicritère explicable",
    status: "Produit exploratoire",
    url: null,
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
    mechanism: "Un classement qui montre pourquoi une destination vous correspond.",
    workflow: [
      { title: "Recueillir les préférences", text: "Budget, climat, découvertes et durée du séjour définissent les priorités du voyageur." },
      { title: "Pondérer les critères", text: "Le moteur combine les scores par critère et intègre le coût du trajet et le temps réellement disponible sur place." },
      { title: "Expliquer le classement", text: "Les contributions des critères sont visibles ; les données manquantes restent identifiées comme telles." },
    ],
    proof: { value: "424", label: "destinations dans 99 pays et territoires", kind: "Dans le catalogue", detail: "Un catalogue structuré relié à un moteur de classement explicable, avec comparaison de destinations et préférences ajustables. Ce chiffre décrit la couverture du catalogue du produit exploratoire." },
    note: "Captures de l’interface locale Ailleurs, développée sous le nom Travelideas, réalisées le 17 novembre 2026 en mode hors ligne. Le classement est algorithmique, sans IA générative. Les budgets sont indicatifs ; le site ne réalise pas de réservation.",
    takeaway: "Personnaliser une expérience, c’est aussi expliquer les choix qu’elle propose.",
  },
] as const;

export type Project = (typeof projects)[number];

export const services = [
  {
    id: "solutions",
    href: "/expertises/#solutions",
    number: "01",
    title: "Créer vos solutions IA.",
    description: "Du premier cas d’usage au produit intégré à votre quotidien. Nous concevons et développons des outils qui répondent à un besoin précis, avec vos données et vos contraintes.",
    tags: ["Applications sur mesure", "Automatisation", "Agents & assistants", "Data & visualisation"],
    examples: ["Un assistant qui retrouve l’information dans votre documentation.", "Un processus qui extrait, classe et prépare vos documents.", "Un outil métier qui relie vos données et facilite la décision."],
    deliverables: "Un périmètre clair, un prototype testable, une solution intégrée et la documentation pour la faire évoluer.",
  },
  {
    id: "transformation",
    href: "/transformation-ia",
    number: "02",
    title: "Transformer votre entreprise avec l’IA.",
    description: "Choisir un premier usage utile, le tester dans votre quotidien et accompagner les équipes qui le feront vivre. Nous construisons avec vous une transformation progressive, guidée par les résultats du terrain.",
    tags: ["Diagnostic & cadrage", "Feuille de route", "Ateliers", "Accompagnement des équipes"],
    examples: ["Repérer les tâches répétitives et les cas d’usage prioritaires.", "Évaluer la faisabilité avec vos données, vos outils et vos équipes.", "Tester les nouveaux usages, former et mesurer leur adoption."],
    deliverables: "Une cartographie des opportunités, des priorités partagées, une feuille de route et des ateliers adaptés aux métiers.",
  },
] as const;

export const transformationSteps = [
  { title: "Cadrer", subtitle: "Identifier vos processus à optimiser." },
  { title: "Élaborer", subtitle: "Designer des solutions concrètes et efficaces." },
  { title: "Tester", subtitle: "Ajuster les nouveaux processus aux usages réels de vos équipes." },
  { title: "Intégrer", subtitle: "Déployer les agents à l’échelle de votre entreprise." },
  { title: "Transmettre", subtitle: "Accompagner vos équipes dans la maîtrise des nouveaux outils." },
] as const;

export const transformationUseCases = [
  {
    title: "Libérer du temps pour l’essentiel",
    description: "Alléger les tâches répétitives pour consacrer plus de temps à ce qui fait la valeur de votre métier.",
  },
  {
    title: "Mieux mobiliser vos connaissances",
    description: "Rendre vos informations et vos savoir-faire plus accessibles pour aider chacun à les utiliser au bon moment.",
  },
  {
    title: "Faire évoluer vos façons de travailler",
    description: "Repenser vos processus avec vos équipes pour faciliter la collaboration et améliorer la qualité du travail.",
  },
  {
    title: "Créer de nouvelles possibilités",
    description: "Explorer de nouveaux services, outils ou expériences, puis tester ce qu’ils peuvent apporter à votre activité.",
  },
] as const;

export const transformationQuestions = [
  {
    question: "Par où pouvons-nous commencer ?",
    answer: "C’est précisément le rôle du cadrage. Vous pouvez venir avec une tâche qui prend trop de temps, une difficulté récurrente ou une question ouverte. Nous cherchons avec vous un premier usage dont l’intérêt peut être vérifié.",
  },
  {
    question: "Comment abordez-vous les données confidentielles ?",
    answer: "Le cadrage sert à identifier les données utilisables, les accès autorisés et les contraintes de votre organisation. Le choix des outils, de l’hébergement et des conditions de traitement en découle. Pour un pilote, nous privilégions des données fictives ou un échantillon adapté lorsque cela suffit à tester l’usage. Tout accès à vos données doit être convenu avec vous.",
  },
  {
    question: "Faut-il changer tous nos outils ou former tout le monde ?",
    answer: "Nous partons de votre environnement et des personnes concernées par le premier usage. Le pilote permet d’évaluer ce qui peut s’intégrer à l’existant et l’accompagnement nécessaire.",
  },
  {
    question: "Quel budget, quel délai et quel engagement prévoir ?",
    answer: "Chaque entreprise est unique, nous sommes là pour nous adapter au mieux à vos besoins et à vos ressources.",
    contactSuffix: "pour mettre au point ensemble une offre personnalisée.",
  },
] as const;

export const steps = [
  { title: "Comprendre", subtitle: "Partir de votre réalité.", text: "Vos équipes, vos outils, vos données. Nous définissons ensemble le problème à résoudre et les critères qui permettront de juger la solution." },
  { title: "Explorer", subtitle: "Donner forme à l’idée.", text: "Un prototype pour rendre les choix tangibles. Nous testons les hypothèses, confrontons les usages et décidons de la suite sur des éléments concrets." },
  { title: "Construire", subtitle: "Passer du test au terrain.", text: "Nous développons, intégrons et vérifions la solution dans votre environnement, avec des points réguliers et des livrables que vous pouvez essayer." },
  { title: "Transmettre", subtitle: "Vous donner la main.", text: "Documentation, prise en main et accompagnement des équipes. Nous préparons la suite pour que le produit reste utile et puisse évoluer." },
] as const;

export const team = [
  { name: "Anatole", role: "Produit & accompagnement", description: "Relier les besoins métier, l’expérience utilisateur et la mise en œuvre du projet.", transformationDescription: "Identifier les usages utiles avec vos équipes et accompagner leur adoption dans votre quotidien.", symbol: "01" },
  { name: "Gaël", role: "Algorithmique & data science", description: "Explorer les données, concevoir les modèles et optimiser les algorithmes.", transformationDescription: "Évaluer vos données, choisir les modèles adaptés et optimiser les algorithmes selon vos objectifs.", symbol: "02" },
  { name: "Florian", role: "Ingénierie & développement", description: "Construire les applications, designer les processus agentiques et les adapter aux besoins clients.", transformationDescription: "Concevoir les agents et les applications, puis les intégrer à vos outils et à vos processus de travail.", symbol: "03" },
] as const;
