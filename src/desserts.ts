import { animation } from "./animation";

const desserts: string[] = [
  "Tiramisu",
  "Cheesecake",
  "Mochi",
  "Brownies",
  "Ice Cream"
];

export function printDesserts(): void {
  animation("Desserts");

  desserts.forEach((dessert) => {
    console.log(dessert);
  });
}