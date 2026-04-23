export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: "starters" | "mains" | "desserts" | "drinks";
  image: string;
  tags?: string[];
  featured?: boolean;
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export interface Reservation {
  id?: string;
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  occasion?: string;
  notes?: string;
}

export interface Review {
  id: string;
  author: string;
  avatar: string;
  rating: number;
  date: string;
  title: string;
  body: string;
  dish?: string;
  verified?: boolean;
}

export const menuItems: MenuItem[] = [
  // STARTERS
  {
    id: "1",
    name: "Peppered Snail",
    description:
      "Giant African land snails slow-cooked in a rich blend of scotch bonnet, tatashe, and aromatic spices",
    price: 14,
    category: "starters",
    // Spicy sautéed shellfish — closest Unsplash visual match
    image: "/Capture2.PNG",
    tags: ["Gluten-Free", "Chef's Pick"],
    featured: true,
  },
  {
    id: "4",
    name: "Pepper Soup",
    description:
      "Fragrant catfish broth with uziza leaves, utazi, and a bold blend of traditional pepper soup spices",
    price: 11,
    category: "starters",
    // Clear spiced broth in a bowl — Kadir Celep on Unsplash
    image: "/Capture1.PNG",
    tags: ["Gluten-Free"],
  },

  // MAINS
  {
    id: "5",
    name: "Jollof Rice & Grilled Chicken",
    description:
      "Smoky party-style jollof rice cooked in a rich tomato base, served with marinated grilled chicken and fried plantain",
    price: 22,
    category: "mains",
    // Jollof rice plate — Keesha's Kitchen on Unsplash
    image:
      "https://images.unsplash.com/photo-1665332195309-9d75071138f0?w=800&q=80",
    tags: ["Gluten-Free", "Chef's Pick"],
    featured: true,
  },
   {
    id: "5",
    name: "Fried Rice and Chicken",
    description:
      "Smoky party-style jollof rice cooked in a rich tomato base, served with marinated grilled chicken and fried plantain",
    price: 22,
    category: "mains",
    // Jollof rice plate — Keesha's Kitchen on Unsplash
    image: "/Capture4.PNG",
    tags: ["Gluten-Free", "Chef's Pick"],
    featured: true,
  },
  {
    id: "6",
    name: "Egusi Soup & Pounded Yam",
    description:
      "Ground melon seed soup cooked with smoked fish, assorted meat, and leafy greens, served with silky hand-pounded yam",
    price: 26,
    category: "mains",
    // Egusi soup bowl — Femoree on Unsplash
    image: "/Capture3.PNG",
    tags: ["Gluten-Free"],
  },
  {
    id: "7",
    name: "Banga Soup & Starch",
    description:
      "Palm nut soup from the Niger Delta, richly spiced with beletete and oburunbebe stick, paired with smooth starch",
    price: 28,
    category: "mains",
    // Rich red palm-based stew — closest Unsplash visual match
    image:
      "https://images.unsplash.com/photo-1708782344137-21c48d98dfcc?w=800&q=80",
    tags: ["Signature"],
  },
  {
    id: "8",
    name: "Ofe Onugbu & Fufu",
    description:
      "Bitter leaf soup slow-cooked with ede cocoyam, ofo thickener, stockfish, and assorted meats, served with cassava fufu",
    price: 24,
    category: "mains",
    // Dark leafy soup with fufu — Gourmet Lenz on Unsplash
    image:
      "https://images.unsplash.com/photo-1705088293125-063256c88cf5?w=800&q=80",
    tags: ["Gluten-Free"],
    featured: true,
  },
  {
    id: "9",
    name: "Nkwobi",
    description:
      "Spiced cow foot served in a rich palm oil and ugba sauce, garnished with utazi leaves and sliced onions",
    price: 30,
    category: "mains",
    // Jollof rice with chicken — Keesha's Kitchen on Unsplash
    image:
      "https://images.unsplash.com/photo-1664992960082-0ea299a9c53e?w=800&q=80",
    tags: ["Chef's Pick"],
  },

  // DESSERTS
  {
    id: "10",
    name: "Puff Puff",
    description:
      "Warm deep-fried dough balls dusted with spiced sugar, served with a drizzle of honey and a side of chocolate dipping sauce",
    price: 7,
    category: "desserts",
    // Fried dough balls — donut holes visual proxy on Unsplash
    image:
      "https://images.unsplash.com/photo-1506459225024-1428097a7e18?w=800&q=80",
    tags: ["Signature"],
    featured: true,
  },
  {
    id: "11",
    name: "Chin Chin",
    description:
      "Crispy fried pastry strips flavoured with nutmeg, coconut, and vanilla, a beloved Nigerian classic",
    price: 6,
    category: "desserts",
    // Crispy golden pastry snacks — closest Unsplash visual match
    image:
      "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=800&q=80",
    tags: ["Vegetarian"],
  },
  {
    id: "12",
    name: "Plantain Cake",
    description:
      "Moist overripe plantain loaf cake with warm cinnamon, topped with a coconut cream glaze",
    price: 9,
    category: "desserts",
    // Banana/plantain loaf cake — closest Unsplash visual match
    image:
      "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?w=800&q=80",
    tags: ["Vegetarian"],
  },

  // DRINKS
  {
    id: "13",
    name: "Chapman",
    description:
      "Nigeria's iconic street cocktail — Fanta, Sprite, Ribena, Angostura bitters, cucumber, and a citrus squeeze over ice",
    price: 6,
    category: "drinks",
    // Colourful chilled drink with garnish — closest Unsplash visual match
    image:
      "https://images.unsplash.com/photo-1497534446932-c925b458314e?w=800&q=80",
    tags: ["Non-Alcoholic"],
  },
  {
    id: "14",
    name: "Zobo Hibiscus Mocktail",
    description:
      "Chilled hibiscus flower drink brewed with ginger, cloves, and pineapple juice — refreshing and tangy",
    price: 5,
    category: "drinks",
    // Deep red hibiscus drink — closest Unsplash visual match
    image:
      "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=800&q=80",
    tags: ["Non-Alcoholic", "By Glass"],
  },
  {
    id: "15",
    name: "Palm Wine",
    description:
      "Freshly tapped sweet palm wine, lightly fermented and served chilled in a traditional calabash-style cup",
    price: 8,
    category: "drinks",
    // Milky white natural drink in a rustic vessel — closest Unsplash visual match
    image:
      "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=800&q=80",
    tags: ["Traditional"],
  },
];

