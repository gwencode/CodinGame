
# INPUTS = [
#     { operation: "VALUE", arg_1: "3", arg_2: "_" },
#     { operation: "ADD", arg_1: "$0", arg_2: "4" }
#   ]

# INPUTS = [
#   { operation: "ADD", arg_1: "$1", arg_2: "20" },
#   { operation: "VALUE", arg_1: "32", arg_2: "_" }
# ]

# INPUTS = [{:operation=>"MULT", :arg_1=>"$5", :arg_2=>"$2"},
#   {:operation=>"ADD", :arg_1=>"$5", :arg_2=>"$0"},
#   {:operation=>"VALUE", :arg_1=>"12", :arg_2=>"_"},
#   {:operation=>"ADD", :arg_1=>"$2", :arg_2=>"$2"},
#   {:operation=>"MULT", :arg_1=>"$3", :arg_2=>"$2"},
#   {:operation=>"SUB", :arg_1=>"$3", :arg_2=>"$2"}
# ]

INPUTS = []

file = File.open('inputs_test_12.txt', 'r')
count = 0
file.each_line do |line|
  operation, arg_1, arg_2 = line.strip.split(" ")
  INPUTS << { operation: operation, arg_1: arg_1, arg_2: arg_2 }
end
file.close

# p INPUTS

cells = []

def operation(input, cells, inputs = INPUTS, back_boolean = false)
  # p input if back_boolean
  arg_1 = input[:arg_1]
  arg_2 = input[:arg_2]
  # if arg_1.to_s.include?("$")
  #   arg_1 = arg_value(arg_1, cells)
  # end
  # if arg_2.to_s.include?("$")
  #   arg_2 = arg_value(arg_2, cells)
  # end

  if arg_1.to_s.include?("$") && arg_2.to_s.include?("$")
    index_1 = arg_1.to_s[1..-1].to_i
    index_2 = arg_1.to_s[1..-1].to_i
    if index_1 >= index_2
      arg_1 = arg_value(arg_1, cells)
      arg_2 = arg_value(arg_2, cells)
    else
      arg_2 = arg_value(arg_2, cells)
      arg_1 = arg_value(arg_1, cells)
    end
  elsif arg_1.to_s.include?("$")
    arg_1 = arg_value(arg_1, cells)
  elsif arg_2.to_s.include?("$")
    arg_2 = arg_value(arg_2, cells)
  end

  case input[:operation]
  when "VALUE"
    value = arg_1.to_i
  when "ADD"
    value = arg_1.to_i + arg_2.to_i
  when "SUB"
    value = arg_1.to_i - arg_2.to_i
  when "MULT"
    value = arg_1.to_i * arg_2.to_i
  end
  cells << value unless back_boolean
  # p "cells: #{cells}"
  return value
end

def arg_value(arg, cells, inputs = INPUTS)
  # p arg
  cell_index = arg[1..arg.length - 1].to_i
    if cell_index <= cells.length
      arg = cells[cell_index]
    else
      back_input = inputs[cell_index]
      # p "back_input: #{back_input}"
      back_value = operation(back_input, cells, inputs, true)
      # p "back_value: #{back_value}"
      arg = back_value
    end
    return arg
end

INPUTS.each do |i|
  if i[:arg_1].include?("$") && i[:arg_2].include?("$")
    i[:arg_1] = arg_value(i[:arg_1], cells)
    i[:arg_2] = arg_value(i[:arg_2], cells)
    operation(i, cells)
  elsif i[:arg_1].include?("$") || i[:arg_2].include?("$")
    if i[:arg_1].include?("$")
      i[:arg_1] = arg_value(i[:arg_1], cells)
      # p "back_input: #{i}"
      operation(i, cells)
    else
      i[:arg_2] = arg_value(i[:arg_2], cells)
      operation(i, cells)
    end
  else
    operation(i, cells)
  end
end

puts cells
