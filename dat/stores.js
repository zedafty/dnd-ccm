/* +------------------------------------------------------------------------+ */
/* ////////////////////////////////////||\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */
/* +------------------------------------------------------------------------+ */
/* |                                                                        | */
/* |                             *** STORES ***                             | */
/* |                                                                        | */
/* +------------------------------------------------------------------------+ */
/* \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\||//////////////////////////////////// */
/* +------------------------------------------------------------------------+ */

/* -------------------------------------------------------------------------- */
/* # Global Objects */
/* -------------------------------------------------------------------------- */

$inns = {};
$taverns = {};
$temples = {};
$shops = {};

/* -------------------------------------------------------------------------- */
/* # Global Strings */
/* -------------------------------------------------------------------------- */

$meals = {
	"poor" : {"name" : "Repas pitance", "desc" : [
		"Panais bouillis, tête de veau, noix.",                           // 0
		"Soupe aux oignons, lard, nectarine.",                            // 1
		"Bouillon de poule, poisson-chat, poire.",                        // 2
		"Navets bouillis, carpe grillée, pomme.",                         // 3
		"Radis, tripes au poivre, coings.",                               // 4
		"Bouillon de morue, langue de bœuf, prunes.",                     // 5
		"Purée de poireaux, cuisses de grenouilles, noisettes.",          // 6
		"Soupe aux choux, ragoût de lapin, pruneaux.",                    // 7
		"Topinambours, écureuil grillé, pignons de pin.",                 // 8
		"Purée de chou-fleur, tripes de porc, raisins secs.",             // 9
		"Chou-rave rapé, morue bouillie, mûres.",                         // 10
		"Feuilles d'artichaut, foie de volailles, lait cru.",             // 11
	]},
	"mean" : {"name" : "Plat du jour", "desc" : [
		"Omelette aux champignons, truite fumée, purée de groseilles.",   // 0
		"Pâté de ragondin, roti de porc, fromage de brebis.",             // 1
		"Salade verte, jambon fumé, fromage au lait cru.",                // 2
		"Pâtissons, poulet à la broche, fromage de chèvre.",              // 3
		"Pâté de sanglier, basse-côte de sanglier, purée de canneberge.", // 4
		"Cervelas, lotte poivrée, purée de myrtilles.",                   // 5
		"Pâté de lapin, roti de bœuf, purée de fraises.",                 // 6
		"Pieds de porc, cotelettes d'agneau, grappe de raisins.",         // 7
		"Omelette aux noix, rothé des profondeurs, calembert.",           // 8
		"Pâté de cerf, esturgeon poêlé, grappe de cerises.",              // 9
		"Carottes rapées, sauté de dinde, fromage blanc.",                // 10
		"Épinards, côte de bœuf, Roquefourbe.",                           // 11
	]},
	"rich" : {"name" : "Menu gourmet", "desc" : [
		"Œufs de cailles, dinde farcie, condé de Luiren.",                // 0
		"Cœur d'artichaut, tourte au saumon, tarte aux mûres.",           // 1
		"Rosette, caille carnée de Turmish, calisson de Bérégost.",       // 2
		"Asperges, pintade meunière, fraises à la crème.",                // 3
		"Salade roquette, quenelle d'Eauprofonde, poire au caramel.",     // 4
		"Velouté d'aubergines, oie cuite au vin, praliné d'Evereska.",    // 5
		"Velouté de blettes, tournedos, condé de Cormyr.",                // 6
		"Endives à la crème, sôle braisée, tarte à la fraise.",           // 7
		"Œufs de lompes, fricassée de civelles, tarte à la framboise.",   // 8
		"Fricadelle, canard laqué, petits pains de Padhiver.",            // 9
		"Haricots verts, brochet braisé, sucre d'orge de Berdusk.",       // 10
		"Salade de brocolis, filet de raie, airelles à la crème.",        // 11
	]},
};

$lodges = {
	"peasant" : {"name" : "Salle commune", "desc" : "Un coin de plancher près de l'âtre éteint, un ivrogne ronflant à vos côtés."},
	"merchant" : {"name" : "Dortoir", "desc" : "Un endroit chauffé, avec une couverture et un oreiller."},
	"noble" : {"name" : "Chambre", "desc" : "Une chambre individuelle, un lit douillet et un pot de chambre."},
	"royal" : {"name" : "Loge", "desc" : "Un oreiller en soie, des draps en lin et des latrines personnelles."}
};

