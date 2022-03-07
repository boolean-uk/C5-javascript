const property = {
  street: "1 Possum Lane",
  forSale: true,
  price: 1000,
  numOfBedroom: 4,
}

// => 1 Possum Lane: 4 bed
// => 2 Possum Lane: 2 bed
// => 3 Possum Lane: 2 bed

// console.log(properties[0].street, properties[0].numOfBedroom)
// console.log(properties[1].street, properties[1].numOfBedroom)
// console.log(properties[2].street, properties[2].numOfBedroom)

const properties = [
  {
    street: "1 Possum Lane",
    forSale: true,
    price: 1000,
    numOfBedroom: 4,
  },
  {
    street: "2 Possum Lane",
    forSale: true,
    price: 5000,
    numOfBedroom: 2,
  },
  {
    street: "3 Possum Lane",
    forSale: false,
    price: 2000,
    numOfBedroom: 2,
  },
]

console.log("START OF LOOP")

for (let i = 0; i < properties.length; i++) {
  console.log("Iteration #: ", i + 1)
  console.log("i: ", i)
  const property = properties[i]

  console.log(property.street, property.numOfBedroom)

  console.log("END OF ITERATION")
}

console.log("END OF LOOP")
