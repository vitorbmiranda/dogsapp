const dogsRepository = () => [{ id: 1, name: 'crystal', age: 1 }, { id: 2, name: 'meepo', age: 5 }]
const findDogById = (id) => dogsRepository().find(dog => dog.id == id)
const findDogs = (minAge = 1) => dogsRepository().filter(dog => dog.age >= minAge) || []
const validateAgeParameter = (minAge) => !isNaN(minAge) && minAge >= 1

module.exports = { dogsRepository, findDogById, findDogs, validateAgeParameter };