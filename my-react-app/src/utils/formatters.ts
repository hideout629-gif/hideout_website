/**
 * Utility functions for formatting values in human-readable style
 */

// Format numbers into Indian Rupees currency string (e.g. ₹6,500)
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(amount);
}

// Calculate total nights between two date strings (YYYY-MM-DD)
export function calculateNights(checkIn: string, checkOut: string): number {
  if (!checkIn || !checkOut) return 1;
  const start = new Date(checkIn);
  const end = new Date(checkOut);
  const diffTime = end.getTime() - start.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays > 0 ? diffDays : 1;
}

// Format date into a human readable string like "24 May, 2025"
export function formatDateHuman(dateString: string): string {
  if (!dateString) return '';
  const date = new Date(dateString);
  return date.toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });
}

// Get default dates (Today and +2 Days) for booking search bar
export function getDefaultBookingDates() {
  const today = new Date();
  const checkIn = new Date(today);
  checkIn.setDate(today.getDate() + 1);

  const checkOut = new Date(checkIn);
  checkOut.setDate(checkIn.getDate() + 2);

  const formatYYYYMMDD = (d: Date) => d.toISOString().split('T')[0];

  return {
    checkInStr: formatYYYYMMDD(checkIn),
    checkOutStr: formatYYYYMMDD(checkOut)
  };
}
