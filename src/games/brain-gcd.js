const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

// Функция для нахождения НОД (алгоритм Евклида)
const gcd = (a, b) => {
  if (b === 0) {
    return Math.abs(a)
  }
  return gcd(b, a % b)
}

const generateRound = () => {
  const num1 = getRandomNumber(1, 100)
  const num2 = getRandomNumber(1, 100)
  
  const question = `${num1} ${num2}`
  const answer = String(gcd(num1, num2))
  
  return [question, answer]
}

export default generateRound
