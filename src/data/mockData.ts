import {
  ArtistProfile,
  ServiceItem,
  PortfolioItem,
  ProductItem,
  ProductOrder,
  BookingQuestion,
  BookingRequest,
  Testimonial,
  AnalyticsData,
} from '../types';

export const suggestedQuestionsPreset = [
  'Do you have any skin allergies, sensitivities, or eczema flare-ups?',
  'What finish do you prefer? (Luminous Dewy, Velvet Semi-Matte, Full Airbrush)',
  'Will there be a professional bridal photographer on-site?',
  'Where will the makeup prep take place? (Studio or Venue address)',
  'Do you need individual mink lashes or strip lashes?',
  'What lip shade direction do you prefer? (Nude Silk, Rose Quartz, Warm Truffle)',
];

export const initialArtistProfile: ArtistProfile = {
  name: 'BB BEAUTY PRO',
  title: 'BB Beauty Pro — Master Beauty & Lip Studio',
  tagline: 'Beauty, Artistry & Confidence.',
  bio: 'BB Beauty Pro is a premium American luxury beauty studio based in New York City. With over 8 years styling red carpet appearances, high-fashion editorials, and luxury destination brides, BB Beauty Pro crafts luminous, effortless looks designed to elevate natural radiance.',
  philosophy: 'We believe makeup should elevate your spirit, accentuating your unique beauty with precision skincare prep and refined artistry.',
  yearsExperience: 8,
  clientCount: 220,
  rating: 4.95,
  instagram: '@bb_beauty_pro',
  whatsappPhone: '+1 (212) 555-0198',
  email: 'hello@bbbeautypro.com',
  location: 'SoHo, New York City & Worldwide Destination',
  studioAddress: '482 Broome Street, Studio 4A, SoHo, New York, NY 10013',
  paymentInfo: {
    zelleEmail: 'payments@bbbeautypro.com',
    venmoHandle: '@BBBeautyPro',
    cashAppHandle: '$BBBeautyPro',
    cardAccepted: 'Visa, Mastercard, Amex, Apple Pay',
  },
  heroImageUrl: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1200&auto=format&fit=crop',
  aboutImageUrl: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1000&auto=format&fit=crop',
  maxPortfolioUploads: 30,
};

export const initialServices: ServiceItem[] = [
  {
    id: 'srv-1',
    title: 'Signature Bridal Glam',
    category: 'Bridal',
    description: 'Bespoke bridal makeup tailored for high-definition photography, tear-proof longevity, and luminous skin finish.',
    price: 350,
    duration: '2.5 Hours',
    imageUrl: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=800&auto=format&fit=crop',
    isPopular: true,
    features: [
      'Luxury skincare analysis & facial prep massage',
      'Custom silk mink lash application',
      'Emergency bridal touch-up kit included',
      'Chest & shoulder glow enhancement',
      '14-hour guaranteed camera longevity'
    ]
  },
  {
    id: 'srv-2',
    title: 'Luminous Soft Glam',
    category: 'Soft Glam',
    description: 'Effortless velvet skin prep with neutral warm tones, soft winged definition, and a glassy nude lip.',
    price: 175,
    duration: '1.5 Hours',
    imageUrl: 'https://images.unsplash.com/photo-1526045612212-70caf35c14df?q=80&w=800&auto=format&fit=crop',
    isPopular: true,
    features: [
      'Hydrating collagen prep',
      'Natural mink lashes',
      'Soft contour & cheek highlight',
      'Ideal for engagement photos & dinners'
    ]
  },
  {
    id: 'srv-3',
    title: 'Red Carpet & Special Events',
    category: 'Special Event',
    description: 'Sculpted glam with dramatic eye mapping, precision lip lining, and camera-ready airbrush finish.',
    price: 200,
    duration: '1.75 Hours',
    imageUrl: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=800&auto=format&fit=crop',
    isPopular: false,
    features: [
      'Full coverage airbrush finish',
      'Dramatic 3D volume lashes',
      'Precision lip contouring',
      'Perfect for galas & milestone celebrations'
    ]
  },
  {
    id: 'srv-4',
    title: 'Editorial & Campaign Shoot',
    category: 'Editorial',
    description: 'Lighting-compatible conceptual makeup designed specifically for fashion directors and commercial studio lighting.',
    price: 400,
    duration: '3 Hours',
    imageUrl: 'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?q=80&w=800&auto=format&fit=crop',
    isPopular: false,
    features: [
      'Studio lighting-compatible texture mapping',
      'On-set look change support',
      'High-definition camera ready',
      'Commercial usage licensing'
    ]
  }
];

