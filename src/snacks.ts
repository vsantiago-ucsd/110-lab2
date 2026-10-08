// 1. A list of snack names
const snacks: string[] = ["Chips", "Pretzels", "Popcorn", "Trail Mix", "Granola Bar"];

// 2. Exported function to print each snack
export function printSnacks(items: string[]): void {
  console.log("My snacks:");
  items.forEach((snack, index) => {
    console.log(`${index + 1}. ${snack}`);
  });
}

// 3. Call the function
printSnacks(snacks);