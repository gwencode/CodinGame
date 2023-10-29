const N: number = parseInt(readline()); // Number of elements which make up the association table.
const Q: number = parseInt(readline()); // Number Q of file names to be analyzed.
let table: { [k: string]: string } = {}
for (let i = 0; i < N; i++) {
  var inputs: string[] = readline().split(' ');
  const EXT: string = inputs[0]; // file extension
  const MT: string = inputs[1]; // MIME type.
  table[EXT.toLowerCase()] = MT
}
// console.log(table)
// { html: 'text/html', png: 'image/png', gif: 'image/gif' }

for (let i = 0; i < Q; i++) {
  const FNAME: string = readline(); // One file name per line.
  let a_fname: string[] = FNAME.split('.')
  let a_length: number= a_fname.length - 1
  let extension:string = (FNAME.includes('.') && a_fname[a_length] != '.' && a_fname[a_length] != undefined) ? a_fname[a_length].toLowerCase() : ""
  // # For each of the Q filenames, display on a line the corresponding MIME type. If there is no corresponding type, then display UNKNOWN.
  console.log(extension in table ? table[extension] : "UNKNOWN")
}
