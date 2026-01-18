const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

const calculate = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2
    case '-':
      return num1 - num2
    case '*':
      return num1 * num2
    default:
      throw new Error(`Unknown operator: ${operator}`)
  }
}

const generateRound = () => {
  const num1 = getRandomNumber(1, 25)
  const num2 = getRandomNumber(1, 25)
  const operators = ['+', '-', '*']
  const operator = operators[getRandomNumber(0, operators.length - 1)]
  
  const question = `${num1} ${operator} ${num2}`
  const answer = String(calculate(num1, num2, operator))
  
  return [question, answer]
}

export default generateRound
