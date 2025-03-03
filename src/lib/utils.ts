import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { Route } from "next"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getLink<T extends string>(category: string, id: number): Route<T> {
  return `/${category}/${id}` as Route<T>
}
