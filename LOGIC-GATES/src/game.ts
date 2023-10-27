/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const n: number = parseInt(readline());
const m: number = parseInt(readline());

type inputSignal = {
  inputName: string
  inputSignal: string
}

let inputSignals: inputSignal[] = [];

for (let i = 0; i < n; i++) {
    var inputs: string[] = readline().split(' ');
    const inputName: string = inputs[0];
    const inputSignal: string = inputs[1];
    inputSignals.push({ inputName: inputName, inputSignal: inputSignal })
}

type Gate = "AND" | "OR" | "XOR" | "NAND" | "NOR" | "NXOR"

type outputSignal = {
  outputName: string
  type: Gate
  inputName1: string
  inputName2: string
}

type Outputs = [string, Gate, string, string]

let outputSignals: outputSignal[] = []
for (let i = 0; i < m; i++) {
    var outputs: Outputs = readline().split(' ') as Outputs;
    const outputName: string = outputs[0];
    const type: Gate = outputs[1];
    const inputName1: string = outputs[2];
    const inputName2: string = outputs[3];
    outputSignals.push({ outputName: outputName, type: type, inputName1: inputName1, inputName2: inputName2 })
}

const signalsCompare = (signal1: string, signal2: string, gate: Gate) => {
  let out_signal: string = "";
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
        console.log(`${gate}: Wrong Gate`)
        break;
    }
  }
  return out_signal
}

// Parcourir outputs
outputSignals.forEach((outputSignal) => {
  // Pour chaque output, commencer la string avec l'ouput name
  let outputName = outputSignal.outputName;
  // console.log(outputName); => C / D / E
  let inputName1 = outputSignal.inputName1;
  let inputName2 = outputSignal.inputName2;
  // Récupérer les 2 inputs
  let input1 = inputSignals.find((input) => input.inputName === inputName1);
  let input2 = inputSignals.find((input) => input.inputName === inputName2);
  // 2e string avec la comparaison entre les signaux 1 et 2
  let outSignal = signalsCompare(input1.inputSignal, input2.inputSignal, outputSignal.type);
  console.log(outputName + " " + outSignal);
})
