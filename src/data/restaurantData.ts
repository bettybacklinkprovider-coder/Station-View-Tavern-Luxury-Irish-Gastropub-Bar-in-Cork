export interface MenuItem {
  id: string;
  name: string;
  category: 'brunch' | 'starters' | 'mains' | 'sides' | 'desserts' | 'drinks';
  price: number;
  description: string;
  image: string;
  dietary?: ('GF' | 'V' | 'VG' | 'DF')[];
  popular?: boolean;
  pairing?: string;
}

export interface SpecialOffer {
  id: string;
  title: string;
  tagline: string;
  description: string;
  days: string;
  priceTag: string;
  originalPrice?: string;
  badge: string;
  highlights: string[];
}

export interface Review {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  source: 'Google Reviews' | 'TripAdvisor' | 'OpenTable';
  comment: string;
  recommendedDish?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'interior' | 'food' | 'drinks' | 'terrace';
  image: string;
  description: string;
}

export const RESTAURANT_INFO = {
  name: 'Station View Tavern',
  tagline: 'Warm Irish Hospitality, Contemporary Gastropub Dining & Vibrant Cocktails',
  phone: '+353 21 450 6847',
  formattedPhone: '+353 21 450 6847',
  email: 'reservations@stationviewtavern.ie',
  address: {
    street: '87 Lower Glanmire Rd',
    area: 'Montenotte',
    city: 'Cork',
    eircode: 'T23 A265',
    country: 'Ireland',
    full: '87 Lower Glanmire Rd, Montenotte, Cork, T23 A265, Ireland',
  },
  coordinates: {
    lat: 51.9015,
    lng: -8.4578,
  },
  openingHours: [
    { day: 'Monday – Thursday', kitchen: '12:00 PM – 9:30 PM', bar: '12:00 PM – 11:30 PM' },
    { day: 'Friday', kitchen: '12:00 PM – 10:00 PM', bar: '12:00 PM – 12:30 AM' },
    { day: 'Saturday', kitchen: '11:00 AM – 10:00 PM', bar: '11:00 AM – 12:30 AM' },
    { day: 'Sunday', kitchen: '11:00 AM – 9:00 PM', bar: '11:00 AM – 11:00 PM' },
  ],
  stats: {
    rating: 4.8,
    totalReviews: 384,
    googleRating: 4.8,
    tripadvisorRank: '#4 Gastropub in Cork City',
  },
  facilities: [
    { title: 'Heated Station Terrace', desc: 'Covered outdoor seating overlooking Lower Glanmire Road' },
    { title: 'Craft Beers & Irish Taps', desc: 'Over 14 draught beers including local Cork stouts and ales' },
    { title: 'Live Sports in 4K', desc: 'Six high-definition screens for GAA, rugby, and Premier League matches' },
    { title: 'Accessible Entrance', desc: 'Step-free access, wheelchair accessible facilities, and wide aisles' },
    { title: 'Fireside Snug Lounge', desc: 'Traditional warm hearth for cosy evenings and private reservations' },
    { title: 'High-Speed Tavern Wi-Fi', desc: 'Complimentary optical fibre broadband throughout the tavern' },
  ],
};

