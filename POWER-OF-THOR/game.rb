STDOUT.sync = true # DO NOT REMOVE
# Auto-generated code below aims at helping you parse
# the standard input according to the problem statement.
# ---
# Hint: You can use the debug stream to print initialTX and initialTY, if Thor seems not follow your orders.

# light_x: the X position of the light of power
# light_y: the Y position of the light of power
# initial_tx: Thor's starting X position
# initial_ty: Thor's starting Y position
light_x, light_y, initial_tx, initial_ty = gets.split(" ").collect { |x| x.to_i }
x_moves = initial_tx - light_x
y_moves = initial_ty - light_y

# game loop
loop do
    remaining_turns = gets.to_i # The remaining amount of turns Thor can move. Do not remove this line.
    # Write an action using puts
    # To debug: STDERR.puts "Debug messages..."
    if y_moves > 0
        move_y = "N"
        y_moves -= 1
    elsif y_moves < 0
        move_y = "S"
        y_moves += 1
    else
        move_y = ""
    end

    if x_moves > 0
        move_x = "W"
        x_moves -= 1
    elsif x_moves < 0
        move_x = "E"
        x_moves += 1
    else
        move_x = ""
    end

    puts move_y + move_x
    # A single line providing the move to be made: N NE E SE S SW W or NW
end
