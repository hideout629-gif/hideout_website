import type { Cottage } from '../types';

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
    location: 'Ooty, Tamil Nadu',
    featuredImage: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80'
    ],
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
    featuredImage: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'
    ],
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
    featuredImage: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80'
    ],
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
    location: 'Ooty, Tamil Nadu',
    featuredImage: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'An intimate, quiet suite framed by towering pine trees. Features a outdoor warm Jacuzzi tub and candlelight setup on the wooden deck.',
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
