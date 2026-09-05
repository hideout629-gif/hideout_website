/**
 * Booking pricing and helper utilities
 */

export interface PriceBreakdown {
  nights: number;
  basePricePerNight: number;
  subtotal: number;
  taxesAndService: number;
  discount: number;
  total: number;
}

export function calculatePriceBreakdown(
  pricePerNight: number,
  nights: number,
  applyDiscount: boolean = false
): PriceBreakdown {
  const safeNights = nights > 0 ? nights : 1;
  const subtotal = pricePerNight * safeNights;
  
  // 12% GST & Resort Service Fee
  const taxesAndService = Math.round(subtotal * 0.12);
  
  // 10% discount for stay >= 3 nights or special code
  const discount = applyDiscount || safeNights >= 3 ? Math.round(subtotal * 0.10) : 0;
  
  const total = subtotal + taxesAndService - discount;

  return {
    nights: safeNights,
    basePricePerNight: pricePerNight,
    subtotal,
    taxesAndService,
    discount,
    total
  };
}

export function generateWhatsAppBookingUrl(
  cottageName: string,
  checkIn: string,
  checkOut: string,
  guests: number
): string {
  const message = `Hello Hideout! 🌲\nI want to book *${cottageName}*\nCheck-in: ${checkIn}\nCheck-out: ${checkOut}\nGuests: ${guests}\nPlease confirm availability and details.`;
  return `https://wa.me/919876543210?text=${encodeURIComponent(message)}`;
}
