const T = "1sp 1/ 1bS 1_ 1/ 1bS nl 1( 1sp 1o 1. 1o 1sp 1) nl 1sp 1> 1sp 1^ 1sp 1< nl 2sp 3|"
let answer = ""

let chunks = T.split(" ")

const testAbb = (s) => {
  switch (s) {
    case "sp":
      return " "
    case "bS":
      return "\\"
    case "sQ":
      return "'"
    case "nl":
      return "\n"
    default:
      return s
  }
}
// console.log(testAbb("sp"));
// console.log(testAbb("bS"));
// console.log(testAbb("sQ"));
// console.log(testAbb("o"));

chunks.forEach((chunk) => {
  let l = chunk.length
  if (chunk === "nl") {
    answer += "\n"
  } else if (Number.isInteger(parseInt(chunk[l - 1]))) {
    let digit = parseInt(chunk.slice(0, l - 1))
    chunk = chunk[l - 1]
    answer += chunk.repeat(digit)
  } else if (Number.isInteger(parseInt(chunk[0]))) {
    if (Number.isInteger(parseInt(chunk[1]))) {
      let digit = parseInt(chunk.slice(0, 2))
      chunk = chunk.slice(2, l)
      answer += testAbb(chunk).repeat(digit)
    } else {
      let digit = parseInt(chunk[0])
      chunk = chunk.slice(1, l)
      answer += testAbb(chunk).repeat(digit)
    }
  }
  // console.log(answer)
})
console.log(answer)
