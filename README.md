# readme file for short rochambeau project

This project hosts a blank rochambeau.html page which links to styles.js, and allows the user to play a best of 5 game of rochambeau against a computer.

Typing `playGame()` into the console within your browser will prompt you to make a rochambeau throw of rock, paper or scissors.
The `playRound()` function will then randomly generate a throw for the computer, and compare your results.

`playGame()` calls `playRound()` 5 separate times to determine an overall winner.