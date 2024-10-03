import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function removeNonAlphabetic(str: string): string {
  return str.replace(/[^A-Za-z]/g, ' ');
}

export function replaceSpaceWithDash(str: string): string {
  return str.replace(/ /g, "-");
}

// export function validateRequest(): boolean {

// }