// -----------------------------------------------------------------------------
// # Candlekeep
// -----------------------------------------------------------------------------

$inns.candlekeep = [
	{"type" : "drink", "name" : "Vin de sang", "price" : 0.08},
	{"type" : "drink", "name" : "Flammevin", "price" : 1},
	{"type" : "drink", "name" : "Hydromel", "price" : 0.4},
	{"type" : "drink", "name" : "Bière noire amère", "price" : 0.01},
	{"type" : "drink", "name" : "Vin sec arabellois", "price" : 0.2},
	{"type" : "meal", "name" : $meals.poor.name, "price" : 0.1, "desc" : $meals.poor.desc[0]},
	{"type" : "meal", "name" : $meals.mean.name, "price" : 0.3, "desc" : $meals.mean.desc[0]},
	{"type" : "lodge", "name" : $lodges.peasant.name, "price" : 0.2, "desc" : $lodges.peasant.desc},
	{"type" : "lodge", "name" : $lodges.merchant.name, "price" : 0.5, "desc" : $lodges.merchant.desc},
	{"type" : "lodge", "name" : $lodges.noble.name, "price" : 2, "desc" : $lodges.noble.desc},
	{"type" : "item", "name" : "Armes courantes"},
	{"type" : "item", "name" : "Armures légères"},
	{"type" : "item", "name" : "Matériel d'aventurier"}
];

$temples.candlekeep = [
	{"type" : "cure", "name" : "Soins légers", "price" : 50},
	{"type" : "cure", "name" : "Dissipation de la magie", "price" : 200},
	{"type" : "cure", "name" : "Délivrance de la malédiction", "price" : 500},
	{"type" : "cure", "name" : "Soins importants", "price" : 100},
	{"type" : "cure", "name" : "Ralentissement du poison", "price" : 150},
	{"type" : "cure", "name" : "Rappel à la vie", "price" : 750},
	{"type" : "potion", "name" : "Potions de soins", "price" : 75},
	{"type" : "potion", "name" : "Elixir de santé", "price" : 250},
	{"type" : "potion", "name" : "Antidote", "price" : 100},
	{"type" : "scroll", "name" : "Parchemin de transmutation de la pierre en chair", "price" : 150}
];

// -----------------------------------------------------------------------------
// # Friendly Arm
// -----------------------------------------------------------------------------

$inns.friendly_arm = [
	{"type" : "drink", "name" : "Vin alurlyath", "price" : 0.6},
	{"type" : "drink", "name" : "Vin sec arabellois", "price" : 0.2},
	{"type" : "drink", "name" : "Bière noire amère", "price" : 0.01},
	{"type" : "drink", "name" : "Bière d'Elminster", "price" : 1},
	{"type" : "drink", "name" : "Hydromel", "price" : 2},
	{"type" : "drink", "name" : "Bière Ombrenoir", "price" : 0.1},
	{"type" : "meal", "name" : $meals.poor.name, "price" : 0.1, "desc" : $meals.poor.desc[1]},
	{"type" : "meal", "name" : $meals.mean.name, "price" : 0.3, "desc" : $meals.mean.desc[1]},
	{"type" : "meal", "name" : $meals.rich.name, "price" : 0.5, "desc" : $meals.rich.desc[0]},
	{"type" : "lodge", "name" : $lodges.peasant.name, "price" : 0.1, "desc" : $lodges.peasant.desc},
	{"type" : "lodge", "name" : $lodges.merchant.name, "price" : 0.3, "desc" : $lodges.merchant.desc},
	{"type" : "lodge", "name" : $lodges.noble.name, "price" : 1, "desc" : $lodges.noble.desc},
	{"type" : "item", "name" : "Armes courantes"},
	{"type" : "item", "name" : "Armures légères"},
	{"type" : "item", "name" : "Matériel divers"},
	{"type" : "item", "name" : "Matériel spécialisé"}
];

