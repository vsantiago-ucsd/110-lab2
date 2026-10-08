import { animation } from "./animation";

// A list of snack names
export const snacks: string[] = [
  "chips",
  "cookies",
  "granola"
];

// Exported function to print each snack
export function printSnacks(items: string[]): void {
  animation("Snacks");
  console.log(items.join(", "));
}