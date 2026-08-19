'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  ArtistProfile,
  ServiceItem,
  PortfolioItem,
  ProductItem,
  CartItem,
  ShadeOption,
  BookingQuestion,
  BookingRequest,
  BookingStatus,
  Testimonial,
  AnalyticsData,
} from '../types';
import {
  initialArtistProfile,
  initialServices,
  initialPortfolio,
  initialProducts,
  initialBookingQuestions,
  initialBookingRequests,
  initialTestimonials,
  initialAnalytics,
} from '../data/mockData';

interface Toast {
  id: string;
  message: string;
  type: 'success' | 'error' | 'info';
}

interface MuaContextType {
  profile: ArtistProfile;
  services: ServiceItem[];
  portfolio: PortfolioItem[];
  products: ProductItem[];
  cart: CartItem[];
  bookingQuestions: BookingQuestion[];
  bookingRequests: BookingRequest[];
  testimonials: Testimonial[];
  analytics: AnalyticsData;
  blockedDates: string[];
  timeSlots: string[];
  toasts: Toast[];
  
  // UI & Demo Modal state
  isBookingOpen: boolean;
  selectedServiceForBooking: ServiceItem | null;
  activeBookingRef: string | null;
  activeDemoPackage: 'ESSENTIAL' | 'SIGNATURE';
  isCartOpen: boolean;
  isCheckoutOpen: boolean;
  
  // Shopping Cart Actions
  openCart: () => void;
  closeCart: () => void;
  addToCart: (product: ProductItem, shade: ShadeOption, quantity?: number) => void;
  updateCartQuantity: (productId: string, shadeName: string, quantity: number) => void;
  removeFromCart: (productId: string, shadeName: string) => void;
  cartCount: number;
  cartSubtotal: number;
  openCheckout: () => void;
  closeCheckout: () => void;
  
  // Package Switcher Actions
  setActiveDemoPackage: (pkg: 'ESSENTIAL' | 'SIGNATURE') => void;
  openBookingModal: (service?: ServiceItem) => void;
  closeBookingModal: () => void;
  showToast: (message: string, type?: 'success' | 'error' | 'info') => void;
  
  // Profile & CMS Actions
  updateProfile: (updated: Partial<ArtistProfile>) => void;
  addService: (service: Omit<ServiceItem, 'id'>) => void;
  updateService: (id: string, updated: Partial<ServiceItem>) => void;
  deleteService: (id: string) => void;
  addPortfolioItem: (item: Omit<PortfolioItem, 'id'>) => void;
  deletePortfolioItem: (id: string) => void;
  toggleFeaturedPortfolio: (id: string) => void;
  
  // Questions CMS
  addBookingQuestion: (question: string, type: 'text' | 'textarea' | 'select' | 'radio', options?: string[], required?: boolean) => void;
  updateBookingQuestion: (id: string, updated: Partial<BookingQuestion>) => void;
  deleteBookingQuestion: (id: string) => void;
  toggleQuestionEnabled: (id: string) => void;
  reorderQuestions: (startIndex: number, endIndex: number) => void;
  addSuggestedPresetQuestion: (presetText: string) => void;
  
  // Booking Requests System
  createBookingRequest: (data: Omit<BookingRequest, 'id' | 'status' | 'createdAt'>) => string;
  updateRequestStatus: (id: string, status: BookingStatus, note?: string) => void;
  uploadPaymentProof: (id: string, proofUrl: string) => void;
  
  // Calendar Management
  toggleBlockedDate: (dateStr: string) => void;
  addTimeSlot: (slot: string) => void;
  removeTimeSlot: (slot: string) => void;
  resetAllData: () => void;
}

const MuaContext = createContext<MuaContextType | undefined>(undefined);

const LOCAL_STORAGE_KEY = 'aura_beauty_us_state_v2';