$temples.friendly_arm = [
	{"type" : "cure", "name" : "Soins légers", "price" : 50},
	{"type" : "cure", "name" : "Dissipation de la magie", "price" : 200},
	{"type" : "cure", "name" : "Délivrance de la malédiction", "price" : 500},
	{"type" : "cure", "name" : "Soins importants", "price" : 100},
	{"type" : "cure", "name" : "Ralentissement du poison", "price" : 150},
	{"type" : "cure", "name" : "Rappel à la vie", "price" : 750},
	{"type" : "potion", "name" : "Potions de soins", "price" : 75},
	{"type" : "potion", "name" : "Potions de génie", "price" : 300},
	{"type" : "potion", "name" : "Potions de focalisation mentale", "price" : 500},
	{"type" : "potion", "name" : "Potions de perspicacité", "price" : 300},
	{"type" : "potion", "name" : "Antidote", "price" : 100},
	{"type" : "potion", "name" : "Elixir de santé", "price" : 250},
	{"type" : "scroll", "name" : "Parchemin de transmutation de la pierre en chair", "price" : 150}
];

// -----------------------------------------------------------------------------
// # Beregost
// -----------------------------------------------------------------------------

$inns.beregost_red_sheaf = [
	{"type" : "drink", "name" : "Flammevin", "price" : 1},
	{"type" : "drink", "name" : "Vin de sang", "price" : 0.08},
	{"type" : "drink", "name" : "Bière des Sables dorés", "price" : 0.1},
	{"type" : "drink", "name" : "Bière iriaébaine du Nord", "price" : 0.01},
	{"type" : "meal", "name" : $meals.poor.name, "price" : 0.2, "desc" : $meals.poor.desc[2]},
	{"type" : "lodge", "name" : $lodges.peasant.name, "price" : 0.3, "desc" : $lodges.peasant.desc},
	{"type" : "lodge", "name" : $lodges.merchant.name, "price" : 0.6, "desc" : $lodges.merchant.desc}

];

$inns.beregost_burning_wizard = [
	{"type" : "drink", "name" : "Hydromel", "price" : 0.4},
	{"type" : "drink", "name" : "Vin rubis Port-ponant", "price" : 0.1},
	{"type" : "drink", "name" : "Bière délice de Luiren", "price" : 1},
	{"type" : "drink", "name" : "Bière des Sables dorés", "price" : 0.1},
	{"type" : "drink", "name" : "Bière Ombrenoir", "price" : 0.1},
	{"type" : "drink", "name" : "Bière forte de Tanagyr", "price" : 0.02},
	{"type" : "drink", "name" : "Vin d'hiver", "price" : 1},
	{"type" : "meal", "name" : $meals.mean.name, "price" : 0.5, "desc" : $meals.mean.desc[2]},
	{"type" : "meal", "name" : $meals.rich.name, "price" : 1, "desc" : $meals.rich.desc[1]},
	{"type" : "lodge", "name" : $lodges.noble.name, "price" : 3, "desc" : $lodges.noble.desc}
];

$inns.beregost_feldpost = [
	{"type" : "drink", "name" : "Vin rubis Port-ponant", "price" : 0.1},
	{"type" : "drink", "name" : "Vin d'hiver", "price" : 2},
	{"type" : "drink", "name" : "Hydromel", "price" : 2},
	{"type" : "drink", "name" : "Vin noir berduskain", "price" : 5},
	{"type" : "meal", "name" : $meals.rich.name, "price" : 3, "desc" : $meals.rich.desc[2]},
	{"type" : "lodge", "name" : $lodges.noble.name, "price" : 5, "desc" : $lodges.noble.desc},
	{"type" : "lodge", "name" : $lodges.royal.name, "price" : 10, "desc" : $lodges.royal.desc}
];

$inns.beregost_jovial_juggler = [
	{"type" : "drink", "name" : "Vin topaze saerlounien", "price" : 1},
	{"type" : "drink", "name" : "Bière délice de Luiren", "price" : 1},
	{"type" : "drink", "name" : "Bière de Suz", "price" : 0.1},
	{"type" : "drink", "name" : "Vin rubis Port-ponant", "price" : 1},
	{"type" : "meal", "name" : $meals.poor.name, "price" : 0.2, "desc" : $meals.poor.desc[3]},
	{"type" : "meal", "name" : $meals.mean.name, "price" : 0.4, "desc" : $meals.mean.desc[3]},
	{"type" : "lodge", "name" : $lodges.merchant.name, "price" : 0.5, "desc" : $lodges.merchant.desc},
	{"type" : "lodge", "name" : $lodges.noble.name, "price" : 2, "desc" : $lodges.noble.desc}
];