export const initialProducts: ProductItem[] = [
  {
    id: 'prod-1',
    name: 'Signature Velvet Lip Gloss',
    subtitle: 'High-Shine Non-Sticky Plumping Formula',
    description: 'A luxurious, ultra-cushiony lip gloss infused with Hyaluronic Acid and Jojoba Oil for immediate hydration, volume, and glass-like shine without any stickiness.',
    price: 28,
    rating: 4.9,
    reviewsCount: 128,
    imageUrl: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?q=80&w=800&auto=format&fit=crop',
    isBestseller: true,
    shades: [
      { name: 'Nude Silk', colorHex: '#D8B4A0', inStock: true },
      { name: 'Rose Quartz', colorHex: '#E8A29A', inStock: true },
      { name: 'Champagne Glow', colorHex: '#E5C396', inStock: true },
      { name: 'Berry Luxe', colorHex: '#8A3A4C', inStock: true },
      { name: 'Crystal Clear', colorHex: '#F7EBE1', inStock: true }
    ],
    ingredients: ['Hyaluronic Acid Spheres', 'Organic Jojoba Oil', 'Vitamin E Acetate', 'Coconut Nectar']
  },
  {
    id: 'prod-2',
    name: 'Hydrating Glass Lip Oil',
    subtitle: 'Nourishing Treatment with Sheer Tint',
    description: 'An ultra-nourishing lip oil treatment that combines the high shine of a gloss with the deep hydration of a balm.',
    price: 26,
    rating: 4.85,
    reviewsCount: 94,
    imageUrl: 'https://images.unsplash.com/photo-1625093742435-6fa192b6fb10?q=80&w=800&auto=format&fit=crop',
    isBestseller: true,
    shades: [
      { name: 'Peaches & Cream', colorHex: '#F4A47C', inStock: true },
      { name: 'Petal Nude', colorHex: '#D29680', inStock: true },
      { name: 'Warm Cocoa', colorHex: '#6B4436', inStock: true }
    ],
    ingredients: ['Rosehip Seed Oil', 'Vitamin E', 'Squalane', 'Shea Butter']
  },
  {
    id: 'prod-3',
    name: 'Sculpting Nude Lip Liner',
    subtitle: 'Creamy Long-Wear Precision Pencil',
    description: 'A velvet-smooth, water-resistant lip liner pencil designed to map, define, and enhance your natural lip contour.',
    price: 22,
    rating: 4.95,
    reviewsCount: 82,
    imageUrl: 'https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?q=80&w=800&auto=format&fit=crop',
    isBestseller: false,
    shades: [
      { name: 'Honey Nude', colorHex: '#C08B6F', inStock: true },
      { name: 'Deep Truffle', colorHex: '#52362C', inStock: true },
      { name: 'Chestnut', colorHex: '#7B4E3E', inStock: true }
    ],
    ingredients: ['Carnauba Wax', 'Avocado Oil', 'Vitamin E']
  },
  {
    id: 'prod-4',
    name: 'Overnight Lip Mask & Balm',
    subtitle: 'Deep Recovery Treatment',
    description: 'An intensive leave-on lip mask that coats lips in moisture overnight for soft, smooth, plump lips by morning.',
    price: 30,
    rating: 5.0,
    reviewsCount: 66,
    imageUrl: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&w=800&auto=format&fit=crop',
    isBestseller: false,
    shades: [
      { name: 'Vanilla Bean', colorHex: '#FAF6F0', inStock: true },
      { name: 'Rose Water', colorHex: '#F4C2C2', inStock: true }
    ],
    ingredients: ['Shea Butter', 'Ceramides', 'Peptides', 'Sweet Almond Extract']
  }
];

