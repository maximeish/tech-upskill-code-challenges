// The following code will calculate the full price of all product combined

const item = [
  { name: "Bike", price: 100 },
  { name: "TV", price: 200 },
  { name: "Album", price: 10 },
  { name: "Book", price: 5 },
  { name: "Phone", price: 500 },
  { name: "Computer", price: 1000 },
];

const total = item.reduce((sum, p) => sum + p.price, 0);

console.log("The full price of all product combined is", total);
