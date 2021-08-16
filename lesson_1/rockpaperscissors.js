const readline = require('readline-sync');

function createPlayer() {
  return {
    move: null,
  };
}

function createComputer() {
  let playerObject = createPlayer();

  let computerObject = {
    choose() {
      const choices = ['rock', 'paper', 'scissors'];
      let randomIndex = Math.floor(Math.random() * choices.length);
      this.move = choices[randomIndex];
    },
  };

  return Object.assign(playerObject, computerObject);
}

function createHuman() {
  let playerObject = createPlayer();
  let choice = null;

  let humanObject = {
    choose() {
      while (true) {
        console.log('Please choose rock, paper, or scissors:');
        choice = readline.question();
        if (['rock', 'paper', 'scissors'].includes(choice)) break;
        console.log('Sorry, invalid choice.');
      }

      this.move = choice;
    },
  };

  return Object.assign(playerObject, humanObject);
}

function createScoreBoard() { ///
  return {
    player: 0,
    computer: 0,
  };
}

const RPSGame = {
  human: createHuman(),
  computer: createComputer(),
  score: createScoreBoard(), ///

  displayWelcomeMessage() {
    console.log('Welcome to Rock, Paper, Scissors!');
    console.log('The match is a best of five! Good Luck!');
  },

  displayGoodbyeMessage() {
    console.log('Thanks for playing Rock, Paper, Scissors. Goodbye!');
  },

  displayWinner() {
    let humanMove = this.human.move;
    let computerMove = this.computer.move;

    console.log(`You chose: ${this.human.move}`);
    console.log(`The computer chose: ${this.computer.move}`);

    if ((humanMove === 'rock' && computerMove === 'scissors') ||
        (humanMove === 'paper' && computerMove === 'rock') ||
        (humanMove === 'scissors' && computerMove === 'paper')) {
      console.log('You win!');
      this.score.player += 1;
    } else if ((humanMove === 'rock' && computerMove === 'paper') ||
               (humanMove === 'paper' && computerMove === 'scissors') ||
               (humanMove === 'scissors' && computerMove === 'rock')) {
      console.log('Computer wins!');
      this.score.computer += 1;
    } else {
      console.log("It's a tie");
    }
  },

  scoreBoard() {
    if (this.score.player === 5 || this.score.computer === 5) {
      console.log(`${this.score.player === 5 ? 'Player': 'The Computer'} wins the match!`)
      this.score.player = 0;
      this.score.computer = 0;
    } else {
      console.log(`The score is: Player: ${this.score.player}, Computer: ${this.score.computer}`);
    }
  },

  playAgain() {
    console.log('Would you like to play again? (y/n)');
    let answer = readline.question();
    return answer.toLowerCase()[0] ===  'y';
  },

  play() {
    this.displayWelcomeMessage();
    while (true) {
      this.human.choose();
      this.computer.choose();
      this.displayWinner();
      this.scoreBoard();
      if (!this.playAgain()) break;
    }

    this.displayGoodbyeMessage();
  },
};


RPSGame.play();
