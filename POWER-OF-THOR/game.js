/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 * ---
 * Hint: You can use the debug stream to print initialTX and initialTY, if Thor seems not follow your orders.
 **/

var inputs = readline().split(' ');
const lightX = parseInt(inputs[0]); // the X position of the light of power
const lightY = parseInt(inputs[1]); // the Y position of the light of power
const initialTx = parseInt(inputs[2]); // Thor's starting X position
const initialTy = parseInt(inputs[3]); // Thor's starting Y position

let x_moves =  initialTx - lightX;
let y_moves =  initialTy - lightY;

// game loop
while (true) {
    const remainingTurns = parseInt(readline()); // The remaining amount of turns Thor can move. Do not remove this line.
    let move_y = "";
    let move_x = "";

    if (y_moves > 0) {
        move_y = "N";
        y_moves -= 1;
    } else if (y_moves < 0) {
        move_y = "S";
        y_moves += 1;
    }

    if (x_moves > 0) {
        move_x = "W";
        x_moves -= 1;
    } else if (x_moves < 0) {
        move_x = "E";
        x_moves += 1;
    }

    console.log(move_y + move_x);

    // Write an action using console.log()
    // To debug: console.error('Debug messages...');
    // A single line providing the move to be made: N NE E SE S SW W or NW
}