export const reviews: Review[] = [
  {
    id: "r1",
    author: "Isabelle M.",
    avatar: "IM",
    rating: 5,
    date: "March 2025",
    title: "An unforgettable evening",
    body: "From the moment we walked in, the atmosphere was electric. The Wagyu tenderloin was the best piece of meat I have ever tasted — perfectly cooked, melt-in-your-mouth tender. The sommelier's pairing suggestions were spot on. We will absolutely return for our anniversary.",
    dish: "Wagyu Beef Tenderloin",
    verified: true,
  },
  {
    id: "r2",
    author: "James K.",
    avatar: "JK",
    rating: 5,
    date: "February 2025",
    title: "The chocolate soufflé changed my life",
    body: "We came for a special occasion and the staff treated us like royalty from start to finish. The foie gras was transcendent, and the chocolate soufflé — words cannot describe it. Perfectly risen, rich, warm. The crème anglaise alongside was perfection. Worth every penny.",
    dish: "Chocolate Soufflé",
    verified: true,
  },
  {
    id: "r3",
    author: "Sofia R.",
    avatar: "SR",
    rating: 4,
    date: "January 2025",
    title: "Exquisite food, exceptional service",
    body: "The wild mushroom risotto was earthy and comforting in the best possible way. Service was attentive without being intrusive — a difficult balance that they have mastered. The only reason for four stars rather than five is that the reservation timing was slightly delayed, but the maître d' apologised graciously.",
    dish: "Wild Mushroom Risotto",
    verified: true,
  },
  {
    id: "r4",
    author: "Thomas B.",
    avatar: "TB",
    rating: 5,
    date: "December 2024",
    title: "A culinary masterpiece",
    body: "We celebrated our 10th anniversary here and it exceeded every expectation. The lobster thermidor was presented with theatre and tasted even better than it looked. The wine list is extraordinary — our sommelier guided us to a bottle that paired perfectly with every course.",
    dish: "Lobster Thermidor",
    verified: true,
  },
  {
    id: "r5",
    author: "Amara O.",
    avatar: "AO",
    rating: 5,
    date: "November 2024",
    title: "Flawless from start to finish",
    body: "As someone who dines at Michelin-starred restaurants regularly, this was among the finest experiences I have had. The seared scallops were cooked to absolute perfection — a golden crust, silky centre. The cauliflower purée was inspired. I will be recommending this to everyone I know.",
    dish: "Seared Scallops",
    verified: true,
  },
];
