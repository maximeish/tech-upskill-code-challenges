// The following code will calculate the full price of all product combined and remove product that are under the 10 dollar

const item = [
  { name: "Bike", price: 100 },
  { name: "TV", price: 200 },
  { name: "Album", price: 10 },
  { name: "Book", price: 5 },
  { name: "Phone", price: 500 },
  { name: "Computer", price: 1000 },
];

let total = item.reduce((sum, p) => sum + p.price, 0);

item.forEach((p) => {
  if (p.price < 10) {
    total = total - p.price;
  }
});

console.log(
  "The price of all product combined with products' prices under 10 dollar substracted is",
  total
);
