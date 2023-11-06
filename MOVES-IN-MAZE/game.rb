# Example 1
W = 10
H = 5
maze = ["##########", "#S.......#", "##.#####.#", "##.#.....#", "##########"]

# maze.each { |row| puts row }
# puts ""
start = { row: 1, col: 1 }

def navigate(maze, moves, row, col, index)
  if row >= H
    row = 0
  elsif row < 0
    row = H - 1
  elsif col >= W
    col = 0
  elsif col < 0
    col = W - 1
  end
  if maze[row][col] == "."
    maze[row][col] = index
    moves << { row: row, col: col }
  end
  return [maze, moves]
end

def check(maze, moves, index)
  initial_moves = moves.clone
  initial_moves.each do |move|
    if (maze[move[:row]][move[:col] + 1] === "." || move[:col] + 1 >= W )
      nav = navigate(maze, moves, move[:row], move[:col] + 1, index)
      maze = nav[0]
      moves = nav[1]
    end
    if (maze[move[:row]][move[:col] - 1] === "." || move[:col] - 1 < 0 )
        nav = navigate(maze, moves, move[:row], move[:col] - 1, index)
        maze = nav[0]
        moves = nav[1]
    end
    if (move[:row] + 1 >= H || maze[move[:row] + 1][move[:col]] === ".")
        nav = navigate(maze, moves, move[:row] + 1, move[:col], index)
        maze = nav[0]
        moves = nav[1]
    end
    if (move[:row] - 1 < 0 || maze[move[:row] - 1][move[:col]] === ".")
        nav = navigate(maze, moves, move[:row] - 1, move[:col], index)
        maze = nav[0]
        moves = nav[1]
    end
    moves.delete(move)
  end
  return [maze, moves]
end

maze[start[:row]][start[:col]] = '0'
moves = [start]

(1...36).each do |index|
  checks = []
  if index >= 10 && index <= 35
    checks = check(maze, moves, ((65 + index - 10).chr))
  else
    checks = check(maze, moves, index.to_s)
    # pp checks
  end
  maze = checks[0]
  moves = checks[1]
end

maze.each { |row| puts row }
