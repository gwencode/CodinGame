/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

// const MESSAGE: string = readline();

const MESSAGE = "C";
const chars: string[] = MESSAGE.split('')
let bits: string = ""
let encod_message: string = ""


chars.forEach((char) => {
  bits += char.charCodeAt(0).toString(2).padStart(7, '0')
})

const regex: RegExp = /(0+|1+)/g
const groupes: RegExpMatchArray | null = bits.match(regex);

if (groupes === null) {
  console.log("No match found in RegExp")
} else {
  groupes.forEach((groupe) => {
    let first_bloc: string = groupe[0] === "1" ? "0" : "00"
    let second_bloc: string = "0".repeat(groupe.length)
    encod_message += `${first_bloc} ${second_bloc} `
  })
  console.log(encod_message.trim())
}
