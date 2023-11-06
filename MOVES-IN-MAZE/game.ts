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

function navigate(maze: string[], moves: Move[], row: number, col: number, index: string): [string[], Move[]] {
  if (row >= h) {
      row = 0
  } else if (row < 0) {
      row = h - 1
  } else if (col >= w) {
      col = 0
  } else if (col < 0) {
      col = w - 1
  }
  if (maze[row][col] === ".") {
      maze[row] = replaceCharacter(maze[row], col, index)
      moves.push({row: row, col: col})
  }
  return [maze, moves]
}

function check(maze: string[], moves: Move[], index: string): [string[], Move[]] {
  let initialMoves: Move[] = moves.slice();
  moves.forEach((move) => {
      if (maze[move.row][move.col + 1] === "." || move.col + 1 >= w) {
          let nav = navigate(maze, moves, move.row, move.col + 1, index)
          maze = nav[0]
          moves = nav[1]
      }
      if (maze[move.row][move.col - 1] === "." ||  move.col - 1 < 0) {
          let nav = navigate(maze, moves, move.row, move.col - 1, index)
          maze = nav[0]
          moves = nav[1]
      }
      if (maze[move.row + 1] === undefined || maze[move.row + 1][move.col] === ".") {
          let nav = navigate(maze, moves, move.row + 1, move.col, index)
          maze = nav[0]
          moves = nav[1]
      }
      if (maze[move.row - 1] === undefined || maze[move.row - 1][move.col] === ".") {
          let nav = navigate(maze, moves, move.row - 1, move.col, index)
          maze = nav[0]
          moves = nav[1]
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
  let checks: [string[], Move[]] = [[], []]
  if (i >= 10 && i <= 35) {
      checks = check(maze, moves, String.fromCharCode(65 + i - 10))
  } else {
      checks = check(maze, moves, i.toString())
  }
  maze = checks[0]
  moves = checks[1]
}
maze.forEach((row) => console.log(row))
