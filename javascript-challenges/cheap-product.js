// The following code will filter and show the product with the lowest price

const item = [
  { name: "Bike", price: 100 },
  { name: "TV", price: 200 },
  { name: "Album", price: 10 },
  { name: "Book", price: 5 },
  { name: "Phone", price: 500 },
  { name: "Computer", price: 1000 },
];

let samplePrice = item[0].price;

item.forEach((p) => {
  if (p.price < samplePrice) samplePrice = p.price;
});

const cheapProduct = item.filter((p) => p.price === samplePrice);

console.log("The cheap product is", cheapProduct[0]);
