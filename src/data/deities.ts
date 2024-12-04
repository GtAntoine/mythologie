import { Deity } from '../types/mythology';

export const deities: Deity[] = [
  {
    id: 'ouranos',
    name: 'Ouranos',
    title: 'Dieu Primordial du Ciel',
    domain: 'Ciel et Univers',
    wikipediaUrl: 'https://fr.wikipedia.org/wiki/Ouranos',
    description: 'Divinité primordiale personnifiant le ciel, Ouranos est le fils et époux de Gaïa. Il est le père des Titans, des Cyclopes et des Hécatonchires.',
    icon: 'Cloud',
    relationships: [
      { type: 'spouse', with: 'gaia' },
      { type: 'parent', with: 'kronos' },
      { type: 'parent', with: 'rhea' },
      { type: 'parent', with: 'oceanos' }
    ]
  },
  {
    id: 'gaia',
    name: 'Gaïa',
    title: 'Déesse Primordiale de la Terre',
    domain: 'Terre et Nature',
    wikipediaUrl: 'https://fr.wikipedia.org/wiki/Ga%C3%AEa',
    description: 'Mère Terre primordiale, Gaïa est à l\'origine de toute vie. Elle donna naissance aux Titans avec Ouranos.',
    icon: 'Mountain',
    relationships: [
      { type: 'spouse', with: 'ouranos' },
      { type: 'parent', with: 'kronos' },
      { type: 'parent', with: 'rhea' },
      { type: 'parent', with: 'oceanos' }
    ]
  },
  {
    id: 'kronos',
    name: 'Kronos',
    title: 'Roi des Titans',
    domain: 'Temps et Destin',
    wikipediaUrl: 'https://fr.wikipedia.org/wiki/Cronos',
    description: 'Le plus jeune des Titans, Kronos renversa son père Ouranos et régna sur l\'âge d\'or jusqu\'à ce que son fils Zeus le détrône.',
    icon: 'Clock',
    relationships: [
      { type: 'child', with: 'ouranos' },
      { type: 'child', with: 'gaia' },
      { type: 'spouse', with: 'rhea' },
      { type: 'parent', with: 'zeus' },
      { type: 'parent', with: 'poseidon' },
      { type: 'parent', with: 'hades' },
      { type: 'sibling', with: 'oceanos' }
    ]
  },
  {
    id: 'rhea',
    name: 'Rhéa',
    title: 'Titanide de la Maternité',
    domain: 'Fertilité et Génération',
    wikipediaUrl: 'https://fr.wikipedia.org/wiki/Rh%C3%A9a_(mythologie)',
    description: 'Titanide de la fertilité et mère des premiers dieux olympiens, Rhéa sauva Zeus de Kronos qui dévorait ses enfants.',
    icon: 'Heart',
    relationships: [
      { type: 'child', with: 'ouranos' },
      { type: 'child', with: 'gaia' },
      { type: 'spouse', with: 'kronos' },
      { type: 'parent', with: 'zeus' },
      { type: 'parent', with: 'poseidon' },
      { type: 'parent', with: 'hades' }
    ]
  },
  {
    id: 'oceanos',
    name: 'Océanos',
    title: 'Titan des Eaux',
    domain: 'Océans et Fleuves',
    wikipediaUrl: 'https://fr.wikipedia.org/wiki/Oc%C3%A9an_(mythologie)',
    description: 'Titan des eaux qui entourent le monde, Océanos est le père de tous les fleuves et des Océanides.',
    icon: 'Waves',
    relationships: [
      { type: 'child', with: 'ouranos' },
      { type: 'child', with: 'gaia' },
      { type: 'sibling', with: 'kronos' },
      { type: 'sibling', with: 'rhea' }
    ]
  },
  {
    id: 'zeus',
    name: 'Zeus',
    title: 'Roi des dieux',
    domain: 'Ciel et Tonnerre',
    wikipediaUrl: 'https://fr.wikipedia.org/wiki/Zeus',
    description: 'Souverain des dieux et des hommes, maître de l\'Olympe. Zeus règne sur le ciel et contrôle la foudre.',
    icon: 'Zap',
    relationships: [
      { type: 'child', with: 'kronos' },
      { type: 'child', with: 'rhea' },
      { type: 'spouse', with: 'hera' },
      { type: 'sibling', with: 'poseidon' },
      { type: 'sibling', with: 'hades' },
      { type: 'parent', with: 'apollon' },
      { type: 'parent', with: 'artemis' },
      { type: 'parent', with: 'hermes' },
      { type: 'parent', with: 'athena' }
    ]
  },
  {
    id: 'hera',
    name: 'Héra',
    title: 'Reine des dieux',
    domain: 'Mariage et Famille',
    wikipediaUrl: 'https://fr.wikipedia.org/wiki/H%C3%A9ra',
    description: 'Épouse de Zeus et protectrice du mariage, Héra veille sur les liens familiaux et la fidélité conjugale.',
    icon: 'Crown',
    relationships: [
      { type: 'spouse', with: 'zeus' },
      { type: 'parent', with: 'hephaistos' },
      { type: 'parent', with: 'ares' }
    ]
  },
  {
    id: 'poseidon',
    name: 'Poséidon',
    title: 'Dieu des Mers',
    domain: 'Océans et Séismes',
    wikipediaUrl: 'https://fr.wikipedia.org/wiki/Pos%C3%A9idon',
    description: 'Maître des océans et des tremblements de terre, Poséidon règne sur les mers et peut déclencher des tempêtes.',
    icon: 'Waves',
    relationships: [
      { type: 'sibling', with: 'zeus' },
      { type: 'sibling', with: 'hades' }
    ]
  },
  {
    id: 'hades',
    name: 'Hadès',
    title: 'Dieu des Enfers',
    domain: 'Monde souterrain et Richesses',
    wikipediaUrl: 'https://fr.wikipedia.org/wiki/Had%C3%A8s',
    description: 'Souverain du monde souterrain et gardien des richesses de la terre, Hadès veille sur les âmes des morts.',
    icon: 'Skull',
    relationships: [
      { type: 'sibling', with: 'zeus' },
      { type: 'sibling', with: 'poseidon' },
      { type: 'spouse', with: 'persephone' }
    ]
  },
  {
    id: 'athena',
    name: 'Athéna',
    title: 'Déesse de la Sagesse',
    domain: 'Sagesse, Guerre stratégique et Arts',
    wikipediaUrl: 'https://fr.wikipedia.org/wiki/Ath%C3%A9na',
    description: 'Née de la tête de Zeus, Athéna incarne la sagesse, la stratégie militaire et protège les arts.',
    icon: 'Brain',
    relationships: [
      { type: 'child', with: 'zeus' }
    ]
  },
  {
    id: 'apollon',
    name: 'Apollon',
    title: 'Dieu des Arts',
    domain: 'Musique, Poésie, Prophétie',
    wikipediaUrl: 'https://fr.wikipedia.org/wiki/Apollon',
    description: 'Dieu de la lumière, des arts et de la divination, Apollon est aussi le patron des oracles.',
    icon: 'Music',
    relationships: [
      { type: 'child', with: 'zeus' },
      { type: 'sibling', with: 'artemis' }
    ]
  },
  {
    id: 'artemis',
    name: 'Artémis',
    title: 'Déesse de la Chasse',
    domain: 'Chasse, Lune et Nature sauvage',
    wikipediaUrl: 'https://fr.wikipedia.org/wiki/Art%C3%A9mis',
    description: 'Sœur jumelle d\'Apollon, Artémis est la protectrice de la nature et des animaux sauvages.',
    icon: 'Target',
    relationships: [
      { type: 'child', with: 'zeus' },
      { type: 'sibling', with: 'apollon' }
    ]
  },
  {
    id: 'ares',
    name: 'Arès',
    title: 'Dieu de la Guerre',
    domain: 'Guerre et Violence',
    wikipediaUrl: 'https://fr.wikipedia.org/wiki/Ar%C3%A8s',
    description: 'Dieu de la guerre brutale et de la violence, Arès représente le côté sauvage des conflits.',
    icon: 'Swords',
    relationships: [
      { type: 'child', with: 'zeus' },
      { type: 'child', with: 'hera' }
    ]
  },
  {
    id: 'aphrodite',
    name: 'Aphrodite',
    title: 'Déesse de l\'Amour',
    domain: 'Amour, Beauté et Fertilité',
    wikipediaUrl: 'https://fr.wikipedia.org/wiki/Aphrodite',
    description: 'Née de l\'écume de la mer, Aphrodite incarne l\'amour, la beauté et la séduction.',
    icon: 'Heart',
    relationships: [
      { type: 'spouse', with: 'hephaistos' }
    ]
  },
  {
    id: 'hephaistos',
    name: 'Héphaïstos',
    title: 'Dieu du Feu',
    domain: 'Forge et Artisanat',
    wikipediaUrl: 'https://fr.wikipedia.org/wiki/H%C3%A9pha%C3%AFstos',
    description: 'Maître forgeron des dieux, Héphaïstos crée des objets magiques dans ses forges souterraines.',
    icon: 'Flame',
    relationships: [
      { type: 'child', with: 'hera' },
      { type: 'spouse', with: 'aphrodite' }
    ]
  },
  {
    id: 'hermes',
    name: 'Hermès',
    title: 'Messager des Dieux',
    domain: 'Commerce, Voyages et Communication',
    wikipediaUrl: 'https://fr.wikipedia.org/wiki/Herm%C3%A8s',
    description: 'Messager des dieux et guide des âmes, Hermès protège les voyageurs et les marchands.',
    icon: 'Send',
    relationships: [
      { type: 'child', with: 'zeus' }
    ]
  },
  {
    id: 'persephone',
    name: 'Perséphone',
    title: 'Reine des Enfers',
    domain: 'Printemps et Monde souterrain',
    wikipediaUrl: 'https://fr.wikipedia.org/wiki/Pers%C3%A9phone',
    description: 'Fille de Déméter et épouse d\'Hadès, Perséphone partage son temps entre le monde des vivants et celui des morts.',
    icon: 'Flower',
    relationships: [
      { type: 'spouse', with: 'hades' }
    ]
  }
];