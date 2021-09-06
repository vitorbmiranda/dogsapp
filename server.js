const express = require('express')
const dogs = require('./dogs')
const app = express()
const port = 3000

app.get('/dogs', ({ query: { age } }, res) => {
  age = Number(age)
  if (!dogs.validateAgeParameter(age)) res.status(400).send({ 'error': 'Bad request - invalid age parameter'})
  res.status(200).send(dogs.findDogs(age));
})

app.get('/dogs/:id', (req, res) => {
  dog = dogs.findDogById(req.params.id);
  if (!dog) res.status(404).send({ 'error': 'Dog not found'})
  res.status(200).send(dog);
})

app.listen(port, () => {
  console.log(`Dogs app listening at http://localhost:${port}`)
})
