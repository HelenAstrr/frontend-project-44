#!/usr/bin/env node

import readlineSync from 'readline-sync'
import runEvenGame from '../src/games/brain-even.js'

console.log('Welcome to the Brain Games!')

const name = readlineSync.question('May I have your name? ')
console.log(`Hello, ${name}!`)

const isWinner = runEvenGame()

if (isWinner) {
  console.log(`Congratulations, ${name}!`)
} else {
  console.log(`Let's try again, ${name}!`)
}
