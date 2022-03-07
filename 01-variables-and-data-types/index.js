let num = 5

console.log(num)

num = 10

console.log(num)

num = 25

console.log(num)

const firstNameOne = "Anica"

const firstNameLowerCase = firstNameOne.toLowerCase()

console.log(firstNameOne)
console.log(firstNameLowerCase)

const firstNameTwo = "Arisa"

console.log(firstNameTwo)
// console.log(firstNameLowerCase)

const anicaObj = {
  firstName: "Anica",
  lastName: "Rahman",
}

console.log(typeof anicaObj)
console.log(anicaObj)

console.log(anicaObj["firstName"].toLowerCase())

const property = {
  address: {
    street: "1 Possum Lane",
    city: "Possumville",
    country: "Possum Land",
  },
  saleInfo: {
    forSale: true,
    price: 350000,
  },
  numOfRooms: 3,
  garage: false,
}

console.log(typeof property)
console.log(property)
