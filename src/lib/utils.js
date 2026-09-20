import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Standard Shadcn UI class merging utility
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

/**
 * Format Sanskrit verse numbers or references
 */
export function formatVerseRef(mandala, sukta, mantra) {
  if (!mandala && !sukta && !mantra) return "";
  const parts = [];
  if (mandala) parts.push(`मण्डल ${mandala}`);
  if (sukta) parts.push(`सूक्त ${sukta}`);
  if (mantra) parts.push(`मंत्र ${mantra}`);
  return parts.join(" • ");
}
