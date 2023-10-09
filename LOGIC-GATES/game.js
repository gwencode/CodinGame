/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const n = parseInt(readline());
const m = parseInt(readline());
let inputSignals = [];

for (let i = 0; i < n; i++) {
    var inputs = readline().split(' ');
    const inputName = inputs[0];
    const inputSignal = inputs[1];
    inputSignals.push({ inputName: inputName, inputSignal: inputSignal })

}

let outputs = []
for (let i = 0; i < m; i++) {
    var inputs = readline().split(' ');
    const outputName = inputs[0];
    const type = inputs[1];
    const inputName1 = inputs[2];
    const inputName2 = inputs[3];
    outputs.push({ outputName: outputName, type: type, inputName1: inputName1, inputName2: inputName2 })
}

const signalsCompare = (signal1, signal2, gate) => {
    let out_signal = "";
    for (let i = 0; i < signal1.length; i++) {
      switch (gate) {
        case "AND":
          signal1[i] == "-" && signal2[i] == "-" ? out_signal += "-" : out_signal += "_"
          break;
        case "OR":
          signal1[i] == "-" || signal2[i] == "-" ? out_signal += "-" : out_signal += "_"
          break;
        case "XOR":
          (signal1[i] == "-" && signal2[i] == "_") || (signal1[i] == "_" && signal2[i] == "-") ? out_signal += "-" : out_signal += "_"
          break;
        case "NAND":
          (signal1[i] == "-" && signal2[i] == "-") ? out_signal += "_" : out_signal += "-"
          break;
        case "NOR":
          (signal1[i] == "_" && signal2[i] == "_") ? out_signal += "-" : out_signal += "_"
          break;
        case "NXOR":
          (signal1[i] == "-" && signal2[i] == "-") || (signal1[i] == "_" && signal2[i] == "_") ? out_signal += "-" : out_signal += "_"
          break;
        default:
          console.log("WRONG GATE")
          break;
      }
    }
    return out_signal
  }

// console.log(inputSignals);
// [ { inputName: 'A', inputSignal: '__---___---___---___---___' },
//   { inputName: 'B', inputSignal: '____---___---___---___---_' } ]

// console.log(outputs);
// [{ outputName: 'C', type: 'AND', inputName1: 'A', inputName2: 'B' },
// { outputName: 'D', type: 'OR', inputName1: 'A', inputName2: 'B' },
// { outputName: 'E', type: 'XOR', inputName1: 'A', inputName2: 'B' }]


// Parcourir outputs
outputs.forEach((output) => {
    // Pour chaque output, commencer la string avec l'ouput name
    let outputName = output.outputName;
    // console.log(outputName); => C / D / E
    let inputName1 = output.inputName1;
    let inputName2 = output.inputName2;
    // Récupérer les 2 inputs
    let input1 = inputSignals.find((input) => input.inputName === inputName1);
    let input2 = inputSignals.find((input) => input.inputName === inputName2);
    // 2e string avec la comparaison entre les signaux 1 et 2
    let outSignal = signalsCompare(input1.inputSignal, input2.inputSignal, output.type);
    console.log(outputName + " " + outSignal);
})



// console.log('output name and signal');
