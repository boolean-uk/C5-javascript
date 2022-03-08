const property = {
  street: "1 Possum Lane",
  forSale: true,
  price: 1000,
  numOfBedroom: 4,
}

// updatePrice
// input: two parameters; an object the represents a property, a number that represents the new price
// output: an object that represents a property with an updated price

function updatePrice(property, newPrice) {
  console.log("INSIDE updatePrice: ", property, newPrice)

  property.price = newPrice

  return property
}

const updatedProperty = updatePrice(property, 2000)

console.log("updatedProperty: ", updatedProperty)

// addAnEstateAgent
// input: two parameters; an object that represents a property; a string for the estate agetn
// output: an object that represents a property with an estate agent

function addAnEstateAgent(property, possum, agentNumber) {
  console.log("Inside addAnEstateAgent: ", property, possum, agentNumber)

  const agent = {
    name: possum,
    phone: agentNumber,
  }

  property.agent = agent

  return property
}

const propertyWithEstateAgent = addAnEstateAgent(
  property,
  "Steven Rico",
  "07888787878788"
)

console.log("propertyWithEstateAgent: ", propertyWithEstateAgent)
