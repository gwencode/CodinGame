/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const L = parseInt(readline());
const H = parseInt(readline());
const T = readline().toUpperCase();

for (let i = 0; i < H; i++) {
    // console.log(i)
    const ROW = readline();
    // Séparer la ligne ascii en un tableau de caractères ascii
    let regex = new RegExp(`.{1,${L}}`, 'g');
    let ascii_row = ROW.match(regex) || [];
    // console.log(ascii_row)
    // Parcourir la chaine de caractères
    let result = ""
    for (let j = 0; j < T.length ; j++) {
        // console.log("boucle for pour T!")
        // Récupérer la lettre de la chaîne de caractères
        let letter = T[j]
        // console.log(letter)
        // Trouver la position de la lettre dans l'alhpabet
        let index_alphabet = letter.charCodeAt(0) - "A".charCodeAt(0) + 1
        // console.log(index_alphabet)
        // Lui donner la position 27 si c'est un caractère spécial
        // index_alphabet = index_alphabet <= 0 ? 0 : index_alphabet;
        if (index_alphabet <= 0) {
            index_alphabet = 27
        }
        // Récupérer la ligne de caractères ascii de la lettre, et la concaténer à result
        // console.log(ascii_row[index_alphabet - 1]);
        result += ascii_row[index_alphabet - 1]
    }
    // Afficher la ligne asci
    console.log(result)
}

// Write an answer using console.log()
// To debug: console.error('Debug messages...');

// console.log('answer');
