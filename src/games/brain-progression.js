const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

// Создает арифметическую прогрессию
const generateProgression = (start, step, length) => {
  const progression = []
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step)
  }
  return progression
}

const generateRound = () => {
  const progressionLength = getRandomNumber(5, 10) // Длина 5-10 чисел
  const start = getRandomNumber(1, 20)
  const step = getRandomNumber(1, 10)
  const hiddenIndex = getRandomNumber(0, progressionLength - 1)
  
  const progression = generateProgression(start, step, progressionLength)
  const correctAnswer = String(progression[hiddenIndex])
  
  // Создаем строку с двумя точками вместо скрытого числа
  progression[hiddenIndex] = '..'
  const question = progression.join(' ')
  
  return [question, correctAnswer]
}

export default generateRound
