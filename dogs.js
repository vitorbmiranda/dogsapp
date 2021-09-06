const dogsRepository = () => [{ id: 1, name: 'crystal', age: 1 }, { id: 2, name: 'meepo', age: 5 }]
const findDogById = (id) => dogsRepository().find(dog => dog.id == id)
const findDogs = (age = 0) => dogsRepository().filter(dog => dog.age >= age) || []
const validateAgeParameter = (age) => !isNaN(age) && age >= 1

module.exports = { dogsRepository, findDogById, findDogs, validateAgeParameter };