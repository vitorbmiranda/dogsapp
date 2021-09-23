const express = require('express')
const dogs = require('./dogs')
const app = express()
const port = 3000

var apm = require('elastic-apm-node').start({
  serviceName: 'dogsapp',
  serverUrl: 'http://localhost:8200'
})

app.get('/dogs', ({ query: { minAge = 1 } }, res) => {
  minAge = Number(minAge)
  if (!dogs.validateAgeParameter(minAge))  {
    res.status(400).send({ 'error': 'Bad request - invalid minAge parameter'})
  } else {
    res.status(200).send(dogs.findDogs(minAge));
  } 
})

app.get('/dogs/:id', (req, res) => {
  dog = dogs.findDogById(req.params.id);
  if (!dog) res.status(404).send({ 'error': 'Dog not found'})
  res.status(200).send(dog);
})

app.listen(port, () => {
  console.log(`Dogs app listening at http://localhost:${port}`)
})
