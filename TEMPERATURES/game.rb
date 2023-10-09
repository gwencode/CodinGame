# Auto-generated code below aims at helping you parse
# the standard input according to the problem statement.

n = gets.to_i # the number of temperatures to analyse
inputs = gets.split(" ")
if n == 0
  puts 0
  return
end
close_t = 5526
for i in 0..(n-1)
  # t: a temperature expressed as an integer ranging from -273 to 5526
  t = inputs[i].to_i
  if t.abs < close_t.abs
    close_t = t
  elsif t.abs == close_t.abs
    close_t = [t, close_t].max
  end
end
puts close_t

# Write an answer using puts
# To debug: STDERR.puts "Debug messages..."
