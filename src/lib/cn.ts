import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Combines classes and resolves Tailwind class conflicts
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
