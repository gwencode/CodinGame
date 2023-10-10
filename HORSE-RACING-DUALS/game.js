// const N = parseInt(readline());
// const POWERS = []
// for (let i = 0; i < N; i++) {
//     const pi = parseInt(readline());
//     POWERS.push(pi)
// }

const N = 10
const POWERS = [10, 5, 15, 17, 3, 8, 11, 28, 6, 55, 7]

// Trier le tableau par ordre croissant pour avoir un seul passage
// à effectuer dans le tableau ensuite
POWERS.sort((a, b) => (a - b))
// console.log(POWERS)

let diff = 10**5
for (let i = 0; i < N -1 ; i++) {
    d = (POWERS[i + 1] - POWERS[i])
    if (d < diff) {
        diff = d
    }
}

console.log(diff);
