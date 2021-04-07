// fruit object
let fruit = {
  name: "banana", // object key with the value of banana (keys are also called properties)
  price: 12,
  qty: 12,
};
// fruits array with objects nested within it. 
const fruits = [
  {
    name: "orange",
    qty: 12,
    price: 2.99,
  },
  {
    name: "apple",
    qty: 12,
    price: 1.99,
  },
  {
    name: "lime",
    qty: 12,
    price: 3.99,
  },
  {
    name: "mango",
    qty: 12,
    price: 8.99,
  },
];

function getFruitColor(userFruit) {
  switch (userFruit) {
    case "orange":
      return "This fruit is orange";
      break;
    case "apple":
    case "berry":
      return "This fruit is Red";
      break;
    case "banana":
      return "This fruit is Yellow";
      break;
    case "lime":
      return "Limes are Green";
      break; //did not use the break
    default:
      return "Black";
  }
}
fruit.color = getFruitColor("lime");
console.log(fruit.color);
