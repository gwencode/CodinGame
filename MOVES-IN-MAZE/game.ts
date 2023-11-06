// Example 1
const w: number = 10;
const h: number = 5;
let maze: string[] = [
  '##########', // row
  '#S.......#',
  '##.#####.#',
  '##.#.....#',
  '##########'
]
type Move = {
  row: number
  col: number
}

const start: Move = { row: 1, col: 1 }

// Sortie:
// ##########
// #01234567#
// ##2#####8#
// ##3#DCBA9#
// ##########

function replaceCharacter(string: string, index: number, replacement: string): string {
  return (
    string.slice(0, index) +
    replacement +
    string.slice(index + 1, string.length)
  );
}

function check(maze: string[], moves: Move[], index: string): [string[], Move[]] {
  // Checker position à droite, si c'est un "."" ajouter 1 (ou A, B...)
  let initialMoves: Move[] = moves.slice();
  moves.forEach((move) => {
      if (maze[move.row][move.col + 1] === ".") {
      maze[move.row] = replaceCharacter(maze[move.row], move.col + 1, index)
      moves.push({row: move.row, col: move.col + 1})
      }
      if (maze[move.row][move.col - 1] === ".") {
      maze[move.row] = replaceCharacter(maze[move.row], move.col - 1, index)
      moves.push({row: move.row, col: move.col - 1})
      }
      if (maze[move.row + 1][move.col] === ".") {
      maze[move.row + 1] = replaceCharacter(maze[move.row + 1], move.col, index)
      moves.push({row: move.row + 1, col: move.col})
      }
      if (maze[move.row - 1][move.col] === ".") {
      maze[move.row - 1] = replaceCharacter(maze[move.row - 1], move.col, index)
      moves.push({row: move.row + 1, col: move.col - 1})
      }
  });
  initialMoves.forEach((initialMove) => {
      moves = moves.filter(function(element) {
          return element !== initialMove;
      });
  })
  return [maze, moves]
}


// Partir du start, remplacer par 0
maze[start.row] = replaceCharacter(maze[start.row], start.col, '0')
let moves: Move[] = [start]

for (let i = 1; i < 36; i++) {
  console.error('i: ', i)
  let checks: [string[], Move[]] = [[], []]
  if (i >= 10 && i <= 35) {
      checks = check(maze, moves, String.fromCharCode(65 + i - 10))
  } else {
      checks = check(maze, moves, i.toString())
  }
  maze = checks[0]
  moves = checks[1]
  if (8 <= i && i <= 10) {
      console.error('maze', maze)
      console.error('moves', moves)
  }
}
maze.forEach((row) => console.log(row))