export const INITIAL_MENU_ITEMS: MenuItem[] = [
  // Brunch / Lunch
  {
    id: 'b1',
    name: 'Full Cork Tavern Breakfast',
    category: 'brunch',
    price: 15.50,
    description: 'Rosscarbery Clonakilty black & white pudding, free-range fried eggs, cured Irish bacon, pork sausages, roasted field mushroom, and grilled sourdough.',
    image: '/src/assets/images/food_irish_feast_1793873206910.jpg',
    dietary: ['DF'],
    popular: true,
    pairing: 'Freshly squeezed orange juice or Barry’s Tea Gold Blend',
  },
  {
    id: 'b2',
    name: 'Avocado & Poached Eggs on Brioche',
    category: 'brunch',
    price: 13.90,
    description: 'Smashed Haas avocado, slow-roasted heirloom cherry tomatoes, crumbled feta, pickled red onion, chili crisp, and lemon herb dressing on toasted brioche.',
    image: '/src/assets/images/dish_signature_main_1793873206795.jpg',
    dietary: ['V'],
    pairing: 'Station Sunset Rosé Spritz',
  },
  {
    id: 'b3',
    name: 'Toasted Reuben on Glanmire Rye',
    category: 'brunch',
    price: 14.20,
    description: 'Slow-braised spiced corned beef, house sauerkraut, aged Swiss gruyère, and homemade Russian dressing pressed on artisan rye bread with sea-salt crisps.',
    image: '/src/assets/images/food_irish_feast_1793873206910.jpg',
    pairing: 'Pint of Murphys Irish Stout',
  },

  // Starters
  {
    id: 's1',
    name: 'Wild Atlantic Seafood Chowder',
    category: 'starters',
    price: 11.50,
    description: 'Rich cream broth with fresh Castletownbere salmon, smoked haddock, Roaringwater Bay mussels, and leeks, served with warm homemade brown soda bread.',
    image: '/src/assets/images/food_irish_feast_1793873206910.jpg',
    popular: true,
    pairing: 'Chablis or Smithwick’s Red Ale',
  },
  {
    id: 's2',
    name: 'Crispy Jameson Glazed Chicken Wings',
    category: 'starters',
    price: 10.80,
    description: 'Crispy fried wings tossed in a sticky Jameson whiskey & blood orange glaze, served with Cashel Blue cheese dip and celery ribbons.',
    image: '/src/assets/images/dish_signature_main_1793873206795.jpg',
    dietary: ['GF'],
    popular: true,
  },
  {
    id: 's3',
    name: 'Ardsallagh Goat’s Cheese Crostini',
    category: 'starters',
    price: 10.20,
    description: 'Warm local Cork goat’s cheese on grilled sourdough, caramelized figs, candied walnuts, and a drizzle of thyme-infused wildflower honey.',
    image: '/src/assets/images/dish_signature_main_1793873206795.jpg',
    dietary: ['V'],
  },

  // Mains
  {
    id: 'm1',
    name: 'Station View Prime Angus Ribeye (10oz)',
    category: 'mains',
    price: 31.00,
    description: '28-day dry-aged Irish Angus beef, roasted shallot puree, charred asparagus, crispy hand-cut chips, and pink peppercorn whiskey butter sauce.',
    image: '/src/assets/images/dish_signature_main_1793873206795.jpg',
    popular: true,
    dietary: ['GF'],
    pairing: 'Bordeaux Supérieur or Murphy’s Stout',
  },
  {
    id: 'm2',
    name: 'Montenotte Beer-Battered Fish & Chips',
    category: 'mains',
    price: 21.50,
    description: 'Day-boat fresh cod in a light Kinsale craft pale ale batter, crushed minted garden peas, caper & gherkin tartar sauce, and thick chips.',
    image: '/src/assets/images/food_irish_feast_1793873206910.jpg',
    popular: true,
    pairing: 'Crisp Sauvignon Blanc or Guinness Extra Cold',
  },
  {
    id: 'm3',
    name: 'Traditional Slow-Cooked Irish Lamb Stew',
    category: 'mains',
    price: 22.00,
    description: 'Tender West Cork lamb neck braised for 8 hours with root vegetables, pearl barley, fresh thyme, and fluffy buttermilk mash.',
    image: '/src/assets/images/food_irish_feast_1793873206910.jpg',
    dietary: ['DF'],
    pairing: 'Rioja Reserva or Beamish Genuine Stout',
  },
  {
    id: 'm4',
    name: 'Pan-Seared Atlantic Salmon Fillet',
    category: 'mains',
    price: 24.50,
    description: 'Crisp skin Atlantic salmon served over sweet potato and citrus mousseline, sautéed samphire, baby leeks, and a blood-orange reduction.',
    image: '/src/assets/images/dish_signature_main_1793873206795.jpg',
    dietary: ['GF'],
    popular: true,
    pairing: 'Chardonnay or Signature Sunset Spritz',
  },
  {
    id: 'm5',
    name: 'The Station Smash Angus Burger',
    category: 'mains',
    price: 18.50,
    description: 'Double 4oz prime Irish beef patties, smoked Gubbeen cheese, crispy bacon jam, house pickles, garlic aioli on a toasted brioche with rosemary fries.',
    image: '/src/assets/images/dish_signature_main_1793873206795.jpg',
    pairing: 'Local Cork Red IPA',
  },
  {
    id: 'm6',
    name: 'Wild Woodland Mushroom & Truffle Risotto',
    category: 'mains',
    price: 19.80,
    description: 'Carnaroli rice cooked with wild chanterelles, porcini broth, shaved Coolea cheese, baby spinach, and white truffle oil.',
    image: '/src/assets/images/dish_signature_main_1793873206795.jpg',
    dietary: ['V', 'GF'],
    pairing: 'Pinot Noir',
  },

  // Sides
  {
    id: 'sd1',
    name: 'Triple Cooked Chunky Chips with Rosemary Salt',
    category: 'sides',
    price: 5.50,
    description: 'Hand-cut Maris Piper potatoes triple-cooked to golden crispness with freshly minced rosemary and sea salt flakes.',
    image: '/src/assets/images/food_irish_feast_1793873206910.jpg',
    dietary: ['V', 'VG', 'GF'],
  },
  {
    id: 'sd2',
    name: 'Truffle & Parmesan Loaded Fries',
    category: 'sides',
    price: 6.80,
    description: 'Skin-on thin cut fries tossed in white truffle oil, grated aged Parmesan, and chopped fresh chives with garlic mayo.',
    image: '/src/assets/images/food_irish_feast_1793873206910.jpg',
    dietary: ['V'],
  },
  {
    id: 'sd3',
    name: 'Beer-Battered Onion Rings',
    category: 'sides',
    price: 5.20,
    description: 'Crisp craft-beer battered sweet Spanish onion rings served with smoky chipotle dip.',
    image: '/src/assets/images/food_irish_feast_1793873206910.jpg',
    dietary: ['V'],
  },

  // Desserts
  {
    id: 'd1',
    name: 'Warm Cork Bramley Apple Crumble',
    category: 'desserts',
    price: 8.50,
    description: 'Stewed spiced Bramley apples beneath an oat, brown sugar, and almond crumble top, served with bourbon vanilla ice cream and warm custard.',
    image: '/src/assets/images/dish_signature_main_1793873206795.jpg',
    popular: true,
    dietary: ['V'],
  },
  {
    id: 'd2',
    name: 'Baileys Irish Cream & Dark Chocolate Tart',
    category: 'desserts',
    price: 9.00,
    description: 'Silky 70% dark Belgian chocolate ganache infused with Baileys Irish cream in a crisp pastry crust, served with raspberry coulis.',
    image: '/src/assets/images/dish_signature_main_1793873206795.jpg',
    popular: true,
    dietary: ['V'],
  },

  // Drinks
  {
    id: 'dr1',
    name: 'Station Sunset Spritz (Signature)',
    category: 'drinks',
    price: 13.50,
    description: 'Aperol, pink grapefruit liqueur, sparkling Prosecco DOC, blood orange soda, fresh rosemary sprig, and dehydrated citrus wheel.',
    image: '/src/assets/images/cocktails_sunset_spritz_1793873207362.jpg',
    popular: true,
    dietary: ['VG'],
  },
  {
    id: 'dr2',
    name: 'Montenotte Rosé Fizz',
    category: 'drinks',
    price: 14.00,
    description: 'Dingle Irish Artisan Gin, freshly pressed strawberry puree, elderflower cordial, splash of Laurent-Perrier Brut Champagne, served in crystal coupe.',
    image: '/src/assets/images/cocktails_sunset_spritz_1793873207362.jpg',
    popular: true,
  },
  {
    id: 'dr3',
    name: 'The Glanmire Smoked Old Fashioned',
    category: 'drinks',
    price: 14.50,
    description: 'Redbreast 12 Year Old Single Pot Still Irish Whiskey, orange bitters, organic maple syrup, smoked with charred oak wood chips at your table.',
    image: '/src/assets/images/cocktails_sunset_spritz_1793873207362.jpg',
    popular: true,
  },
  {
    id: 'dr4',
    name: 'Guinness Draught / Murphy’s Cork Stout',
    category: 'drinks',
    price: 6.20,
    description: 'Freshly poured with a smooth creamy head from our temperature-controlled cellar taps. Poured the traditional two-part Cork way.',
    image: '/src/assets/images/interior_luxury_bar_1793873204937.jpg',
    popular: true,
  },
];

