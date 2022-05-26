const numbers = [1, 2, 3, 4, 5]

const deleteNumberFromArray = (numberToDelete, array) => {
  return numbers.map(number => {
    if (number === numberToDelete) {
      return
    }
    return number
  })
}