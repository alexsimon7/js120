const readline = require('readline-sync');

let moveTracker = {
  player: { rock: 0, paper: 0, scissors: 0, lizard: 0, Spock: 0 },
  computer: { rock: 0, paper: 0, scissors: 0, lizard: 0, Spock: 0},
};

function createPlayer() {
  return {
    move: null,
  };
}

function badPicks(pick) {
  switch (pick) {
    case 'rock':
      return ['scissors', 'lizard'];
    case 'paper':
      return ['rock', 'Spock'];
    case 'scissors':
      return ['paper', 'lizard'];
    case 'lizard':
      return ['paper', 'Spock'];
    case 'Spock':
      return ['scissors', 'rock'];
    default:
      return null;
  }
}

function moveAnalysis(playerLog) {
  let totalMoves = Object.values(playerLog.player).reduce((accum,
    elem) => accum + elem);
  let mostMoves = Object.entries(playerLog.player).filter(elem =>
    elem[1] > (totalMoves / 2));

  if (mostMoves.length === 0 || mostMoves.length > 1) return null;

  return badPicks(mostMoves[0][0]);
}

function createComputer() {
  let playerObject = createPlayer();

  let computerObject = {
    choose() {
      let choices = ['rock', 'rock', 'paper', 'paper', 'scissors', 'scissors', 'lizard', 'lizard', 'Spock', 'Spock'];

      if (moveAnalysis(moveTracker)) {
        moveAnalysis(moveTracker).forEach(element => {
          let elementRemove = choices.indexOf(element);
          choices.splice(elementRemove, 1);
        });
      }
      console.log(choices);
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
        console.log('Please choose rock, paper, scissors, lizard, or Spock:');
        choice = readline.question();
        if (['rock', 'paper', 'scissors', 'lizard', 'Spock'].includes(choice)) break;
        console.log('Sorry, invalid choice.');
      }

      this.move = choice;
    },
  };

  return Object.assign(playerObject, humanObject);
}

function createScoreBoard() {
  return {
    player: 0,
    computer: 0,
  };
}

const RPSGame = {
  human: createHuman(),
  computer: createComputer(),
  score: createScoreBoard(),

  displayWelcomeMessage() {
    console.log('Welcome to Rock, Paper, Scissors, Lizard, Spock!');
    console.log('The match is a best of five! Good Luck!');
  },

  displayGoodbyeMessage() {
    console.log('Thanks for playing Rock, Paper, Scissors, Lizard, Spock. Goodbye!');
  },

  trackMove() {
    moveTracker.player[this.human.move] += 1;
    moveTracker.computer[this.computer.move] += 1;
  },

  displayWinner() {
    let humanMove = this.human.move;
    let computerMove = this.computer.move;

    console.log(`You chose: ${this.human.move}`);
    console.log(`The computer chose: ${this.computer.move}`);

    if ((humanMove === 'rock' && (computerMove === 'scissors' || computerMove === 'lizard')) ||
        (humanMove === 'paper' && (computerMove === 'rock' || computerMove === 'Spock')) ||
        (humanMove === 'scissors' && (computerMove === 'lizard' || computerMove === 'paper')) ||
        (humanMove === 'Spock' && (computerMove === 'scissors' || computerMove === 'rock')) ||
        (humanMove === 'lizard' && (computerMove === 'Spock' || computerMove === 'paper'))) {
      console.log('You win!');
      this.score.player += 1;
    } else if (computerMove === humanMove) {
      console.log("It's a tie");
    } else {
      console.log('Computer wins!');
      this.score.computer += 1;
    }
  },

  scoreBoard() {
    if (this.score.player === 5 || this.score.computer === 5) {
      console.log(`${this.score.player === 5 ? 'Player' : 'The Computer'} wins the match!`);
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
      this.trackMove();
      this.displayWinner();
      this.scoreBoard();
      if (!this.playAgain()) break;
    }

    this.displayGoodbyeMessage();
  },
};


RPSGame.play();