$temples.beregost = [
	{"type" : "cure", "name" : "Soins légers", "price" : 50},
	{"type" : "cure", "name" : "Dissipation de la magie", "price" : 200},
	{"type" : "cure", "name" : "Délivrance de la malédiction", "price" : 500},
	{"type" : "cure", "name" : "Soins importants", "price" : 100},
	{"type" : "cure", "name" : "Ralentissement du poison", "price" : 150},
	{"type" : "cure", "name" : "Rappel à la vie", "price" : 750},
	{"type" : "potion", "name" : "Potions de soins", "price" : 75},
	{"type" : "potion", "name" : "Elixir de santé", "price" : 250},
	{"type" : "potion", "name" : "Antidote", "price" : 100},
	{"type" : "scroll", "name" : "Parchemin de transmutation de la pierre en chair", "price" : 150}
];

$shops.beregost_smith = [];

// -----------------------------------------------------------------------------
// # Nashkel
// -----------------------------------------------------------------------------

$inns.nashkel = [
	{"type" : "drink", "name" : "Bière noire amère", "price" : 0.01},
	{"type" : "drink", "name" : "Bière Ombrenoir", "price" : 0.1},
	{"type" : "drink", "name" : "Hydromel", "price" : 0.4},
	{"type" : "drink", "name" : "Bière forte de Tanagyr", "price" : 0.02},
	{"type" : "drink", "name" : "Vin de sang", "price" : 0.08},
	{"type" : "meal", "name" : $meals.poor.name, "price" : 0.3, "desc" : $meals.poor.desc[4]},
	{"type" : "meal", "name" : $meals.mean.name, "price" : 0.6, "desc" : $meals.mean.desc[4]},
	{"type" : "lodge", "name" : $lodges.merchant.name, "price" : 1, "desc" : $lodges.merchant.desc},
	{"type" : "lodge", "name" : $lodges.noble.name, "price" : 3, "desc" : $lodges.noble.desc}
];

$taverns.nashkel = [
	{"type" : "drink", "name" : "Bière du souffle du dragon", "price" : 0.01},
	{"type" : "drink", "name" : "Hydromel", "price" : 0.4},
	{"type" : "drink", "name" : "Vin rubis Port-ponant", "price" : 0.1},
	{"type" : "drink", "name" : "Vin sec arabellois", "price" : 0.2},
	{"type" : "drink", "name" : "Vin topaze saerlounien", "price" : 1},
	{"type" : "meal", "name" : $meals.poor.name, "price" : 0.5, "desc" : $meals.poor.desc[5]}
];

$temples.nashkel = [
	{"type" : "cure", "name" : "Soins légers", "price" : 50},
	{"type" : "cure", "name" : "Dissipation de la magie", "price" : 200},
	{"type" : "cure", "name" : "Délivrance de la malédiction", "price" : 500},
	{"type" : "cure", "name" : "Soins importants", "price" : 100},
	{"type" : "cure", "name" : "Ralentissement du poison", "price" : 150},
	{"type" : "cure", "name" : "Rappel à la vie", "price" : 750},
	{"type" : "potion", "name" : "Potions de soins", "price" : 75},
	{"type" : "potion", "name" : "Elixir de santé", "price" : 250},
	{"type" : "potion", "name" : "Antidote", "price" : 100},
	{"type" : "scroll", "name" : "Parchemin de transmutation de la pierre en chair", "price" : 150}
];

$shops.nashkel = [];