export const MuaProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [profile, setProfile] = useState<ArtistProfile>(initialArtistProfile);
  const [services, setServices] = useState<ServiceItem[]>(initialServices);
  const [portfolio, setPortfolio] = useState<PortfolioItem[]>(initialPortfolio);
  const [products] = useState<ProductItem[]>(initialProducts);
  const [bookingQuestions, setBookingQuestions] = useState<BookingQuestion[]>(initialBookingQuestions);
  const [bookingRequests, setBookingRequests] = useState<BookingRequest[]>(initialBookingRequests);
  const [testimonials] = useState<Testimonial[]>(initialTestimonials);
  const [analytics] = useState<AnalyticsData>(initialAnalytics);
  const [blockedDates, setBlockedDates] = useState<string[]>(['2026-09-05', '2026-09-12', '2026-09-19']);
  const [timeSlots, setTimeSlots] = useState<string[]>(['10:00 AM', '12:00 PM', '02:00 PM', '04:30 PM']);
  
  // Shopping Cart Initial State with 1 item pre-loaded
  const [cart, setCart] = useState<CartItem[]>([
    {
      product: initialProducts[0],
      selectedShade: initialProducts[0].shades[0], // Nude Silk
      quantity: 1,
    },
  ]);

  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);
  const [selectedServiceForBooking, setSelectedServiceForBooking] = useState<ServiceItem | null>(null);
  const [activeBookingRef, setActiveBookingRef] = useState<string | null>('BBPRO-8402');
  const [activeDemoPackage, setActiveDemoPackage] = useState<'ESSENTIAL' | 'SIGNATURE'>('SIGNATURE');
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState<boolean>(false);
  const [toasts, setToasts] = useState<Toast[]>([]);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.profile) setProfile(parsed.profile);
        if (parsed.services) setServices(parsed.services);
        if (parsed.portfolio) setPortfolio(parsed.portfolio);
        if (parsed.cart) setCart(parsed.cart);
        if (parsed.bookingQuestions) setBookingQuestions(parsed.bookingQuestions);
        if (parsed.bookingRequests) setBookingRequests(parsed.bookingRequests);
        if (parsed.blockedDates) setBlockedDates(parsed.blockedDates);
        if (parsed.timeSlots) setTimeSlots(parsed.timeSlots);
        if (parsed.activeDemoPackage) setActiveDemoPackage(parsed.activeDemoPackage);
      }
    } catch (e) {
      console.error('Failed to load state from localStorage', e);
    }
  }, []);

  // Sync to localStorage
  const saveStateToStorage = (data: Record<string, any>) => {
    try {
      const currentSaved = localStorage.getItem(LOCAL_STORAGE_KEY);
      const existing = currentSaved ? JSON.parse(currentSaved) : {};
      const updated = {
        ...existing,
        ...data,
      };
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updated));
    } catch (e) {
      console.error('Failed to save state to localStorage', e);
    }
  };

  const showToast = (message: string, type: 'success' | 'error' | 'info' = 'success') => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  };

  // Cart Actions
  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  const addToCart = (product: ProductItem, shade: ShadeOption, quantity: number = 1) => {
    setCart((prev) => {
      const existingIndex = prev.findIndex(
        (item) => item.product.id === product.id && item.selectedShade.name === shade.name
      );
      let updated: CartItem[];
      if (existingIndex > -1) {
        updated = [...prev];
        updated[existingIndex].quantity += quantity;
      } else {
        updated = [...prev, { product, selectedShade: shade, quantity }];
      }
      saveStateToStorage({ cart: updated });
      return updated;
    });
    showToast(`Added "${product.name} (${shade.name})" to Bag`);
    setIsCartOpen(true);
  };

  const updateCartQuantity = (productId: string, shadeName: string, quantity: number) => {
    setCart((prev) => {
      let updated: CartItem[];
      if (quantity <= 0) {
        updated = prev.filter(
          (item) => !(item.product.id === productId && item.selectedShade.name === shadeName)
        );
      } else {
        updated = prev.map((item) =>
          item.product.id === productId && item.selectedShade.name === shadeName
            ? { ...item, quantity }
            : item
        );
      }
      saveStateToStorage({ cart: updated });
      return updated;
    });
  };

  const removeFromCart = (productId: string, shadeName: string) => {
    setCart((prev) => {
      const updated = prev.filter(
        (item) => !(item.product.id === productId && item.selectedShade.name === shadeName)
      );
      saveStateToStorage({ cart: updated });
      return updated;
    });
    showToast('Item removed from Shopping Bag', 'info');
  };

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartSubtotal = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  const openCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const closeCheckout = () => setIsCheckoutOpen(false);

  const openBookingModal = (service?: ServiceItem) => {
    if (service) setSelectedServiceForBooking(service);
    setIsBookingOpen(true);
  };

  const closeBookingModal = () => {
    setIsBookingOpen(false);
    setSelectedServiceForBooking(null);
  };

  const handleSetDemoPackage = (pkg: 'ESSENTIAL' | 'SIGNATURE') => {
    setActiveDemoPackage(pkg);
    saveStateToStorage({ activeDemoPackage: pkg });
    showToast(`Switched preview experience to $${pkg === 'ESSENTIAL' ? '300 Essential' : '500 Signature'}`);
  };

  // Profile CMS
  const updateProfile = (updated: Partial<ArtistProfile>) => {
    setProfile((prev) => {
      const next = { ...prev, ...updated };
      saveStateToStorage({ profile: next });
      return next;
    });
    showToast('Profile content updated');
  };

  // Services actions
  const addService = (serviceData: Omit<ServiceItem, 'id'>) => {
    const newService: ServiceItem = {
      ...serviceData,
      id: `srv-${Date.now()}`,
    };
    setServices((prev) => {
      const next = [...prev, newService];
      saveStateToStorage({ services: next });
      return next;
    });
    showToast('New service package added');
  };

  const updateService = (id: string, updated: Partial<ServiceItem>) => {
    setServices((prev) => {
      const next = prev.map((s) => (s.id === id ? { ...s, ...updated } : s));
      saveStateToStorage({ services: next });
      return next;
    });
    showToast('Service updated');
  };

  const deleteService = (id: string) => {
    setServices((prev) => {
      const next = prev.filter((s) => s.id !== id);
      saveStateToStorage({ services: next });
      return next;
    });
    showToast('Service removed');
  };

  // Portfolio actions
  const addPortfolioItem = (itemData: Omit<PortfolioItem, 'id'>) => {
    if (portfolio.length >= profile.maxPortfolioUploads) {
      showToast(`Upload limit reached (${profile.maxPortfolioUploads} max items)`, 'error');
      return;
    }
    const newItem: PortfolioItem = {
      ...itemData,
      id: `port-${Date.now()}`,
    };
    setPortfolio((prev) => {
      const next = [newItem, ...prev];
      saveStateToStorage({ portfolio: next });
      return next;
    });
    showToast('New look added to portfolio!');
  };

  const deletePortfolioItem = (id: string) => {
    setPortfolio((prev) => {
      const next = prev.filter((p) => p.id !== id);
      saveStateToStorage({ portfolio: next });
      return next;
    });
    showToast('Portfolio item deleted');
  };

  const toggleFeaturedPortfolio = (id: string) => {
    setPortfolio((prev) => {
      const next = prev.map((p) => (p.id === id ? { ...p, isFeatured: !p.isFeatured } : p));
      saveStateToStorage({ portfolio: next });
      return next;
    });
    showToast('Featured status updated');
  };

  // Questions actions
  const addBookingQuestion = (
    questionText: string,
    type: 'text' | 'textarea' | 'select' | 'radio',
    options?: string[],
    required: boolean = false
  ) => {
    const newQ: BookingQuestion = {
      id: `bq-${Date.now()}`,
      question: questionText,
      type,
      options,
      required,
      enabled: true,
      isCustom: true,
    };
    setBookingQuestions((prev) => {
      const next = [...prev, newQ];
      saveStateToStorage({ bookingQuestions: next });
      return next;
    });
    showToast('Custom booking question added');
  };

  const updateBookingQuestion = (id: string, updated: Partial<BookingQuestion>) => {
    setBookingQuestions((prev) => {
      const next = prev.map((q) => (q.id === id ? { ...q, ...updated } : q));
      saveStateToStorage({ bookingQuestions: next });
      return next;
    });
    showToast('Question updated');
  };

  const deleteBookingQuestion = (id: string) => {
    setBookingQuestions((prev) => {
      const next = prev.filter((q) => q.id !== id);
      saveStateToStorage({ bookingQuestions: next });
      return next;
    });
    showToast('Question deleted');
  };

  const toggleQuestionEnabled = (id: string) => {
    setBookingQuestions((prev) => {
      const next = prev.map((q) => (q.id === id ? { ...q, enabled: !q.enabled } : q));
      saveStateToStorage({ bookingQuestions: next });
      return next;
    });
  };

  const reorderQuestions = (startIndex: number, endIndex: number) => {
    setBookingQuestions((prev) => {
      const result = Array.from(prev);
      const [removed] = result.splice(startIndex, 1);
      result.splice(endIndex, 0, removed);
      saveStateToStorage({ bookingQuestions: result });
      return result;
    });
  };

  const addSuggestedPresetQuestion = (presetText: string) => {
    if (bookingQuestions.some((q) => q.question.toLowerCase() === presetText.toLowerCase())) {
      showToast('Question already exists in your questionnaire', 'info');
      return;
    }
    addBookingQuestion(presetText, 'text', undefined, false);
  };

  // Booking Requests
  const createBookingRequest = (data: Omit<BookingRequest, 'id' | 'status' | 'createdAt'>): string => {
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const newRef = `BBPRO-${randomNum}`;
    const newRequest: BookingRequest = {
      ...data,
      id: newRef,
      status: 'Pending',
      createdAt: new Date().toISOString(),
    };
    setBookingRequests((prev) => {
      const next = [newRequest, ...prev];
      saveStateToStorage({ bookingRequests: next });
      return next;
    });
    setActiveBookingRef(newRef);
    showToast(`Appointment request #${newRef} submitted!`, 'success');
    return newRef;
  };

  const updateRequestStatus = (id: string, status: BookingStatus) => {
    setBookingRequests((prev) => {
      const next = prev.map((r) => (r.id === id ? { ...r, status } : r));
      saveStateToStorage({ bookingRequests: next });
      return next;
    });
    showToast(`Appointment #${id} updated to "${status}"`, 'success');
  };

  const uploadPaymentProof = (id: string, proofUrl: string) => {
    setBookingRequests((prev) => {
      const next = prev.map((r) =>
        r.id === id ? { ...r, paymentProofUrl: proofUrl, status: 'Payment Submitted' as BookingStatus } : r
      );
      saveStateToStorage({ bookingRequests: next });
      return next;
    });
    showToast('Payment confirmation uploaded!', 'success');
  };

  // Calendar
  const toggleBlockedDate = (dateStr: string) => {
    setBlockedDates((prev) => {
      const isBlocked = prev.includes(dateStr);
      const next = isBlocked ? prev.filter((d) => d !== dateStr) : [...prev, dateStr];
      saveStateToStorage({ blockedDates: next });
      return next;
    });
    showToast('Date availability updated');
  };

  const addTimeSlot = (slot: string) => {
    if (timeSlots.includes(slot)) return;
    setTimeSlots((prev) => {
      const next = [...prev, slot];
      saveStateToStorage({ timeSlots: next });
      return next;
    });
    showToast('Time slot added');
  };

  const removeTimeSlot = (slot: string) => {
    setTimeSlots((prev) => {
      const next = prev.filter((s) => s !== slot);
      saveStateToStorage({ timeSlots: next });
      return next;
    });
    showToast('Time slot removed');
  };

  const resetAllData = () => {
    localStorage.removeItem(LOCAL_STORAGE_KEY);
    setProfile(initialArtistProfile);
    setServices(initialServices);
    setPortfolio(initialPortfolio);
    setBookingQuestions(initialBookingQuestions);
    setBookingRequests(initialBookingRequests);
    setBlockedDates(['2026-09-05', '2026-09-12', '2026-09-19']);
    setTimeSlots(['10:00 AM', '12:00 PM', '02:00 PM', '04:30 PM']);
    setCart([{ product: initialProducts[0], selectedShade: initialProducts[0].shades[0], quantity: 1 }]);
    setActiveDemoPackage('SIGNATURE');
    showToast('Reset data to initial state');
  };

  return (
    <MuaContext.Provider
      value={{
        profile,
        services,
        portfolio,
        products,
        cart,
        bookingQuestions,
        bookingRequests,
        testimonials,
        analytics,
        blockedDates,
        timeSlots,
        toasts,
        isBookingOpen,
        selectedServiceForBooking,
        activeBookingRef,
        activeDemoPackage,
        isCartOpen,
        isCheckoutOpen,
        openCart,
        closeCart,
        addToCart,
        updateCartQuantity,
        removeFromCart,
        cartCount,
        cartSubtotal,
        openCheckout,
        closeCheckout,
        openBookingModal,
        closeBookingModal,
        setActiveDemoPackage: handleSetDemoPackage,
        showToast,
        updateProfile,
        addService,
        updateService,
        deleteService,
        addPortfolioItem,
        deletePortfolioItem,
        toggleFeaturedPortfolio,
        addBookingQuestion,
        updateBookingQuestion,
        deleteBookingQuestion,
        toggleQuestionEnabled,
        reorderQuestions,
        addSuggestedPresetQuestion,
        createBookingRequest,
        updateRequestStatus,
        uploadPaymentProof,
        toggleBlockedDate,
        addTimeSlot,
        removeTimeSlot,
        resetAllData,
      }}
    >
      {children}
    </MuaContext.Provider>
  );
};

export const useMua = () => {
  const context = useContext(MuaContext);
  if (!context) {
    throw new Error('useMua must be used within a MuaProvider');
  }
  return context;
};
