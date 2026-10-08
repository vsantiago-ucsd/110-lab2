// A list of snack names
export const snacks: string[] = ["Chips", "Pretzels", "Popcorn", "Trail Mix", "Granola Bar"];

// Exported function to print each snack
export function printSnacks(items: string[]): void {
  console.log("My snacks:");
  items.forEach((snack, index) => {
    console.log(`${index + 1}. ${snack}`);
  });
}