export const initialProductOrders: ProductOrder[] = [
  {
    id: 'BBPRO-ORD-91204',
    customerName: 'Victoria Sterling',
    customerPhone: '+1 (917) 502-8812',
    customerEmail: 'victoria.sterling@example.com',
    shippingAddress: '740 Park Avenue, Apt 14B',
    cityStateZip: 'New York, NY 10021',
    items: [
      {
        product: initialProducts[0],
        selectedShade: initialProducts[0].shades[0], // Nude Silk
        quantity: 2,
      },
      {
        product: initialProducts[1],
        selectedShade: initialProducts[1].shades[1], // Petal Nude
        quantity: 1,
      },
    ],
    subtotal: 82.00,
    tax: 7.28,
    shippingCost: 0,
    totalAmount: 89.28,
    paymentMethod: 'Apple Pay',
    status: 'Processing',
    createdAt: '2026-08-19T18:40:00.000Z',
  },
  {
    id: 'BBPRO-ORD-91205',
    customerName: 'Maya Lin',
    customerPhone: '+1 (310) 994-3011',
    customerEmail: 'maya.lin@example.com',
    shippingAddress: '412 West End Avenue',
    cityStateZip: 'New York, NY 10024',
    items: [
      {
        product: initialProducts[0],
        selectedShade: initialProducts[0].shades[1], // Rose Quartz
        quantity: 1,
      },
    ],
    subtotal: 28.00,
    tax: 2.49,
    shippingCost: 5.99,
    totalAmount: 36.48,
    paymentMethod: 'Credit Card (Visa)',
    status: 'Shipped',
    createdAt: '2026-08-18T11:15:00.000Z',
  },
];

export const initialPortfolio: PortfolioItem[] = [
  {
    id: 'port-1',
    title: 'The Hamptons Bride — Chloe',
    category: 'Bridal',
    imageUrl: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=1000&auto=format&fit=crop',
    beforeImageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop',
    isFeatured: true,
    clientName: 'Chloe Bennett',
    date: 'August 2026',
    description: 'Soft champagne shimmer with glass-skin prep for an estate wedding in Sag Harbor.'
  },
  {
    id: 'port-2',
    title: 'Met Gala Red Carpet Glam',
    category: 'Special Event',
    imageUrl: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1000&auto=format&fit=crop',
    isFeatured: true,
    clientName: 'Julianne & Team',
    date: 'May 2026',
    description: 'Sculpted bronze contouring paired with Signature Velvet Lip Gloss in Nude Silk.'
  },
  {
    id: 'port-3',
    title: 'Sunset Luminous Soft Glam',
    category: 'Soft Glam',
    imageUrl: 'https://images.unsplash.com/photo-1526045612212-70caf35c14df?q=80&w=1000&auto=format&fit=crop',
    beforeImageUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1000&auto=format&fit=crop',
    isFeatured: true,
    clientName: 'Audrey Vance',
    date: 'July 2026',
    description: 'Monochromatic warm bronze eye with effortless dewy cheek highlights.'
  },
  {
    id: 'port-4',
    title: 'Vogue Campaign Cover Look',
    category: 'Editorial',
    imageUrl: 'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?q=80&w=1000&auto=format&fit=crop',
    isFeatured: true,
    clientName: 'Vogue Studio',
    date: 'June 2026'
  }
];

export const initialBookingQuestions: BookingQuestion[] = [
  {
    id: 'bq-1',
    question: 'Where will the makeup take place? (Studio or Venue Address)',
    type: 'text',
    required: true,
    enabled: true,
    isCustom: false
  },
  {
    id: 'bq-2',
    question: 'How many total people require makeup services?',
    type: 'select',
    options: ['Just me (1 person)', '2 - 3 people', '4 - 6 people (Bridal Party)', '7+ people'],
    required: true,
    enabled: true,
    isCustom: false
  },
  {
    id: 'bq-3',
    question: 'Do you have any skin allergies, sensitivities, or preferences?',
    type: 'textarea',
    required: false,
    enabled: true,
    isCustom: true
  },
  {
    id: 'bq-4',
    question: 'What finish do you prefer?',
    type: 'radio',
    options: ['Luminous & Dewy', 'Velvet Semi-Matte', 'Full Matte Airbrush'],
    required: true,
    enabled: true,
    isCustom: true
  }
];

