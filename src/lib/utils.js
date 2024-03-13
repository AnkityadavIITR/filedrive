import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export const setLocalStorage = (key, token) => {
  if (!key || typeof window === 'undefined') return '';
  return localStorage.setItem(key, token);
};

export const getFromLocalStorage = (key) => {
  if (!key || typeof window === 'undefined') return '';
  return localStorage.getItem(key);
};

export const removeFromLocalStorage = (key) => {
  if (!key || typeof window === 'undefined') return '';
  localStorage.removeItem(key);
};