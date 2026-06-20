const findTheOldest = function (people) {
  let oldest = 0;
  let lastAge = 0;

  for (let i = 0; i < people.length; i++) {
    const deathYear = people[i].yearOfDeath ?? new Date().getFullYear();
    const age = deathYear - people[i].yearOfBirth;

    if (age > lastAge) {
      oldest = i;
      lastAge = age;
    }
  }

  return people[oldest];
};


console.log(
  findTheOldest([
      {
        name: "Carly",
        yearOfBirth: 2018,
      },
      {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
      },
      {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
      },
    ]),
);

// Do not edit below this line
module.exports = findTheOldest;
