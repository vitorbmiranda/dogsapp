const assert = require('assert')
const { validateAgeParameter } = require('./dogs')

describe('Dog validateAge', () => {

 it('should return true for age 5', () => {
  assert.equal(true, validateAgeParameter(5))
 });

 it('should return true for age 1', () => {
  assert.equal(true, validateAgeParameter(1))
 });

 it('should return false for age 0', () => {
  assert.equal(false, validateAgeParameter(0))
 });

 it('should return false for age -15', () => {
  assert.equal(false, validateAgeParameter(0))
 });

 it('should return false for age as the string ABC', () => {
  assert.equal(false, validateAgeParameter('abc'))
 });

 it('should return false for null age', () => {
  assert.equal(false, validateAgeParameter(null))
 });

});