/* ===========================================================
   ART DECO — i18n.js  (EN / FR)
   =========================================================== */
var ArtDecoI18n = (function () {
  'use strict';

  var STORAGE_KEY = 'artdeco_lang';
  var current = 'en';

  var dict = {
    /* ── NAV ── */
    nav_materials:      { en: 'Materials',              fr: 'Matériaux' },
    nav_projects:       { en: 'Projects',               fr: 'Projets' },
    nav_about:          { en: 'About',                  fr: 'À propos' },
    nav_contact:        { en: 'Contact',                fr: 'Contact' },
    nav_instagram:      { en: 'Instagram',              fr: 'Instagram' },
    nav_premium:        { en: 'Premium',                fr: 'Premium' },
    nav_accessible:     { en: 'Accessible Alternatives',fr: 'Alternatives accessibles' },
    nav_all_materials:  { en: 'All materials',          fr: 'Tous les matériaux' },
    nav_chukum_sub:     { en: 'Natural Mayan plaster',  fr: 'Enduit Maya naturel' },
    nav_beton_sub:      { en: 'Contemporary continuous finish', fr: 'Finition continue contemporaine' },
    nav_lime_clay:      { en: 'Lime + Clay',            fr: 'Chaux + Argile' },
    nav_hemp_lime:      { en: 'Hemp + Lime',            fr: 'Chanvre + Chaux' },
    nav_microcement:    { en: 'Microcement',            fr: 'Microciment' },
    mobile_materials:   { en: 'Materials',              fr: 'Matériaux' },

    /* ── FOOTER ── */
    footer_materials:   { en: 'Materials',              fr: 'Matériaux' },
    footer_company:     { en: 'Company',                fr: 'Société' },
    footer_connect:     { en: 'Connect',                fr: 'Contact' },
    footer_projects:    { en: 'Projects',               fr: 'Projets' },
    footer_about:       { en: 'About',                  fr: 'À propos' },
    footer_contact:     { en: 'Contact',                fr: 'Contact' },
    footer_tag:         { en: 'Premium natural finishes for architecture and interior design. Raw matter, raised to the rank of aesthetics.',
                          fr: 'Finitions naturelles premium pour l\'architecture et le design d\'intérieur. La matière brute, élevée au rang de l\'esthétique.' },
    footer_copy:        { en: '© 2025 Art Deco · Natural Finishes · Monaco',
                          fr: '© 2025 Art Deco · Finitions Naturelles · Monaco' },

    /* ── COMMON ── */
    lbl_home:           { en: 'Home',                   fr: 'Accueil' },
    lbl_available_finishes: { en: 'Available finishes', fr: 'Finitions disponibles' },
    lbl_avail_finishes_title: { en: 'Available Finishes', fr: 'Finitions disponibles' },
    lbl_tech_props:     { en: 'Technical Properties',   fr: 'Propriétés techniques' },
    lbl_tech_props2:    { en: 'Technical properties',   fr: 'Propriétés techniques' },
    lbl_characteristics:{ en: 'Characteristics',        fr: 'Caractéristiques' },
    lbl_applications:   { en: 'Applications',           fr: 'Applications' },
    lbl_rec_apps:       { en: 'Recommended Applications', fr: 'Applications recommandées' },
    btn_request:        { en: 'Request a consultation <span class="arrow">→</span>',
                          fr: 'Demander une consultation <span class="arrow">→</span>' },
    btn_contact_us:     { en: 'Contact us <span class="arrow">→</span>',
                          fr: 'Contactez-nous <span class="arrow">→</span>' },
    btn_get_in_touch:   { en: 'Get in touch <span class="arrow">→</span>',
                          fr: 'Nous contacter <span class="arrow">→</span>' },
    btn_discover:       { en: 'Discover <span class="arrow">→</span>',
                          fr: 'Découvrir <span class="arrow">→</span>' },
    btn_all_materials:  { en: 'All materials <span class="arrow">→</span>',
                          fr: 'Tous les matériaux <span class="arrow">→</span>' },
    btn_all_projects:   { en: 'View all projects <span class="arrow">→</span>',
                          fr: 'Voir tous les projets <span class="arrow">→</span>' },
    btn_send:           { en: 'Send message <span class="arrow">→</span>',
                          fr: 'Envoyer le message <span class="arrow">→</span>' },
    btn_sending:        { en: 'Sending…',               fr: 'Envoi…' },
    btn_ig_all:         { en: 'See all projects on Instagram ↗',
                          fr: 'Voir tous les projets sur Instagram ↗' },
    ig_eyebrow:         { en: 'Instagram',              fr: 'Instagram' },
    ig_title:           { en: 'Follow the process',     fr: 'Suivre le processus' },

    /* ── INDEX ── */
    index_eyebrow:      { en: 'Natural Finishes · Art Deco', fr: 'Finitions naturelles · Art Deco' },
    index_hero_h1:      { en: 'Surfaces that define the space', fr: 'Des surfaces qui définissent l\'espace' },
    index_hero_cta:     { en: 'Explore the materials <span class="arrow">→</span>',
                          fr: 'Explorer les matériaux <span class="arrow">→</span>' },
    index_two_mat_h2:   { en: 'Two materials.<br />One philosophy.',
                          fr: 'Deux matériaux.<br />Une philosophie.' },
    index_all_materials:{ en: 'All materials <span class="arrow">→</span>',
                          fr: 'Tous les matériaux <span class="arrow">→</span>' },
    index_chukum_eyebrow: { en: 'Natural Mayan plaster', fr: 'Enduit Maya naturel' },
    index_chukum_h3:    { en: 'Chukum',                 fr: 'Chukum' },
    index_chukum_p:     { en: 'Tree resin and lime, applied for millennia in the Yucatán. Waterproof, breathable, alive.',
                          fr: 'Résine d\'arbre et chaux, appliquées depuis des millénaires au Yucatán. Imperméable, respirant, vivant.' },
    index_beton_eyebrow:{ en: 'Contemporary finish',    fr: 'Finition contemporaine' },
    index_beton_h3:     { en: 'Béton Ciré',             fr: 'Béton Ciré' },
    index_beton_p:      { en: 'Seamless continuous surfaces with mineral depth. Pure minimalism.',
                          fr: 'Surfaces continues sans joints à la profondeur minérale. Minimalisme pur.' },
    index_portfolio:    { en: 'Portfolio',               fr: 'Portfolio' },
    index_recent_proj:  { en: 'Recent projects',         fr: 'Projets récents' },
    index_proj1_h4:     { en: 'Larvotto Private Residence', fr: 'Résidence privée de Larvotto' },
    index_proj1_p:      { en: 'Monaco · 2024 · Béton Ciré', fr: 'Monaco · 2024 · Béton Ciré' },
    index_proj2_h4:     { en: 'Riviera Hotel Spa',       fr: 'Spa de l\'Hôtel Riviera' },
    index_proj2_p:      { en: 'Nice · 2023 · Chukum',   fr: 'Nice · 2023 · Chukum' },
    index_proj3_h4:     { en: 'Carré d\'Or Showroom',   fr: 'Showroom Carré d\'Or' },
    index_proj3_p:      { en: 'Monaco · 2024 · Béton Ciré', fr: 'Monaco · 2024 · Béton Ciré' },
    index_why_h2:       { en: 'Why Art Deco',            fr: 'Pourquoi Art Deco' },
    index_auth_h3:      { en: 'Authenticity',            fr: 'Authenticité' },
    index_auth_p:       { en: 'Natural materials with documented origins and traditional recipes, applied with no industrial compromise.',
                          fr: 'Matériaux naturels aux origines documentées et aux recettes traditionnelles, appliqués sans compromis industriel.' },
    index_dur_h3:       { en: 'Durability',              fr: 'Durabilité' },
    index_dur_p:        { en: 'Finishes that live for decades, developing a noble patina instead of degrading over time.',
                          fr: 'Des finitions qui durent des décennies, développant une patine noble au lieu de se dégrader avec le temps.' },
    index_exp_h3:       { en: 'Expert application',      fr: 'Application experte' },
    index_exp_p:        { en: 'Certified applicators, trained in age-old manual techniques. Every surface is worked by hand.',
                          fr: 'Applicateurs certifiés, formés aux techniques manuelles ancestrales. Chaque surface est travaillée à la main.' },
    index_ext_range:    { en: 'Extended range',          fr: 'Gamme étendue' },
    index_explore_more: { en: 'Explore More',            fr: 'Explorer davantage' },
    index_explore_lead: { en: 'Accessible finishes with the same attention to detail',
                          fr: 'Finitions accessibles avec la même attention aux détails' },
    index_tadel_eyebrow:{ en: 'Natural Moroccan Finish', fr: 'Finition marocaine naturelle' },
    index_tadel_p:      { en: 'Lime-based mineral stucco from Morocco. Waterproof, breathable and 100% natural — ideal for wet areas and spa spaces.',
                          fr: 'Stuc minéral à base de chaux du Maroc. Imperméable, respirant et 100% naturel — idéal pour les zones humides et les espaces spa.' },
    index_marm_eyebrow: { en: 'Venetian Stucco',        fr: 'Stuc vénitien' },
    index_marm_p:       { en: 'Lime putty and Carrara marble dust. A technique perfected by the Italian Renaissance for noble, durable surfaces.',
                          fr: 'Pâte de chaux et poudre de marbre de Carrare. Une technique perfectionnée par la Renaissance italienne pour des surfaces nobles et durables.' },
    index_micro_eyebrow:{ en: 'Seamless Mineral Finish', fr: 'Finition minérale sans joints' },
    index_micro_p:      { en: '2–3 mm over any existing substrate. No demolition, no joints, unlimited colour palette.',
                          fr: '2–3 mm sur tout substrat existant. Pas de démolition, pas de joints, palette de couleurs illimitée.' },
    index_clay_eyebrow: { en: 'Natural Breathable Plaster', fr: 'Enduit naturel respirant' },
    index_clay_p:       { en: 'Actively regulates humidity, prevents mould and creates a balanced interior microclimate. 100% natural.',
                          fr: 'Régule activement l\'humidité, prévient les moisissures et crée un microclimat intérieur équilibré. 100% naturel.' },
    index_hemp_eyebrow: { en: 'Biosourced Finish',       fr: 'Finition biosourcée' },
    index_hemp_p:       { en: 'Plant fibres and hydraulic lime. Superior insulation, carbon negative, and a rich natural texture.',
                          fr: 'Fibres végétales et chaux hydraulique. Isolation supérieure, bilan carbone négatif et riche texture naturelle.' },

    /* ── CHUKUM ── */
    chukum_eyebrow:     { en: 'Natural Mayan plaster',   fr: 'Enduit Maya naturel' },
    chukum_sub:         { en: 'Millennial. Natural. Alive.', fr: 'Millénaire. Naturel. Vivant.' },
    chukum_hero_p:      { en: 'A natural plaster of lime and resin from the Havardia albicans tree, used by the Mayan civilization for millennia across the Yucatán Peninsula. A matte, faintly velvety surface in warm beige-rosé tones that vary naturally. Waterproof, breathable, antibacterial — with no synthetic additives.',
                          fr: 'Un enduit naturel de chaux et de résine de l\'arbre Havardia albicans, utilisé par la civilisation maya depuis des millénaires sur la péninsule du Yucatán. Une surface mate, légèrement veloutée dans des tons beige rosé chauds qui varient naturellement. Imperméable, respirant, antibactérien — sans additifs synthétiques.' },
    chukum_origin_eyebrow: { en: 'The origin', fr: 'L\'origine' },
    chukum_origin_h2:   { en: 'A recipe thousands of years old', fr: 'Une recette vieille de millénaires' },
    chukum_origin_p1:   { en: 'Chukum takes its name from the tree Havardia albicans, endemic to the Yucatán Peninsula. The Maya extracted resin from its bark and combined it with lime to obtain a finish resistant to the tropical climate — used on temples, cisterns and homes for thousands of years.',
                          fr: 'Chukum tire son nom de l\'arbre Havardia albicans, endémique à la péninsule du Yucatán. Les Mayas extrayaient la résine de son écorce et la combinaient avec de la chaux pour obtenir une finition résistante au climat tropical — utilisée sur les temples, les citernes et les maisons depuis des millénaires.' },
    chukum_origin_p2:   { en: 'The technique was rediscovered in 1993 by Mexican architect Salvador Reyes Ríos, who preserved the original recipe intact. The resin gives the surface its warm, faintly rosy tint and a natural water resistance, with no synthetic polymers.',
                          fr: 'La technique a été redécouverte en 1993 par l\'architecte mexicain Salvador Reyes Ríos, qui a préservé la recette originale intacte. La résine donne à la surface sa teinte chaude, légèrement rosée, et une résistance naturelle à l\'eau, sans polymères synthétiques.' },
    chukum_origin_p3:   { en: 'Application is entirely artisanal, in successive layers polished by hand, so that every surface remains unique and impossible to reproduce industrially.',
                          fr: 'L\'application est entièrement artisanale, en couches successives polies à la main, de sorte que chaque surface reste unique et impossible à reproduire industriellement.' },
    chukum_finishes_h2: { en: 'Available finishes',      fr: 'Finitions disponibles' },
    chukum_waterproof_h4:{ en: 'Waterproof',             fr: 'Imperméable' },
    chukum_waterproof_p:{ en: 'Natural resistance to water, ideal for pools and bathrooms.',
                          fr: 'Résistance naturelle à l\'eau, idéal pour les piscines et les salles de bain.' },
    chukum_breathable_h4:{ en: 'Breathable',             fr: 'Respirant' },
    chukum_breathable_p:{ en: 'Regulates humidity, with no mould.',
                          fr: 'Régule l\'humidité, sans moisissures.' },
    chukum_natural_h4:  { en: '100% Natural',            fr: '100% Naturel' },
    chukum_natural_p:   { en: 'No synthetic polymers, no chemical additives.',
                          fr: 'Pas de polymères synthétiques, pas d\'additifs chimiques.' },
    chukum_durable_h4:  { en: 'Durable',                 fr: 'Durable' },
    chukum_durable_p:   { en: '30–50 years with minimal maintenance.',
                          fr: '30–50 ans avec un entretien minimal.' },
    chukum_where_h2:    { en: 'Where it is applied',     fr: 'Où est-il appliqué' },
    chukum_app_bath:    { en: 'Bathrooms',               fr: 'Salles de bain' },
    chukum_app_pool:    { en: 'Pools',                   fr: 'Piscines' },
    chukum_app_ext:     { en: 'Exterior',                fr: 'Extérieur' },
    chukum_app_int:     { en: 'Interior',                fr: 'Intérieur' },
    chukum_made_h2:     { en: 'Made with Chukum',        fr: 'Réalisé avec du Chukum' },
    chukum_slide1_h4:   { en: 'Riviera Hotel Spa',       fr: 'Spa de l\'Hôtel Riviera' },
    chukum_slide1_p:    { en: 'Chukum Natural across the wet areas and pool surround.',
                          fr: 'Chukum Naturel sur les zones humides et le pourtour de la piscine.' },
    chukum_slide2_h4:   { en: 'Mediterranean Villa',     fr: 'Villa méditerranéenne' },
    chukum_slide2_p:    { en: 'Chukum Blanco façade with seamless terrace continuity.',
                          fr: 'Façade Chukum Blanco avec continuité parfaite de la terrasse.' },
    chukum_slide3_h4:   { en: 'Private Apartment',       fr: 'Appartement privé' },
    chukum_slide3_p:    { en: 'Chukum Ocre bathroom, hand-polished to a soft sheen.',
                          fr: 'Salle de bain Chukum Ocre, polie à la main pour un brillant doux.' },
    chukum_cta_h2:      { en: 'Interested in Chukum? Let\'s talk.',
                          fr: 'Intéressé par le Chukum ? Parlons-en.' },

    /* ── BÉTON CIRÉ ── */
    beton_eyebrow:      { en: 'Contemporary continuous finish', fr: 'Finition continue contemporaine' },
    beton_sub:          { en: 'Mineral. Continuous. No compromise.', fr: 'Minéral. Continu. Sans compromis.' },
    beton_hero_p:       { en: 'A contemporary mineral finish based on resin-modified cement, applied in ultra-thin 2–3 mm layers directly over existing surfaces. It creates seamless continuous surfaces with a distinctive mineral depth, compatible with underfloor heating and available in more than 50 shades.',
                          fr: 'Une finition minérale contemporaine à base de ciment modifié par résine, appliquée en couches ultra-minces de 2–3 mm directement sur les surfaces existantes. Elle crée des surfaces continues sans joints à la profondeur minérale distinctive, compatible avec le chauffage au sol et disponible en plus de 50 teintes.' },
    beton_mat_eyebrow:  { en: 'The material',            fr: 'Le matériau' },
    beton_mat_h2:       { en: 'Surfaces without limits', fr: 'Surfaces sans limites' },
    beton_mat_p1:       { en: 'Béton Ciré is the contemporary answer to the desire for continuous spaces, free of visual interruptions. It is a modified cement, applied in layers just 2–3 mm thick directly over almost any existing substrate — tiles, concrete, plasterboard or wood — with no demolition.',
                          fr: 'Le Béton Ciré est la réponse contemporaine au désir d\'espaces continus, libres d\'interruptions visuelles. C\'est un ciment modifié, appliqué en couches de seulement 2–3 mm d\'épaisseur directement sur presque tout substrat existant — carrelage, béton, plaque de plâtre ou bois — sans démolition.' },
    beton_mat_p2:       { en: 'The result is a monolithic surface, free of joints, that can clad floors, walls, countertops and furniture alike. Compatible with underfloor heating thanks to its optimal thermal conductivity.',
                          fr: 'Le résultat est une surface monolithique, sans joints, qui peut revêtir les sols, les murs, les plans de travail et les meubles. Compatible avec le chauffage au sol grâce à sa conductivité thermique optimale.' },
    beton_mat_p3:       { en: 'The aesthetic is sober and mineral, in a palette of warm greys and sandy tones. Once sealed, it becomes non-porous, durable and resistant to heavy traffic and moisture.',
                          fr: 'L\'esthétique est sobre et minérale, dans une palette de gris chauds et de tons sablés. Une fois scellé, il devient non poreux, durable et résistant à la circulation intense et à l\'humidité.' },
    beton_finishes_h2:  { en: 'Available finishes',      fr: 'Finitions disponibles' },
    beton_seamless_h4:  { en: 'Seamless',                fr: 'Sans joints' },
    beton_seamless_p:   { en: 'Zero joints — a perfect, continuous surface.',
                          fr: 'Zéro joint — une surface parfaite et continue.' },
    beton_floor_h4:     { en: 'Underfloor heating',      fr: 'Chauffage au sol' },
    beton_floor_p:      { en: 'Optimal thermal conductivity for heated floors.',
                          fr: 'Conductivité thermique optimale pour les sols chauffants.' },
    beton_maintain_h4:  { en: 'Easy to maintain',        fr: 'Facile d\'entretien' },
    beton_maintain_p:   { en: 'Non-porous surface once treated.',
                          fr: 'Surface non poreuse une fois traitée.' },
    beton_custom_h4:    { en: 'Customizable',            fr: 'Personnalisable' },
    beton_custom_p:     { en: '50+ shades available.',   fr: 'Plus de 50 teintes disponibles.' },
    beton_where_h2:     { en: 'Where it is applied',     fr: 'Où est-il appliqué' },
    beton_app_floors:   { en: 'Floors',                  fr: 'Sols' },
    beton_app_walls:    { en: 'Walls',                   fr: 'Murs' },
    beton_app_bath:     { en: 'Bathrooms',               fr: 'Salles de bain' },
    beton_app_kitchen:  { en: 'Kitchens',                fr: 'Cuisines' },
    beton_app_furniture:{ en: 'Furniture',               fr: 'Mobilier' },
    beton_made_h2:      { en: 'Made with Béton Ciré',   fr: 'Réalisé avec du Béton Ciré' },
    beton_slide1_p:     { en: 'Gris Parisien floors flowing seamlessly across 220 m².',
                          fr: 'Sols Gris Parisien s\'écoulant sans joints sur 220 m².' },
    beton_slide2_p:     { en: 'Anthracite walls and display plinths in a single tone.',
                          fr: 'Murs Anthracite et présentoirs dans un seul ton.' },
    beton_slide3_p:     { en: 'Blanc Minéral throughout, including the kitchen island.',
                          fr: 'Blanc Minéral partout, y compris l\'îlot de cuisine.' },
    beton_cta_h2:       { en: 'Béton Ciré in your project.',
                          fr: 'Le Béton Ciré dans votre projet.' },

    /* ── TADELAKT ── */
    tadelakt_eyebrow:   { en: 'Natural Moroccan Finish', fr: 'Finition marocaine naturelle' },
    tadelakt_sub:       { en: 'The Waterproof Art of Morocco', fr: 'L\'art imperméable du Maroc' },
    tadelakt_hero_p:    { en: 'Natural lime-based mineral finish, waterproof and 100% natural. Used for centuries in Moroccan hammams and royal palaces, Tadelakt delivers a velvety, dense, water-resistant surface — with no synthetic additives whatsoever.',
                          fr: 'Finition minérale naturelle à base de chaux, imperméable et 100% naturelle. Utilisé depuis des siècles dans les hammams et palais royaux marocains, le Tadelakt offre une surface veloutée, dense et résistante à l\'eau — sans aucun additif synthétique.' },
    tadelakt_origin_eyebrow: { en: 'Origin', fr: 'Origine' },
    tadelakt_origin_h2: { en: 'A century-old ritual',   fr: 'Un rituel centenaire' },
    tadelakt_origin_p1: { en: 'Tadelakt is one of the oldest and most refined mineral finishes in the world. Originating in Morocco, where it has lined the walls of hammams and royal palaces for centuries, this natural lime-based stucco has stood the test of time — not through compromise, but through perfection.',
                          fr: 'Le Tadelakt est l\'une des finitions minérales les plus anciennes et les plus raffinées au monde. Originaire du Maroc, où il habille les murs des hammams et des palais royaux depuis des siècles, ce stuc naturel à base de chaux a résisté à l\'épreuve du temps — non par compromis, mais par perfection.' },
    tadelakt_origin_p2: { en: 'The application process is itself a ritual. Tadelakt is applied in two to three successive layers, each compressed and polished by hand using river stones or a float. The finishing is done with Marseille soap — the chemical reaction between lime and soap creates a waterproof, dense and velvety surface with no synthetic additives.',
                          fr: 'Le processus d\'application est lui-même un rituel. Le Tadelakt est appliqué en deux à trois couches successives, chacune compressée et polie à la main à l\'aide de pierres de rivière ou d\'une taloche. La finition est réalisée avec du savon de Marseille — la réaction chimique entre la chaux et le savon crée une surface imperméable, dense et veloutée sans additifs synthétiques.' },
    tadelakt_origin_p3: { en: 'The result is a wall that breathes, regulates humidity and grows more beautiful with time. The natural tones — warm beige, grey-green, ochre, cream — are not added pigments, but the expression of the material itself.',
                          fr: 'Le résultat est un mur qui respire, régule l\'humidité et devient plus beau avec le temps. Les tons naturels — beige chaud, gris-vert, ocre, crème — ne sont pas des pigments ajoutés, mais l\'expression du matériau lui-même.' },
    tadelakt_finish1:   { en: 'Natural Beige — warm',   fr: 'Beige naturel — chaud' },
    tadelakt_finish2:   { en: 'Grey-Green — mineral',   fr: 'Gris-vert — minéral' },
    tadelakt_finish3:   { en: 'Ochre — earthy',         fr: 'Ocre — terreux' },
    tadelakt_finish4:   { en: 'Blue Fog — serene',      fr: 'Brume bleue — sereine' },
    tadelakt_waterproof_h4: { en: 'Waterproof',         fr: 'Imperméable' },
    tadelakt_waterproof_p:  { en: 'Natural resistance to water, ideal for bathrooms, pools and wet areas.',
                              fr: 'Résistance naturelle à l\'eau, idéal pour les salles de bain, piscines et zones humides.' },
    tadelakt_breathable_h4: { en: 'Breathable',         fr: 'Respirant' },
    tadelakt_breathable_p:  { en: 'Regulates humidity naturally, preventing mould.',
                              fr: 'Régule l\'humidité naturellement, prévenant les moisissures.' },
    tadelakt_natural_h4:{ en: '100% Natural',           fr: '100% Naturel' },
    tadelakt_natural_p: { en: 'No synthetic additives, no chemical polymers.',
                          fr: 'Pas d\'additifs synthétiques, pas de polymères chimiques.' },
    tadelakt_durable_h4:{ en: 'Durable',                fr: 'Durable' },
    tadelakt_durable_p: { en: 'Becomes more beautiful with time, with minimal maintenance.',
                          fr: 'Devient plus beau avec le temps, avec un entretien minimal.' },
    tadelakt_app_bath:  { en: 'Bathrooms and showers',  fr: 'Salles de bain et douches' },
    tadelakt_app_pool:  { en: 'Indoor pools',           fr: 'Piscines intérieures' },
    tadelakt_app_sink:  { en: 'Monolithic sinks',       fr: 'Vasques monolithiques' },
    tadelakt_app_wall:  { en: 'Feature walls',          fr: 'Murs d\'accent' },
    tadelakt_app_spa:   { en: 'Spa spaces',             fr: 'Espaces spa' },
    tadelakt_cta_h2:    { en: 'Interested in Tadelakt? Let\'s talk.',
                          fr: 'Intéressé par le Tadelakt ? Parlons-en.' },

    /* ── MARMORINO ── */
    marmorino_eyebrow:  { en: 'Venetian Stucco',        fr: 'Stuc vénitien' },
    marmorino_sub:      { en: 'Renaissance Elegance on Your Walls',
                          fr: 'L\'élégance de la Renaissance sur vos murs' },
    marmorino_hero_p:   { en: 'Venetian stucco made from lime putty and Carrara marble dust, with origins in ancient Rome. Mineral nobility, visual depth and a durability that surpasses any industrial finish.',
                          fr: 'Stuc vénitien composé de pâte de chaux et de poudre de marbre de Carrare, aux origines dans la Rome antique. Noblesse minérale, profondeur visuelle et une durabilité qui surpasse toute finition industrielle.' },
    marmorino_hist_eyebrow: { en: 'History',            fr: 'Histoire' },
    marmorino_hist_h2:  { en: 'From Ancient Rome to the present', fr: 'De la Rome antique à nos jours' },
    marmorino_hist_p1:  { en: 'Marmorino is not a modern finish. It is a technique that ancient Romans had already mastered, that the Italian Renaissance perfected, and that contemporary architecture is rediscovering for what it irreducibly brings: mineral nobility, visual depth and a durability that surpasses any industrial finish.',
                          fr: 'Le Marmorino n\'est pas une finition moderne. C\'est une technique que les Romains anciens avaient déjà maîtrisée, que la Renaissance italienne a perfectionnée, et que l\'architecture contemporaine redécouvre pour ce qu\'il apporte irréductiblement : noblesse minérale, profondeur visuelle et une durabilité qui surpasse toute finition industrielle.' },
    marmorino_hist_p2:  { en: 'Its composition is simple and honest — lime putty and natural marble dust, with no synthetic binders, no chemical additives. The resulting shades are those of the marble itself: Carrara white, travertine beige, Pietra Serena grey.',
                          fr: 'Sa composition est simple et honnête — pâte de chaux et poudre de marbre naturelle, sans liants synthétiques, sans additifs chimiques. Les nuances résultantes sont celles du marbre lui-même : blanc Carrare, beige travertin, gris Pietra Serena.' },
    marmorino_hist_p3:  { en: 'Marmorino is applied in two layers, wet on wet, making it efficient for large surfaces. The resulting wall is smooth, pleasant to the touch, breathable and long-lasting — no cracks, no touch-ups, no visual degradation.',
                          fr: 'Le Marmorino est appliqué en deux couches, frais sur frais, ce qui le rend efficace pour les grandes surfaces. Le mur résultant est lisse, agréable au toucher, respirant et durable — sans fissures, sans retouches, sans dégradation visuelle.' },
    marmorino_finish1:  { en: 'Carrara White — pure',   fr: 'Blanc Carrare — pur' },
    marmorino_finish2:  { en: 'Travertine Beige — warm',fr: 'Beige travertin — chaud' },
    marmorino_finish3:  { en: 'Pietra Serena Grey — deep', fr: 'Gris Pietra Serena — profond' },
    marmorino_finish4:  { en: 'Avorio — satin',         fr: 'Avorio — satiné' },
    marmorino_breath_h4:{ en: 'Breathable',             fr: 'Respirant' },
    marmorino_breath_p: { en: 'Naturally regulates humidity in the space.',
                          fr: 'Régule naturellement l\'humidité de l\'espace.' },
    marmorino_dur_h4:   { en: 'Durable',                fr: 'Durable' },
    marmorino_dur_p:    { en: 'Centuries-proven durability, no cracks or visual degradation.',
                          fr: 'Durabilité éprouvée sur des siècles, sans fissures ni dégradation visuelle.' },
    marmorino_nat_h4:   { en: '100% Natural',           fr: '100% Naturel' },
    marmorino_nat_p:    { en: 'Lime putty and marble dust only, no synthetic additives.',
                          fr: 'Pâte de chaux et poudre de marbre uniquement, sans additifs synthétiques.' },
    marmorino_prem_h4:  { en: 'Premium Finish',         fr: 'Finition premium' },
    marmorino_prem_p:   { en: 'Visual depth and mineral nobility that cannot be replicated.',
                          fr: 'Profondeur visuelle et noblesse minérale irréplicables.' },
    marmorino_app_living:{ en: 'Living rooms and bedrooms', fr: 'Salons et chambres' },
    marmorino_app_hall: { en: 'Entrance halls',         fr: 'Halls d\'entrée' },
    marmorino_app_comm: { en: 'Premium commercial spaces', fr: 'Espaces commerciaux premium' },
    marmorino_app_hotel:{ en: 'Luxury hotels and restaurants', fr: 'Hôtels et restaurants de luxe' },
    marmorino_cta_h2:   { en: 'Interested in Marmorino? Let\'s talk.',
                          fr: 'Intéressé par le Marmorino ? Parlons-en.' },

    /* ── MICROCEMENT ── */
    micro_eyebrow:      { en: 'Mineral Finish',         fr: 'Finition minérale' },
    micro_sub:          { en: 'Continuity Without Joints', fr: 'Continuité sans joints' },
    micro_hero_p:       { en: 'A mineral decorative layer based on cement, resins and pigments, only 2–3 mm thick. Applied over any existing substrate, it unifies floors, walls and furniture into a single continuous, seamless surface.',
                          fr: 'Une couche décorative minérale à base de ciment, de résines et de pigments, de seulement 2–3 mm d\'épaisseur. Appliqué sur tout substrat existant, il unifie sols, murs et meubles en une seule surface continue et sans joints.' },
    micro_tech_eyebrow: { en: 'Technique',              fr: 'Technique' },
    micro_tech_h2:      { en: 'Renovation without demolition', fr: 'Rénovation sans démolition' },
    micro_tech_p1:      { en: 'Microcement has redefined what interior renovation means. Unlike tiles, marble or flooring, microcement does not fragment a space into separate elements — it unifies it. Floors, walls, furniture, sinks, stairs: everything becomes a single continuous, coherent surface with no joints to interrupt the visual reading of the space.',
                          fr: 'Le microciment a redéfini ce que signifie la rénovation intérieure. Contrairement aux carreaux, au marbre ou au parquet, le microciment ne fragmente pas un espace en éléments séparés — il l\'unifie. Sols, murs, meubles, vasques, escaliers : tout devient une seule surface continue et cohérente, sans joints pour interrompre la lecture visuelle de l\'espace.' },
    micro_tech_p2:      { en: 'Technically, microcement is a decorative layer based on cement, resins and mineral pigments, only 2–3 mm thick. It is applied over almost any existing substrate — tiles, concrete, plasterboard — with no demolition, no excessive dust, no extended construction period.',
                          fr: 'Techniquement, le microciment est une couche décorative à base de ciment, de résines et de pigments minéraux, de seulement 2–3 mm d\'épaisseur. Il est appliqué sur presque tout substrat existant — carrelage, béton, plaque de plâtre — sans démolition, sans poussière excessive, sans période de chantier prolongée.' },
    micro_tech_p3:      { en: 'The colour palette is virtually unlimited. From pure white to deep anthracite, from warm beige to olive green, microcement adapts to any aesthetic direction — Scandinavian, industrial, Mediterranean or Japanese minimalist.',
                          fr: 'La palette de couleurs est pratiquement illimitée. Du blanc pur à l\'anthracite profond, du beige chaud au vert olive, le microciment s\'adapte à toute direction esthétique — scandinave, industrielle, méditerranéenne ou minimaliste japonaise.' },
    micro_finish1:      { en: 'Parisian Grey',          fr: 'Gris parisien' },
    micro_finish2:      { en: 'Anthracite',             fr: 'Anthracite' },
    micro_finish3:      { en: 'Mineral White',          fr: 'Blanc minéral' },
    micro_finish4:      { en: 'Warm Beige',             fr: 'Beige chaud' },
    micro_finish5:      { en: 'Olive Green',            fr: 'Vert olive' },
    micro_seamless_h4:  { en: 'Seamless',               fr: 'Sans joints' },
    micro_seamless_p:   { en: 'Zero joints — a perfect continuous surface with no visual interruptions.',
                          fr: 'Zéro joint — une surface continue parfaite sans interruptions visuelles.' },
    micro_wear_h4:      { en: 'Wear-resistant',         fr: 'Résistant à l\'usure' },
    micro_wear_p:       { en: 'Treated surface withstands heavy traffic.',
                          fr: 'La surface traitée résiste à une circulation intensive.' },
    micro_easy_h4:      { en: 'Easy to apply',          fr: 'Facile à appliquer' },
    micro_easy_p:       { en: 'On any existing substrate, no demolition required.',
                          fr: 'Sur tout substrat existant, sans démolition requise.' },
    micro_palette_h4:   { en: 'Unlimited palette',      fr: 'Palette illimitée' },
    micro_palette_p:    { en: 'From white to anthracite, any aesthetic direction.',
                          fr: 'Du blanc à l\'anthracite, toute direction esthétique.' },
    micro_app_floors:   { en: 'Open-plan floors',       fr: 'Sols en espace ouvert' },
    micro_app_bath:     { en: 'Complete bathrooms',     fr: 'Salles de bain complètes' },
    micro_app_kitchen:  { en: 'Kitchens',               fr: 'Cuisines' },
    micro_app_bars:     { en: 'Bars and showrooms',     fr: 'Bars et showrooms' },
    micro_app_hotel:    { en: 'Hotel lobbies',          fr: 'Halls d\'hôtel' },
    micro_cta_h2:       { en: 'Interested in Microcement? Let\'s talk.',
                          fr: 'Intéressé par le Microciment ? Parlons-en.' },

    /* ── HEMP + LIME ── */
    hemp_eyebrow:       { en: 'Biosourced Finish',      fr: 'Finition biosourcée' },
    hemp_sub:           { en: 'Insulation and Aesthetics in One Layer',
                          fr: 'Isolation et esthétique en une seule couche' },
    hemp_hero_p:        { en: 'Hemp and lime plaster combines superior thermal and acoustic insulation with an authentic natural aesthetic. A CO₂ negative, renewable material for sustainable projects without aesthetic compromise.',
                          fr: 'L\'enduit chanvre-chaux combine une isolation thermique et acoustique supérieure avec une esthétique naturelle authentique. Un matériau renouvelable à bilan carbone négatif pour des projets durables sans compromis esthétique.' },
    hemp_raw_eyebrow:   { en: 'Raw Material',           fr: 'Matière première' },
    hemp_raw_h2:        { en: 'Regenerated by nature',  fr: 'Régénéré par la nature' },
    hemp_raw_p1:        { en: 'Industrial hemp is one of the fastest-growing and most complete renewable raw materials available today. Grown without pesticides, with a growth cycle of just a few months, it stores CO₂ instead of releasing it — and as a wall finish, it brings these qualities directly into the home.',
                          fr: 'Le chanvre industriel est l\'une des matières premières renouvelables à croissance la plus rapide et la plus complète disponibles aujourd\'hui. Cultivé sans pesticides, avec un cycle de croissance de quelques mois seulement, il stocke le CO₂ au lieu de le libérer — et en tant que finition murale, il apporte ces qualités directement dans la maison.' },
    hemp_raw_p2:        { en: 'Hemp and lime plaster combines the plant fibres of hemp with natural hydraulic lime, producing a material with remarkable properties: superior thermal and acoustic insulation, crack resistance, humidity regulation and a durability proven over time.',
                          fr: 'L\'enduit chanvre-chaux combine les fibres végétales du chanvre avec de la chaux hydraulique naturelle, produisant un matériau aux propriétés remarquables : isolation thermique et acoustique supérieure, résistance aux fissures, régulation de l\'humidité et une durabilité éprouvée dans le temps.' },
    hemp_raw_p3:        { en: 'It is the ideal choice for projects where natural aesthetics and environmental responsibility are not separate options, but the same decision.',
                          fr: 'C\'est le choix idéal pour les projets où l\'esthétique naturelle et la responsabilité environnementale ne sont pas des options séparées, mais une même décision.' },
    hemp_finish1:       { en: 'Raw Natural',            fr: 'Naturel brut' },
    hemp_finish2:       { en: 'Vegetal White',          fr: 'Blanc végétal' },
    hemp_finish3:       { en: 'Fibre Grey',             fr: 'Gris fibre' },
    hemp_finish4:       { en: 'Organic Beige',          fr: 'Beige organique' },
    hemp_insul_h4:      { en: 'Thermal and acoustic insulation', fr: 'Isolation thermique et acoustique' },
    hemp_insul_p:       { en: 'Superior natural performance over conventional finishes.',
                          fr: 'Performance naturelle supérieure aux finitions conventionnelles.' },
    hemp_crack_h4:      { en: 'Crack-resistant',        fr: 'Résistant aux fissures' },
    hemp_crack_p:       { en: 'Hemp fibres naturally reinforce the material and prevent shrinkage.',
                          fr: 'Les fibres de chanvre renforcent naturellement le matériau et préviennent le retrait.' },
    hemp_carbon_h4:     { en: 'Carbon negative',        fr: 'Bilan carbone négatif' },
    hemp_carbon_p:      { en: 'Hemp stores CO₂ throughout the entire life of the wall.',
                          fr: 'Le chanvre stocke le CO₂ tout au long de la vie du mur.' },
    hemp_natural_h4:    { en: '100% Natural',           fr: '100% Naturel' },
    hemp_natural_p:     { en: 'Renewable raw material, grown without pesticides.',
                          fr: 'Matière première renouvelable, cultivée sans pesticides.' },
    hemp_app_walls:     { en: 'Interior and exterior walls', fr: 'Murs intérieurs et extérieurs' },
    hemp_app_reno:      { en: 'Traditional building renovation', fr: 'Rénovation de bâtiments traditionnels' },
    hemp_app_passive:   { en: 'Passive houses',         fr: 'Maisons passives' },
    hemp_app_sustain:   { en: 'Sustainable architecture projects', fr: 'Projets d\'architecture durable' },
    hemp_cta_h2:        { en: 'Interested in Hemp + Lime? Let\'s talk.',
                          fr: 'Intéressé par le Chanvre + Chaux ? Parlons-en.' },

    /* ── LIME + CLAY ── */
    clay_eyebrow:       { en: 'Natural Plaster',        fr: 'Enduit naturel' },
    clay_sub:           { en: 'The Finish That Breathes', fr: 'La finition qui respire' },
    clay_hero_p:        { en: 'A 100% natural, breathable, humidity-regulating finish. Organic tones obtained exclusively from natural mineral pigments, with a living texture that gives each space a unique character.',
                          fr: 'Une finition 100% naturelle, respirante et régulatrice d\'humidité. Des tons organiques obtenus exclusivement à partir de pigments minéraux naturels, avec une texture vivante qui donne à chaque espace un caractère unique.' },
    clay_wisdom_eyebrow:{ en: 'The Wisdom of Matter',   fr: 'La sagesse de la matière' },
    clay_wisdom_h2:     { en: 'A living material',      fr: 'Un matériau vivant' },
    clay_wisdom_p1:     { en: 'Before the chemical industry offered an alternative to every construction challenge, homes repelled moisture, maintained temperature and created thermal comfort through a single material: lime combined with clay. This was not a technological limitation — it was wisdom.',
                          fr: 'Avant que l\'industrie chimique n\'offre une alternative à chaque défi de construction, les maisons repoussaient l\'humidité, maintenaient la température et créaient un confort thermique grâce à un seul matériau : la chaux combinée à l\'argile. Ce n\'était pas une limitation technologique — c\'était de la sagesse.' },
    clay_wisdom_p2:     { en: 'Lime and clay plaster actively regulates the humidity in a room: it absorbs excess moisture when the air is humid and releases it when the air dries out. The effect is a balanced interior microclimate, free of mould, wall condensation and allergens. No mechanical ventilation system fully replicates what a lime and clay wall does passively and continuously.',
                          fr: 'L\'enduit chaux-argile régule activement l\'humidité d\'une pièce : il absorbe l\'excès d\'humidité quand l\'air est humide et la libère quand l\'air se dessèche. L\'effet est un microclimat intérieur équilibré, sans moisissures, sans condensation sur les murs et sans allergènes. Aucun système de ventilation mécanique ne reproduit pleinement ce qu\'un mur de chaux et d\'argile fait passivement et continuellement.' },
    clay_wisdom_p3:     { en: 'Visually, this finish offers an organic, slightly uneven texture — it is precisely this controlled imperfection that gives it character. The earthy tones, cream, ochre, dusty pink or warm grey are obtained exclusively from natural mineral pigments. Every wall is unique, applied by hand, bearing the subtle traces of artisanal gesture.',
                          fr: 'Visuellement, cette finition offre une texture organique, légèrement irrégulière — c\'est précisément cette imperfection contrôlée qui lui donne son caractère. Les tons terreux, crème, ocre, rose poudré ou gris chaud sont obtenus exclusivement à partir de pigments minéraux naturels. Chaque mur est unique, appliqué à la main, portant les traces subtiles du geste artisanal.' },
    clay_finish1:       { en: 'Natural Cream',          fr: 'Crème naturelle' },
    clay_finish2:       { en: 'Earthy Ochre',           fr: 'Ocre terreux' },
    clay_finish3:       { en: 'Dusty Pink',             fr: 'Rose poudré' },
    clay_finish4:       { en: 'Warm Grey',              fr: 'Gris chaud' },
    clay_natural_h4:    { en: '100% Natural',           fr: '100% Naturel' },
    clay_natural_p:     { en: 'No chemical additives, no synthetic substances.',
                          fr: 'Pas d\'additifs chimiques, pas de substances synthétiques.' },
    clay_breathable_h4: { en: 'Breathable',             fr: 'Respirant' },
    clay_breathable_p:  { en: 'Naturally regulates air humidity, keeping the wall dry and healthy.',
                          fr: 'Régule naturellement l\'humidité de l\'air, gardant le mur sec et sain.' },
    clay_humidity_h4:   { en: 'Humidity regulation',   fr: 'Régulation de l\'humidité' },
    clay_humidity_p:    { en: 'Absorbs and releases moisture, creating a balanced interior microclimate.',
                          fr: 'Absorbe et libère l\'humidité, créant un microclimat intérieur équilibré.' },
    clay_allergen_h4:   { en: 'Allergen-free',          fr: 'Sans allergènes' },
    clay_allergen_p:    { en: 'Inert material with no chemical emissions, safe for bedrooms and children\'s rooms.',
                          fr: 'Matériau inerte sans émissions chimiques, sûr pour les chambres et les chambres d\'enfants.' },
    clay_app_bedroom:   { en: 'Bedrooms and children\'s rooms', fr: 'Chambres et chambres d\'enfants' },
    clay_app_relax:     { en: 'Relaxation spaces',      fr: 'Espaces de détente' },
    clay_app_holiday:   { en: 'Holiday homes',          fr: 'Résidences de vacances' },
    clay_app_heritage:  { en: 'Heritage and restoration projects', fr: 'Projets de patrimoine et de restauration' },
    clay_cta_h2:        { en: 'Interested in Lime + Clay? Let\'s talk.',
                          fr: 'Intéressé par la Chaux + Argile ? Parlons-en.' },

    /* ── MATERIALE PAGE ── */
    mat_eyebrow:        { en: 'Our range',              fr: 'Notre gamme' },
    mat_h1:             { en: 'Materials',              fr: 'Matériaux' },
    mat_lead:           { en: 'From the ancient Maya to the Italian Renaissance, from Moroccan hammams to contemporary Scandinavian interiors — Art Deco offers a complete range of natural finishes, each with its own character, its own origin and its own application logic.',
                          fr: 'Des Mayas anciens à la Renaissance italienne, des hammams marocains aux intérieurs scandinaves contemporains — Art Deco offre une gamme complète de finitions naturelles, chacune avec son propre caractère, son origine et sa logique d\'application.' },
    mat_premium_eyebrow:{ en: 'Our specialities',       fr: 'Nos spécialités' },
    mat_premium_h2:     { en: 'Premium Materials',      fr: 'Matériaux premium' },
    mat_alts_eyebrow:   { en: 'Extended range',         fr: 'Gamme étendue' },
    mat_alts_h2:        { en: 'Accessible Alternatives',fr: 'Alternatives accessibles' },
    mat_alts_lead:      { en: 'Natural finishes with the same attention to quality',
                          fr: 'Finitions naturelles avec la même attention à la qualité' },
    mat_filter_all:     { en: 'All',                    fr: 'Tous' },
    mat_filter_natural: { en: 'Natural',                fr: 'Naturel' },
    mat_filter_mineral: { en: 'Mineral',                fr: 'Minéral' },
    mat_filter_water:   { en: 'Waterproof',             fr: 'Imperméable' },
    mat_filter_bio:     { en: 'Biosourced',             fr: 'Biosourcé' },

    /* ── PROJECTS PAGE ── */
    proj_eyebrow:       { en: 'Portfolio',              fr: 'Portfolio' },
    proj_h1:            { en: 'Our projects',           fr: 'Nos projets' },
    proj_lead:          { en: 'Residential and commercial spaces where natural raw matter becomes the protagonist. Each project, a collaboration with architects and designers.',
                          fr: 'Des espaces résidentiels et commerciaux où la matière brute naturelle devient protagoniste. Chaque projet, une collaboration avec des architectes et des designers.' },
    proj_filter_all:    { en: 'All',                    fr: 'Tous' },
    proj_filter_res:    { en: 'Residential',            fr: 'Résidentiel' },
    proj_filter_com:    { en: 'Commercial',             fr: 'Commercial' },
    proj_view_details:  { en: 'View details <span class="arrow">→</span>',
                          fr: 'Voir les détails <span class="arrow">→</span>' },
    proj_card1_h4:      { en: 'Larvotto Private Residence', fr: 'Résidence privée de Larvotto' },
    proj_card1_p:       { en: 'Monaco · Béton Ciré',   fr: 'Monaco · Béton Ciré' },
    proj_card2_h4:      { en: 'Riviera Hotel Spa',      fr: 'Spa de l\'Hôtel Riviera' },
    proj_card2_p:       { en: 'Nice · Chukum',          fr: 'Nice · Chukum' },
    proj_card3_h4:      { en: 'Carré d\'Or Showroom',  fr: 'Showroom Carré d\'Or' },
    proj_card3_p:       { en: 'Monaco · Béton Ciré',   fr: 'Monaco · Béton Ciré' },
    proj_card4_h4:      { en: 'Mediterranean Villa',    fr: 'Villa méditerranéenne' },
    proj_card4_p:       { en: 'Cap-Ferrat · Chukum',   fr: 'Cap-Ferrat · Chukum' },
    proj_card5_h4:      { en: 'Minimalist Penthouse',   fr: 'Penthouse minimaliste' },
    proj_card5_p:       { en: 'Nice · Béton Ciré',     fr: 'Nice · Béton Ciré' },
    proj_card6_h4:      { en: 'Private Apartment',      fr: 'Appartement privé' },
    proj_card6_p:       { en: 'Monaco · Chukum',        fr: 'Monaco · Chukum' },
    proj_card7_h4:      { en: 'Boutique Concept Store', fr: 'Boutique Concept Store' },
    proj_card7_p:       { en: 'Cannes · Béton Ciré',   fr: 'Cannes · Béton Ciré' },
    proj_card8_h4:      { en: 'Garden Pool House',      fr: 'Pool House avec jardin' },
    proj_card8_p:       { en: 'Saint-Tropez · Chukum', fr: 'Saint-Tropez · Chukum' },
    proj_card9_h4:      { en: 'Residence Façade',       fr: 'Façade de résidence' },
    proj_card9_p:       { en: 'Èze · Chukum',          fr: 'Èze · Chukum' },

    /* ── ABOUT PAGE ── */
    about_eyebrow:      { en: 'About us',               fr: 'À propos de nous' },
    about_h1:           { en: 'Raw matter,\nraised to the rank of aesthetics',
                          fr: 'La matière brute,\nélevée au rang de l\'esthétique' },
    about_h1_html:      { en: 'Raw matter,<br />raised to the rank of aesthetics',
                          fr: 'La matière brute,<br />élevée au rang de l\'esthétique' },
    about_lead:         { en: 'Art Deco is a Monaco brand devoted to premium natural finishes — at the meeting point of traditional craftsmanship and the demands of contemporary architecture.',
                          fr: 'Art Deco est une marque monégasque dédiée aux finitions naturelles premium — au carrefour de l\'artisanat traditionnel et des exigences de l\'architecture contemporaine.' },
    about_phil_eyebrow: { en: 'Our philosophy',         fr: 'Notre philosophie' },
    about_phil_h2:      { en: 'Two materials. One philosophy.',
                          fr: 'Deux matériaux. Une philosophie.' },
    about_phil_p1:      { en: 'We live in a world of uniform, industrially produced finishes. Art Deco proposes the opposite: living materials, with origins, that respond to light and transform nobly over time.',
                          fr: 'Nous vivons dans un monde de finitions uniformes et produites industriellement. Art Deco propose le contraire : des matériaux vivants, avec des origines, qui répondent à la lumière et se transforment noblement avec le temps.' },
    about_phil_p2:      { en: 'We have chosen to master just two finishes rather than offer many — <strong>Chukum</strong>, the millennial Mayan plaster, and <strong>Béton Ciré</strong>, the contemporary continuous surface. Both are applied by hand by certified applicators trained in their respective techniques.',
                          fr: 'Nous avons choisi de maîtriser seulement deux finitions plutôt que d\'en proposer beaucoup — le <strong>Chukum</strong>, l\'enduit maya millénaire, et le <strong>Béton Ciré</strong>, la surface continue contemporaine. Les deux sont appliqués à la main par des applicateurs certifiés formés à leurs techniques respectives.' },
    about_phil_p3:      { en: 'We collaborate with architects, designers and developers who understand that a surface is not just a layer, but a fundamental aesthetic decision. Every project begins with a dialogue about space, light and texture.',
                          fr: 'Nous collaborons avec des architectes, des designers et des promoteurs qui comprennent qu\'une surface n\'est pas juste une couche, mais une décision esthétique fondamentale. Chaque projet commence par un dialogue sur l\'espace, la lumière et la texture.' },
    about_stat1_p:      { en: 'Years of experience',   fr: 'Années d\'expérience' },
    about_stat2_p:      { en: 'Completed projects',     fr: 'Projets réalisés' },
    about_stat3_p:      { en: 'Mastered materials',     fr: 'Matériaux maîtrisés' },
    about_values_eyebrow:{ en: 'What guides us',        fr: 'Ce qui nous guide' },
    about_values_h2:    { en: 'Our values',             fr: 'Nos valeurs' },
    about_auth_h3:      { en: 'Authenticity',           fr: 'Authenticité' },
    about_auth_p:       { en: 'Historically documented recipes and techniques, applied with no shortcuts. The origin of the material matters as much as the result.',
                          fr: 'Recettes et techniques historiquement documentées, appliquées sans raccourcis. L\'origine du matériau compte autant que le résultat.' },
    about_craft_h3:     { en: 'Craftsmanship',          fr: 'Artisanat' },
    about_craft_p:      { en: 'The human hand stays visible. Every surface carries the applicator\'s gesture — unrepeatable by definition.',
                          fr: 'La main humaine reste visible. Chaque surface porte le geste de l\'applicateur — irréproductible par définition.' },
    about_dur_h3:       { en: 'Durability',             fr: 'Durabilité' },
    about_dur_p:        { en: 'Finishes that live for decades and gain character, instead of wearing out. Aesthetics and sustainability at once.',
                          fr: 'Des finitions qui durent des décennies et gagnent en caractère, au lieu de s\'user. Esthétique et durabilité à la fois.' },
    about_collab_h3:    { en: 'Collaboration',          fr: 'Collaboration' },
    about_collab_p:     { en: 'We work alongside architects and designers, as partners in the creative process, not just as contractors.',
                          fr: 'Nous travaillons aux côtés des architectes et des designers, comme partenaires du processus créatif, pas seulement comme entrepreneurs.' },
    about_cta_h2:       { en: 'Let\'s build your next project together.',
                          fr: 'Construisons ensemble votre prochain projet.' },

    /* ── CONTACT PAGE ── */
    contact_eyebrow:    { en: 'Contact',                fr: 'Contact' },
    contact_h1:         { en: 'Let\'s talk',            fr: 'Parlons-en' },
    contact_lead:       { en: 'Tell us about your project. We offer consultancy for choosing the right material and tailored estimates.',
                          fr: 'Parlez-nous de votre projet. Nous offrons des conseils pour choisir le bon matériau et des devis personnalisés.' },
    contact_lbl_name:   { en: 'Name',                   fr: 'Nom' },
    contact_lbl_email:  { en: 'Email',                  fr: 'E-mail' },
    contact_lbl_phone:  { en: 'Phone',                  fr: 'Téléphone' },
    contact_lbl_material:{ en: 'Material of interest',  fr: 'Matériau d\'intérêt' },
    contact_lbl_message:{ en: 'Message',                fr: 'Message' },
    contact_opt_select: { en: 'Select a material',      fr: 'Sélectionner un matériau' },
    contact_opt_both:   { en: 'Both',                   fr: 'Les deux' },
    contact_info_h3:    { en: 'Information',            fr: 'Informations' },
    contact_addr_h5:    { en: 'Address',                fr: 'Adresse' },
    contact_phone_h5:   { en: 'Phone',                  fr: 'Téléphone' },
    contact_email_h5:   { en: 'Email',                  fr: 'E-mail' },
    contact_ig_h5:      { en: 'Instagram',              fr: 'Instagram' },
    contact_hours_h5:   { en: 'Hours',                  fr: 'Horaires' },
    contact_hours_p:    { en: 'Monday – Friday · 09:00 – 18:00<br />Saturday · by appointment',
                          fr: 'Lundi – Vendredi · 09:00 – 18:00<br />Samedi · sur rendez-vous' },
    contact_map:        { en: 'Map · Monaco Showroom',  fr: 'Carte · Showroom Monaco' },
    contact_success:    { en: 'Thank you. Your message has been recorded — we will be in touch soon.',
                          fr: 'Merci. Votre message a été enregistré — nous vous contacterons prochainement.' },
    contact_error_gen:  { en: 'Something went wrong. Please try again.',
                          fr: 'Une erreur s\'est produite. Veuillez réessayer.' },
    contact_error_net:  { en: 'Network error. Please try again.',
                          fr: 'Erreur réseau. Veuillez réessayer.' }
  };

  /* ── Engine ── */

  function t(key) {
    var entry = dict[key];
    if (!entry) return key;
    return entry[current] || entry['en'] || key;
  }

  function apply(lang) {
    current = lang;

    /* textContent */
    var els = document.querySelectorAll('[data-i18n]');
    for (var i = 0; i < els.length; i++) {
      var el = els[i];
      var key = el.getAttribute('data-i18n');
      var entry = dict[key];
      if (entry) el.textContent = entry[lang] || entry['en'] || '';
    }

    /* innerHTML */
    var htmlEls = document.querySelectorAll('[data-i18n-html]');
    for (var j = 0; j < htmlEls.length; j++) {
      var hel = htmlEls[j];
      var hkey = hel.getAttribute('data-i18n-html');
      var hentry = dict[hkey];
      if (hentry) hel.innerHTML = hentry[lang] || hentry['en'] || '';
    }

    /* placeholder */
    var pEls = document.querySelectorAll('[data-i18n-placeholder]');
    for (var k = 0; k < pEls.length; k++) {
      var pel = pEls[k];
      var pkey = pel.getAttribute('data-i18n-placeholder');
      var pentry = dict[pkey];
      if (pentry) pel.placeholder = pentry[lang] || pentry['en'] || '';
    }

    /* aria-label */
    var aEls = document.querySelectorAll('[data-i18n-aria]');
    for (var m = 0; m < aEls.length; m++) {
      var ael = aEls[m];
      var akey = ael.getAttribute('data-i18n-aria');
      var aentry = dict[akey];
      if (aentry) ael.setAttribute('aria-label', aentry[lang] || aentry['en'] || '');
    }

    /* html lang attribute */
    document.documentElement.lang = lang;

    /* active button */
    var btns = document.querySelectorAll('.lang-btn');
    for (var n = 0; n < btns.length; n++) {
      btns[n].classList.toggle('is-active', btns[n].getAttribute('data-lang') === lang);
    }

    /* persist */
    try { localStorage.setItem('artdeco_lang', lang); } catch (e) {}
  }

  function init() {
    var saved = 'en';
    try { saved = localStorage.getItem('artdeco_lang') || 'en'; } catch (e) {}
    if (saved !== 'en' && saved !== 'fr') saved = 'en';

    apply(saved);

    document.addEventListener('click', function (e) {
      var btn = e.target;
      if (!btn.classList || !btn.classList.contains('lang-btn')) return;
      apply(btn.getAttribute('data-lang'));
    });
  }

  return { init: init, apply: apply, t: t };
})();