$stores = [
	// Candlekeep
	{"id" : "INN2616", "type" : "inn", "loc" : "candlekeep", "name" : "Auberge de Château-Suif", "desc" : "L'auberge de Château-suif est tenue par l'aubergiste Winthrop. La plupart des armes courantes et des armures légères sont proposées à la vente.", "store" : $inns.candlekeep},
	{"id" : "TEM2601", "type" : "temple", "loc" : "candlekeep", "name" : "Temple d'Oghma", "desc" : "Le temple d'Oghma est tenu par un prêtre d'Oghma (NLS 10). Les donations sont acceptées.", "store" : $temples.candlekeep},
	// Friendly Arm
	{"id" : "FRIEND", "type" : "inn", "loc" : "friendly_arm", "name" : "Auberge du Brasamical", "desc" : "L'auberge de Brasamical est tenue par Bentley Ombremiroir, un roublard et illusionniste gnome à la retraite. Sa femme Gellanna tient le temple de Garl Brilledor à côté de l'auberge.", "store" : $inns.friendly_arm},
	{"id" : "TEMP2304", "type" : "temple", "loc" : "friendly_arm", "name" : "Temple de la Sagesse", "desc" : "Le Temple de la Sagesse est un lieu de prières dédié au dieu gnome Garl Brilledor. C'est un bâtiment bas dont les murs intérieurs sont incrustés de gemmes et de pépites d'or. L'office clérical est assuré par Gellana Ombremiroir (NLS 10).", "store" : $temples.friendly_arm},
	// Beregost
	{"id" : "INN3357", "type" : "inn", "loc" : "beregost", "name" : "Auberge de la Gerbe Rouge", "desc" : "L'auberge de la Gerbe rouge est connue pour son service expéditif. La Gerbe n'offre aucun divertissement et c'est l'endroit choisi des marchands qui souhaient tenir des réunions d'affaires discrètes.", "store" : $inns.beregost_red_sheaf},
	{"id" : "INN3307", "type" : "inn", "loc" : "beregost", "name" : "Magicien Ardent", "desc" : "Le Magicien ardent est une auberge de taille modeste et de bonne réputation. Sans être dispendieux, le service est suffisamment onéreux pour laisser l'indigence à la porte.", "store" : $inns.beregost_burning_wizard},
	{"id" : "INN3351", "type" : "inn", "loc" : "beregost", "name" : "Auberge de Feldpost", "desc" : "L'auberge de Feldpost est tenue par l'aubergiste qui lui a donné son nom. C'est un endroit luxueux essentiellement fréquenté par des nobles. Les prix sont exorbitants et les clients sont triés sur le volet par un videur à l'accent méridional.", "store" : $inns.beregost_feldpost},
	{"id" : "INN3304", "type" : "inn", "loc" : "beregost", "name" : "Jongleur Jovial", "desc" : "Le Jongleur jovial est le débit de boissons préféré de la jeunesse de Bérégost. L'endroit est spacieux, chaleureux, et les services sont abordables.", "store" : $inns.beregost_jovial_juggler},
	{"id" : "TEMP3402", "type" : "temple", "loc" : "beregost", "name" : "Chanson du matin", "desc" : "Le temple de la Chanson du matin est l'un des plus grands de la Côte des épées. Imposant, il surplombe les terres environnantes et les écrase sous sa majesté. Le Seigneur de l'Aube Keldath Ormlyr (NLS10) prodigue les services du temple sous le regard bienveillant de Lathandre.", "store" : $temples.beregost},
	// Nashkel
	{"id" : "INN4801", "type" : "inn", "loc" : "nashkel", "name" : "Auberge de Nashkel", "desc" : "Ne payant pas de mine, l'auberge de Nashkel offre un service décent pour des prix relativement abordables. La clientèle est essentiellement composée de marchands et de gens de passage.", "store" : $inns.nashkel},
	{"id" : "TAV4809", "type" : "tavern", "loc" : "nashkel", "name" : "Taverne du Dragon qui rote", "desc" : "Aussi connue sous le nom de l'Aurore Boréale, la taverne du Dragon qui rote est une gargote animée envahie par les soiffards. C'est le lieu choisi pour les ragots et potins, ou plus simplement, une saine et salutaire beuverie.", "store" : $taverns.nashkel},
	{"id" : "TEM4802", "type" : "temple", "loc" : "nashkel", "name" : "Temple de Heaum", "desc" : "Le temple de Heaum est un bâtiment élégant entouré par un petit cimetière dont de nombreuses tombes sont marquées d'une épitaphe singulière. Il est tenu par la Sentinelle Nalin (NLS 10), prêtre de Heaum et personnage notable de Nashkel.", "store" : $temples.nashkel}
];
