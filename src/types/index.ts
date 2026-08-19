export type ServiceCategory = 'Bridal' | 'Soft Glam' | 'Special Event' | 'Editorial';

export interface ServiceItem {
  id: string;
  title: string;
  category: ServiceCategory;
  description: string;
  price: number; // in USD ($)
  duration: string;
  imageUrl: string;
  isPopular?: boolean;
  features: string[];
}

export type PortfolioCategory = 'All' | 'Bridal' | 'Soft Glam' | 'Editorial' | 'Special Event';

export interface PortfolioItem {
  id: string;
  title: string;
  category: PortfolioCategory;
  imageUrl: string;
  beforeImageUrl?: string;
  isFeatured?: boolean;
  clientName?: string;
  date?: string;
  description?: string;
}

export interface ShadeOption {
  name: string;
  colorHex: string;
  inStock: boolean;
}

export interface ProductItem {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  price: number; // in USD ($)
  rating: number;
  reviewsCount: number;
  imageUrl: string;
  shades: ShadeOption[];
  isBestseller?: boolean;
  ingredients: string[];
}

export interface CartItem {
  product: ProductItem;
  selectedShade: ShadeOption;
  quantity: number;
}

export interface BookingQuestion {
  id: string;
  question: string;
  type: 'text' | 'textarea' | 'select' | 'radio';
  options?: string[];
  required: boolean;
  enabled: boolean;
  isCustom?: boolean;
}

export type BookingStatus = 'Pending' | 'Payment Submitted' | 'Approved' | 'Rejected' | 'Completed';

export interface BookingRequest {
  id: string; // e.g. "AURA-8402"
  clientName: string;
  clientPhone: string;
  clientEmail: string;
  eventType: string;
  eventDate: string;
  eventTime: string;
  location: string;
  numberOfFaces: number;
  stylePreference: string;
  customAnswers: Record<string, string>;
  notes?: string;
  inspirationImage?: string;
  status: BookingStatus;
  paymentProofUrl?: string;
  paymentAmount: number; // in USD ($)
  createdAt: string;
}

export interface USPaymentInfo {
  zelleEmail: string;
  venmoHandle: string;
  cashAppHandle: string;
  cardAccepted: string;
}

export interface ArtistProfile {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  philosophy: string;
  yearsExperience: number;
  clientCount: number;
  rating: number;
  instagram: string;
  whatsappPhone: string;
  email: string;
  location: string;
  studioAddress: string;
  paymentInfo: USPaymentInfo;
  heroImageUrl: string;
  aboutImageUrl: string;
  maxPortfolioUploads: number;
}

export interface Testimonial {
  id: string;
  clientName: string;
  eventType: string;
  quote: string;
  rating: number;
  avatarUrl?: string;
  date: string;
  location?: string;
}

export interface AnalyticsData {
  profileViews: number;
  bookingRequests: number;
  productSales: number;
  conversionRate: number;
  popularService: string;
  monthlyRevenue: number; // in USD ($)
  trafficSources: { name: string; percentage: number }[];
  viewsHistory: { month: string; views: number; bookings: number }[];
}
