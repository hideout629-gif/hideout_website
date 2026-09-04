export interface Cottage {
  id: string;
  name: string;
  tagline: string;
  category: 'luxury' | 'premium' | 'family' | 'honeymoon';
  badge?: string;
  pricePerNight: number;
  originalPrice?: number;
  maxGuests: number;
  bedrooms: number;
  bathrooms: number;
  sizeSqFt: number;
  rating: number;
  reviewsCount: number;
  featuredImage: string;
  images: string[];
  description: string;
  amenities: string[];
  highlights: string[];
  location?: string;
}

export interface Experience {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  description: string;
  image: string;
}

export interface Review {
  id: string;
  name: string;
  location: string;
  avatar: string;
  rating: number;
  stayDate: string;
  cottageStayed: string;
  comment: string;
  cottageImage?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'all' | 'exteriors' | 'interiors' | 'views' | 'dining';
  imageUrl: string;
  caption: string;
}

export interface BookingSearchParams {
  checkIn: string;
  checkOut: string;
  adults: number;
  children: number;
  cottageId?: string;
}

export interface ToastMessage {
  id: string;
  type: 'success' | 'info' | 'warning';
  title: string;
  message: string;
}
