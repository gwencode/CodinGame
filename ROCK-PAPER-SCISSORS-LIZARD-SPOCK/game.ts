type Sign = "R" | "P" | "C" | "L" | "S"

type Player = {
  num: number,
  sign: Sign,
  wins: number[]
}

let players: Player[] = [
  {num: 133, sign: "P", wins:[]},
  {num: 284, sign: "R", wins:[]},
  {num: 420, sign: "L", wins:[]},
  {num: 229, sign: "C", wins:[]},
  {num: 805, sign: "L", wins:[]},
  {num: 262, sign: "R", wins:[]},
  {num: 34, sign: "R", wins:[]},
  {num: 45, sign: "L", wins:[]}
]

// Write an answer using console.log()

// console.log(players[1].num)

const roundSameSign = (player1: Player, player2: Player):Player => {
  let winner: Player = player1.num < player2.num ? player1 : player2
  winner == player1 ? winner.wins.push(player2.num) :  winner.wins.push(player1.num)
  return winner
};

// let player1 = {num: 420, sign: "L", wins:[]}
// let player2 = {num: 45, sign: "L", wins:[]}

// console.log(roundSameSign(player1, player2));

const round = (player1: Player, player2: Player) => {
  let sign1: Sign = player1.sign;
  let sign2: Sign = player2.sign;
  let winner: Player = player1
  switch (sign1) {
    case 'R':
      winner = ["P", "S"].includes(sign2) ? player2 : player1;
      break;
    case 'P':
      winner = ["C", "L"].includes(sign2) ? player2 : player1;
      break;
    case 'C':
      winner = ["R", "S"].includes(sign2) ? player2 : player1;
      break;
    case 'L':
      winner = ["R", "C"].includes(sign2) ? player2 : player1;
      break;
    case 'S':
      winner = ["L", "P"].includes(sign2) ? player2 : player1;
      break;
    default:
      console.log('Sorry, something went wrong');
  }
  winner == player1 ? winner.wins.push(player2.num) : winner.wins.push(player1.num)
  return winner
}

// let player1 = {num: 420, sign: "L", wins:[]}
// let player2 = {num: 229, sign: "C", wins:[]}
// console.log(roundSameSign(player1, player2));

while (players.length > 1) {
  let winners: Player[] = [];
  let winner: Player
  let l: number = players.length
  for (let i = 0; i <= (l / 2 - 1); i++) {
    let player1: Player = players[i * 2];
    let player2: Player = players[i * 2 + 1];
    if (player1.sign == player2.sign) {
      winner = roundSameSign(player1, player2)
    } else {
      winner = round(player1, player2)
    }
    winners.push(winner)
    // console.log(winner)
  }
  players = winners
}

console.log(players[0].num)
console.log(players[0].wins.join(' '))
