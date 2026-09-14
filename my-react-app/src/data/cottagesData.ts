import type { Cottage } from '../types';

import img26 from '../assets/image/image 26.jpeg';
import img27 from '../assets/image/image 27.jpeg';
import img75 from '../assets/image/image 75.jpeg';
import img61 from '../assets/image/image 61.jpeg';
import img64 from '../assets/image/image 64.jpeg';
import img45 from '../assets/image/image 45.jpeg';
import img60 from '../assets/image/image 60.jpeg';
import img47 from '../assets/image/image 47.jpeg';
import img48 from '../assets/image/image 48.jpeg';
import img50 from '../assets/image/image 50.jpeg';
import img52 from '../assets/image/image 52.jpeg';
import img62 from '../assets/image/image 62.jpeg';
import img66 from '../assets/image/image 66.jpeg';

export const cottagesData: Cottage[] = [
  {
    id: 'luxury-cottage',
    name: 'Luxury Hilltop Cottage',
    tagline: 'Panoramic tea valley views with private balcony & fireplace.',
    category: 'luxury',
    badge: 'Most Popular',
    pricePerNight: 6500,
    originalPrice: 8000,
    maxGuests: 4,
    bedrooms: 1,
    bathrooms: 1,
    sizeSqFt: 550,
    rating: 4.9,
    reviewsCount: 128,
    location: 'Hideout, Tamil Nadu',
    featuredImage: img26,
    images: [img26, img27, img47, img52],
    description: 'A perfect sanctuary nestled in the misty Nilgiri hills. Enjoy your morning Nilgiri chai on the private balcony overlooking mist-covered tea gardens.',
    amenities: [
      'Private Balcony',
      'Cozy Stone Fireplace',
      'King Size Bed',
      'High-Speed Wi-Fi',
      'Complimentary Tea Maker',
      'Mountain View Bathtub',
      '24/7 Hot Water',
      'Organic Breakfast Included'
    ],
    highlights: [
      'Unobstructed 180° sunrise view of Nilgiri mist',
      'Handcrafted wooden interior with plush luxury bedding',
      'Campfire pit setup available on request'
    ]
  },
  {
    id: 'premium-cottage',
    name: 'Premium Tea Garden Cottage',
    tagline: 'Surrounded by lush tea estates with modern wooden luxury.',
    category: 'premium',
    badge: 'Best Sunrise View',
    pricePerNight: 7500,
    originalPrice: 9200,
    maxGuests: 4,
    bedrooms: 1,
    bathrooms: 2,
    sizeSqFt: 680,
    rating: 4.95,
    reviewsCount: 94,
    location: 'Coonoor, Nilgiri',
    featuredImage: img27,
    images: [img27, img61, img60, img62],
    description: 'Premium cottage featuring large floor-to-ceiling glass windows that bring the lush green tea plantation straight into your living room.',
    amenities: [
      'Panoramic Glass Windows',
      'Dual Bathrooms',
      'Private Garden Veranda',
      'Smart LED TV with Netflix',
      'Mini Bar & Refrigerator',
      'Floor Heating System',
      '24/7 Room Service'
    ],
    highlights: [
      'Direct access to private tea estate walking path',
      'En-suite marble bathroom with rainfall shower',
      'Espresso coffee machine & artisan snacks'
    ]
  },
  {
    id: 'family-cottage',
    name: 'Grand Family Villa Cottage',
    tagline: 'Spacious retreat for families & groups with private lawn.',
    category: 'family',
    badge: 'Family Favorite',
    pricePerNight: 9500,
    originalPrice: 11500,
    maxGuests: 6,
    bedrooms: 2,
    bathrooms: 2,
    sizeSqFt: 950,
    rating: 4.88,
    reviewsCount: 82,
    location: 'Kotagiri, Nilgiri',
    featuredImage: img61,
    images: [img61, img48, img52, img64],
    description: 'Designed for memorable family gatherings. Features two spacious bedrooms, a cozy common fireplace living room, and a dedicated campfire lawn.',
    amenities: [
      '2 Master Bedrooms',
      'Spacious Living Room',
      'Private Barbecue Patio',
      'Kids Play Area nearby',
      'Fully Equipped Kitchenette',
      'Dedicated Car Parking',
      'Board Games & Books Library'
    ],
    highlights: [
      'Private open lawn space for family stargazing',
      'Spacious dining table for 6 guests',
      'Complimentary evening bonfire setup'
    ]
  },
  {
    id: 'honeymoon-suite',
    name: 'Misty Pines Honeymoon Suite',
    tagline: 'Romantic glass-house cabin surrounded by pine forest.',
    category: 'honeymoon',
    badge: 'Romantic Getaway',
    pricePerNight: 8500,
    originalPrice: 10000,
    maxGuests: 2,
    bedrooms: 1,
    bathrooms: 1,
    sizeSqFt: 600,
    rating: 4.98,
    reviewsCount: 116,
    location: 'Hideout, Tamil Nadu',
    featuredImage: img75,
    images: [img75, img50, img66, img45],
    description: 'An intimate, quiet suite framed by towering pine trees. Features an outdoor warm Jacuzzi tub and candlelight setup on the wooden deck.',
    amenities: [
      'Heated Outdoor Jacuzzi',
      'Candlelight Dinner Setup',
      'Romantic Canopy Bed',
      'Private Sundeck Lounge',
      'Bluetooth Music System',
      'Welcome Wine & Fruit Basket'
    ],
    highlights: [
      '100% private secluded location in the forest',
      'Jacuzzi with stargazing view',
      'Complimentary flower bed decoration on check-in'
    ]
  }
];
