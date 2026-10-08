const desserts: string[] = [
  "Tiramisu",
  "Cheesecake",
  "Mochi",
  "Brownies",
  "Ice Cream"
];

export function printDesserts(): void {
  desserts.forEach((dessert) => {
    console.log(dessert);
  });
}