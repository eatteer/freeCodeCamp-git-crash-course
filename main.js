const numbers = [1, 2, 3, 4, 5]

const deleteNumberFromArray = (numberToDelete) => {
  return numbers.filter(number => number !== numberToDelete)
}

const addNumberToArray = (number) => {
  return numbers.concat(number)
}