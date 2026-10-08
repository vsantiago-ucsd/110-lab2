const desserts: string[] = [
  "Tiramisu",
  "Chocolate Cake",
  "Mochi",
  "Brownies",
  "Ice Cream"
];

export function printDesserts(): void {
  desserts.forEach((dessert) => {
    console.log(dessert);
  });
}

printDesserts();