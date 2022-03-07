const properties = [
  {
    address: {
      street: "1 Possum Lane",
      city: "Possumville",
    },
    forSale: true,
    price: 1000,
    numOfBedroom: 4,
  },
  {
    address: {
      street: "2 Possum Lane",
      city: "Possumville",
    },
    forSale: false,
    price: 5000,
    numOfBedroom: 2,
  },
  {
    address: {
      street: "3 Possum Lane",
      city: "Possumville",
    },
    forSale: true,
    price: 2000,
    numOfBedroom: 3,
  },
]

/*
Print out and ad for the properties that are for sale only:

=======================
        FOR SALE       
=======================
1 Possum Lane
Possumville

Price: £1,000.00

Bedrooms: 2

======================

=======================
        FOR SALE       
=======================
3 Possum Lane
Possumville

Price: £2,000.00

Bedrooms: 3

======================

*/
