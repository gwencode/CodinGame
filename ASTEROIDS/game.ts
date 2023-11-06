// Example 1
// const W: number = 5
// const H: number = 5
// const T1: number = 1
// const T2: number = 2
// const T3: number = 3
// const firstPictureArray: string[] = [ 'A....', '.....', '.....', '.....', '.....' ]
// const secondPictureArray: string[] = [ '.A...', '.....', '.....', '.....', '.....' ]

// Example 6
const W: number = 6
const H: number = 6
const T1: number = 1
const T2: number = 3
const T3: number = 5
const firstPictureArray: string[] = [
  'A.....', '......', 'B.....',
'......', '......', '......'
]
const secondPictureArray: string[] = [
  '.A....', 'B.....', '......',
  '......', '......', '......'
]

type Picture = {
  [k: string]: {
    x: number
    y: number
  }
}

const TIME1 = T2 - T1;
const TIME2 = T3 - T2;

function asteroCoordinates(pictureArray: string[]): Picture {
    let picture: Picture = {};
    pictureArray.forEach((element: string, y_index: number ) => {
        let row: string[] = element.split('');
        row.forEach((astero: string, x_index: number) => {
            if (astero != ".") { picture[astero] = { x: x_index, y: y_index } };
        })
    })
    return picture
}

let firstPicture: Picture = asteroCoordinates(firstPictureArray);
// console.log(firstPicture);
let secondPicture: Picture = asteroCoordinates(secondPictureArray);
// console.log(secondPicture);

function buildThirdPicture(firstPicture: Picture, secondPicture: Picture): Picture {
    let thirdPicture: Picture = {};
    Object.entries(firstPicture).forEach(entry => {
      const [astero, coord] = entry;
      let distX: number = secondPicture[astero].x - coord.x // 0
      let distY: number = secondPicture[astero].y - coord.y // 1
      let speedX: number = distX / TIME1 // 0
      let speedY: number = distY / TIME1 // 1
      let newDistX: number = TIME2 * speedX
      let newDistY: number = TIME2 * speedY
      let newCoordX: number = secondPicture[astero].x + Math.floor(newDistX)
      let newCoordY: number = secondPicture[astero].y + Math.floor(newDistY)
      const rangeArray: number[] = Array.from({ length: H }, (_, index) => 0 + index);
      if (rangeArray.includes(newCoordX) && rangeArray.includes(newCoordY)) {
        thirdPicture[astero] = {x: newCoordX, y: newCoordY}
      }
    })
    return thirdPicture
}

let thirdPicture: Picture = buildThirdPicture(firstPicture, secondPicture)
// console.log(thirdPicture);

function replaceCharacter(string: string, index: number, replacement: string): string {
    return (
      string.slice(0, index) +
      replacement +
      string.slice(index + 1, string.length)
    );
  }

  function buildThirdPictureArray(thirdPicture: Picture): string[] {
    let thirdPictureArray: string[] = Array(H).fill(".".repeat(H));
    Object.entries(thirdPicture).forEach(entry => {
      const [astero, coord] = entry;
      let char: string | undefined = thirdPictureArray[coord.y][coord.x]
      if (!( (char === undefined) || (char != "." && char.charCodeAt(0) < astero.charCodeAt(0)) )) {
        thirdPictureArray[coord.y] = replaceCharacter(thirdPictureArray[coord.y], coord.x, astero)
      }
    });
    return thirdPictureArray
  }

  let thirdPictureArray = buildThirdPictureArray(thirdPicture)
  // console.log(thirdPictureArray)

  thirdPictureArray.forEach((row) => console.log(row))
