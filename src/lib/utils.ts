import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatCurrency(value: number | undefined | null, unit?: 'lakhs' | 'crores'): string {
  if (value === undefined || value === null) {
    return 'N/A';
  }

  let formattedValue: string;

  if (unit === 'lakhs') {
    formattedValue = (value / 100000).toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    return `₹ ${formattedValue} L`;
  } else if (unit === 'crores') {
    formattedValue = (value / 10000000).toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    return `₹ ${formattedValue} Cr.`;
  }

  if (value < 10000000) { // Less than 1 Crore
    formattedValue = value.toLocaleString('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  } else { // 1 Crore or more
    formattedValue = (value / 10000000).toLocaleString('en-IN', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
    formattedValue = `₹ ${formattedValue} Cr.`;
  }

  return formattedValue;
}

export function formatPercent(value: number): string {
  if (value === undefined || value === null) {
    return 'N/A';
  }
  return `${value.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}%`;
}
