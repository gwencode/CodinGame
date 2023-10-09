/**
 * The while loop represents the game.
 * Each iteration represents a turn of the game
 * where you are given inputs (the heights of the mountains)
 * and where you have to print an output (the index of the mountain to fire on)
 * The inputs you are given are automatically updated according to your last actions.
 **/

// game loop
while (true) {
  const heights = [];
  for (let i = 0; i < 8; i++) {
      const mountainH = parseInt(readline()); // represents the height of one mountain.
      heights.push(mountainH);
  }
  const initialValue = 0;
  const max = heights.reduce((accumulator, currentValue) => Math.max(accumulator, currentValue), initialValue);
  const index = heights.findIndex((element) => element === max);
  // Write an action using console.log()
  // To debug: console.error('Debug messages...');

  console.log(index);     // The index of the mountain to fire on.
}
