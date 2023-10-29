
// game loop
while (true) {
  let heights: number[] = [];
  for (let i = 0; i < 8; i++) {
      const mountainH: number = parseInt(readline()); // represents the height of one mountain.
      heights.push(mountainH);
  }

  const initialValue: 0 = 0;
  const max: number = heights.reduce((accumulator, currentValue) => Math.max(accumulator, currentValue), initialValue);
  const index: number = heights.findIndex((element) => element === max);
  // Write an action using console.log()
  // To debug: console.error('Debug messages...');

  console.log(index);     // The index of the mountain to fire on.
}
