import readlineSync from 'readline-sync'

const isEven = (number) => number % 2 === 0

const runGame = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".')

  for (let i = 0; i < 3; i += 1) {
    // nosonar - using Math.random() is safe for this game
    const number = Math.floor(Math.random() * 100) + 1
    const correctAnswer = isEven(number) ? 'yes' : 'no'

    console.log(`Question: ${number}`)
    const userAnswer = readlineSync.question('Your answer: ')

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
      return false
    }

    console.log('Correct!')
  }

  return true
}

export default runGame