export const SPECIAL_OFFERS: SpecialOffer[] = [
  {
    id: 'offer-1',
    title: 'Weekend Traditional Roast Feast',
    tagline: 'The Ultimate Sunday Gathering',
    description: 'Succulent slow-roasted Irish sirloin of beef or herb-crusted pork loin served with beef dripping roasties, giant Yorkshire pudding, buttered greens, and rich red wine gravy.',
    days: 'Every Saturday & Sunday from 12:30 PM',
    priceTag: '€23.50 per person',
    originalPrice: '€29.00',
    badge: 'Popular Weekend Tradition',
    highlights: ['Includes side of glazed honey carrots', 'Family platter options available', 'Pair with a pint of Murphy’s Stout for €5'],
  },
  {
    id: 'offer-2',
    title: 'Midweek Steak & Wine Evening',
    tagline: 'Casual Luxury for Two',
    description: 'Two 10oz dry-aged Irish Prime Ribeye steaks with triple-cooked chips, roasted tomato, mushroom, choice of pepper or garlic butter sauce, and a full bottle of house Red or White wine.',
    days: 'Wednesday & Thursday Evenings',
    priceTag: '€68 for two',
    originalPrice: '€88.00',
    badge: 'Couples & Friends Special',
    highlights: ['Two 10oz prime cuts', 'Full bottle of selected European wine', 'Complimentary dessert to share'],
  },
  {
    id: 'offer-3',
    title: 'Sunset Cocktails & Bites Happy Hour',
    tagline: 'Pink & Orange Golden Hour',
    description: 'Enjoy two of our handcrafted signature spritzes and cocktails alongside a selection of artisanal tavern small plates on our heated terrace.',
    days: 'Monday – Friday, 4:00 PM – 7:00 PM',
    priceTag: '2-for-1 Cocktails (€14)',
    originalPrice: '€28.00',
    badge: 'Happy Hour Special',
    highlights: ['All signature cocktails included', 'Half-price crostini & wings', 'Heated covered terrace seating'],
  },
  {
    id: 'offer-4',
    title: 'Matchday Pint & Crispy Wings',
    tagline: 'Live Rugby & GAA on 4K Screens',
    description: 'Cheer for Munster or Cork GAA with a large basket of crispy Jameson-glazed wings and a cold pint of Guinness, Murphy’s, or Kinsale Craft Lager.',
    days: 'During All Live Match Broadcasts',
    priceTag: '€16.00 combo',
    originalPrice: '€21.00',
    badge: 'Matchday Special',
    highlights: ['Reserved high-top tables available', 'Choice of 4 wing sauces', 'Fast bar service during half-time'],
  },
];