export const initialBookingRequests: BookingRequest[] = [
  {
    id: 'BBPRO-8402',
    clientName: 'Audrey Vance',
    clientPhone: '+1 (917) 402-9911',
    clientEmail: 'audrey.vance@example.com',
    eventType: 'Signature Bridal Glam',
    eventDate: '2026-09-14',
    eventTime: '10:00 AM',
    location: 'The Plaza Hotel, Fifth Avenue, New York',
    numberOfFaces: 4,
    stylePreference: 'Luminous Dewy Bridal with Soft Gold Accent',
    customAnswers: {
      'bq-1': 'The Plaza Hotel Bridal Suite 1204',
      'bq-2': '4 - 6 people (Bridal Party)',
      'bq-3': 'Sensitive skin around eye area',
      'bq-4': 'Luminous & Dewy'
    },
    notes: 'Please ensure we start promptly as photography commences at 12:30 PM.',
    inspirationImage: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=600&auto=format&fit=crop',
    status: 'Payment Submitted',
    paymentProofUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800&auto=format&fit=crop',
    paymentAmount: 350,
    createdAt: '2026-08-18T14:22:00.000Z'
  },
  {
    id: 'BBPRO-8403',
    clientName: 'Sophia Miller',
    clientPhone: '+1 (310) 882-1049',
    clientEmail: 'sophia.m@example.com',
    eventType: 'Luminous Soft Glam',
    eventDate: '2026-09-21',
    eventTime: '12:00 PM',
    location: 'SoHo Studio, New York',
    numberOfFaces: 1,
    stylePreference: 'Effortless Bronze Soft Glam',
    customAnswers: {
      'bq-1': 'SoHo Studio',
      'bq-2': 'Just me (1 person)',
      'bq-3': 'No latex glue',
      'bq-4': 'Luminous & Dewy'
    },
    notes: 'Birthday dinner glam!',
    status: 'Approved',
    paymentAmount: 175,
    createdAt: '2026-08-16T10:15:00.000Z'
  }
];

export const initialTestimonials: Testimonial[] = [
  {
    id: 't-1',
    clientName: 'Victoria Sterling',
    eventType: 'Hamptons Bride',
    quote: 'BB Beauty Pro made me feel like the most beautiful, luminous version of myself on my wedding day. My makeup stayed flawless through tears and 12 hours of dancing!',
    rating: 5,
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop',
    date: 'August 2026',
    location: 'New York, NY'
  },
  {
    id: 't-2',
    clientName: 'Dr. Evelyn Harper',
    eventType: 'Met Gala Guest',
    quote: 'The professionalism, SoHo studio vibe, and seamless booking experience are unmatched. Plus her Signature Lip Gloss in Nude Silk is my holy grail!',
    rating: 5,
    avatarUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&auto=format&fit=crop',
    date: 'July 2026',
    location: 'Manhattan, NY'
  },
  {
    id: 't-3',
    clientName: 'Jessica Thorne',
    eventType: 'Vogue Fashion Director',
    quote: 'As a fashion director, finding an artist who understands camera light, skin texture, and timing is rare. BB Beauty Pro is extraordinary.',
    rating: 5,
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
    date: 'June 2026',
    location: 'Brooklyn, NY'
  }
];

export const initialAnalytics: AnalyticsData = {
  profileViews: 2480,
  bookingRequests: 68,
  productSales: 142,
  conversionRate: 16.4,
  popularService: 'Signature Bridal Glam',
  monthlyRevenue: 18450, // in USD ($)
  trafficSources: [
    { name: 'Instagram Bio Link (@bb_beauty_pro)', percentage: 54 },
    { name: 'TikTok Beauty Video', percentage: 26 },
    { name: 'Word of Mouth / Referral', percentage: 14 },
    { name: 'Google Search / Direct', percentage: 6 }
  ],
  viewsHistory: [
    { month: 'Apr', views: 1420, bookings: 38 },
    { month: 'May', views: 1680, bookings: 46 },
    { month: 'Jun', views: 1950, bookings: 52 },
    { month: 'Jul', views: 2210, bookings: 61 },
    { month: 'Aug', views: 2480, bookings: 68 }
  ]
};
