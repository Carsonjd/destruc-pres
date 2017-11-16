const example1 = [
  {name: 'Tom', favColor: 'Blue'},
  {name: 'Ann', favColor: 'Red'},
  {name: 'Karl', favColor: 'Pink'}
];

//     How would you make Karl's favorite color into a variable in the simplest way possible?

// const [{},{},{favColor}] = example1
// console.log(favColor);

//     How would we a whole object into a variable?

// const [obj = {}] = example1
// console.log(obj)

const example2 = {
  car: {
    make: 'Geo',
    model: 'Prizm',
    weight: [1802, 2130, 3652],
    fuelV: 10,
    dist: 400,
    cool: false
  },
  driver: {
    firstName: 'Bishal',
    lastName: 'Malla'
  },
  mpg: (dist, fuel) => dist/fuel,
};

//     How would we use destructuring to create a varible for the car's weight capacity (3652)?

// const {car:{weight:[a,b,c]}} = example2
// console.log(c);

//     How could we use destructuring to calculate mpg?

// const {car:{fuelV, dist},mpg} = example2
// console.log(mpg(dist, fuelV));

//     How would we use destructuring to create a function which returns a string describing who is driving the car?

// function whoDrive ({car:{make, model}, driver:{firstName, lastName}}){
//   console.log(`${firstName} ${lastName} drives a ${make} ${model}`);
// }
// whoDrive(example2)