export const CUSTOMER_REVIEWS: Review[] = [
  {
    id: 'r1',
    author: 'Ciarán O’Mahony',
    location: 'Montenotte, Cork',
    rating: 5,
    date: '3 weeks ago',
    source: 'Google Reviews',
    comment: 'Station View Tavern has completely redefined gastropub dining in this part of Cork. The ribeye steak was cooked to perfection and the Station Sunset Spritz is easily the best cocktail in the city. Outstanding service from Sean and the team.',
    recommendedDish: 'Station View Prime Angus Ribeye & Sunset Spritz',
  },
  {
    id: 'r2',
    author: 'Aoife Kelly',
    location: 'Blackrock, Cork',
    rating: 5,
    date: '1 month ago',
    source: 'TripAdvisor',
    comment: 'We booked a table for my mother’s birthday dinner. The warm pink and amber lighting gives the interior such a luxurious and welcoming vibe. The Atlantic seafood chowder and fish & chips were unbelievably fresh. We will be regular visitors!',
    recommendedDish: 'Wild Atlantic Seafood Chowder & Cod Fish and Chips',
  },
  {
    id: 'r3',
    author: 'Liam Fitzgerald',
    location: 'Cobh, Co. Cork',
    rating: 5,
    date: '2 weeks ago',
    source: 'Google Reviews',
    comment: 'Super convenient location just a short walk up from Kent Station. Poured one of the creamiest pints of Murphy’s I have had in Cork. Cozy fireside snug and great atmosphere on match days.',
    recommendedDish: 'Murphy’s Stout & Station Smash Burger',
  },
  {
    id: 'r4',
    author: 'Sinead & Brian Murphy',
    location: 'Douglas, Cork',
    rating: 5,
    date: 'Last weekend',
    source: 'OpenTable',
    comment: 'The Sunday Roast special is sensational. Generous portions, fantastic homemade Yorkshire pudding, and the staff were so attentive even though the tavern was completely buzzing. Booking online was effortless.',
    recommendedDish: 'Weekend Traditional Roast Feast',
  },
  {
    id: 'r5',
    author: 'David Henderson',
    location: 'Dublin / Cork visitor',
    rating: 5,
    date: '2 months ago',
    source: 'Google Reviews',
    comment: 'Came off the Dublin train hungry and wandered in. Blown away by the quality of food, modern presentation, and Irish charm. Definitely a must-visit spot in Cork.',
    recommendedDish: 'Pan-Seared Atlantic Salmon',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Historic Tavern Facade at Twilight',
    category: 'interior',
    image: '/src/assets/images/hero_tavern_front_1793873205197.jpg',
    description: 'Our iconic Lower Glanmire Road tavern facade glowing with warm evening lights.',
  },
  {
    id: 'g2',
    title: 'Mahogany Bar & Premium Whiskey Snug',
    category: 'interior',
    image: '/src/assets/images/interior_luxury_bar_1793873204937.jpg',
    description: 'Handcrafted woodwork, brass footrails, and an extensive collection of rare Irish whiskeys.',
  },
  {
    id: 'g3',
    title: 'Prime Irish Ribeye & Atlantic Salmon',
    category: 'food',
    image: '/src/assets/images/dish_signature_main_1793873206795.jpg',
    description: 'Locally sourced grass-fed beef and fresh Atlantic catch plated with modern gastropub artistry.',
  },
  {
    id: 'g4',
    title: 'Signature Sunset & Rosé Spritzes',
    category: 'drinks',
    image: '/src/assets/images/cocktails_sunset_spritz_1793873207362.jpg',
    description: 'Our signature Pink & Orange luxury cocktail creations crafted with artisanal botanicals.',
  },
  {
    id: 'g5',
    title: 'Traditional Irish Fish & Chips & Chowder',
    category: 'food',
    image: '/src/assets/images/food_irish_feast_1793873206910.jpg',
    description: 'Crisp craft beer battered cod with fresh homemade seafood chowder and creamy Murphy’s stout.',
  },
];
