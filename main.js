const numbers = [1, 2, 3, 4, 5]

const deleteNumber = (numberToDelete) => {
  return numbers.filter(number => number !== numberToDelete)
}

const addNumber = (number) => {
  return numbers.concat(number)
}