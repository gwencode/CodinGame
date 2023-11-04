# Example 1
# w = 5
# H = 5
# t1 = 1
# t2 = 2
# t3 = 3
# first_picture_array = ["A.....", "......", "......", "......", "......", "......"]
# second_picture_array = [".A....", "......", "......", "......", "......", "......"]

# Example 6
# w = 6
# H = 6
# t1 = 1
# t2 = 3
# t3 = 5
# first_picture_array = ["A.....", "......", "B.....", "......", "......", "......"]
# second_picture_array = [".A....", "B.....", "......", "......", "......", "......"]

# Example 9
w = 10
H = 10
t1 = 100
t2 = 200
t3 = 300
first_picture_array = [
  "A.........", "B.........", "C.........",
  "D.........", "E.........", ".........F",
  ".........G", ".........H", ".........I",
  ".........J"
]
second_picture_array = [
  ".A........", "..B.......", "...C......",
  "....D.....", ".....E....", "........F.",
  ".......G..", "......H...", ".....I....",
  "....J....."
]

TIME1 = t2 - t1
TIME2 = t3 - t2

def astero_coordinates(picture_array)
  picture = {}
  picture_array.each_with_index do |element, y_index|
    row = element.chars # ["A", ".", ".", ".", "."]
    row.each_with_index do |astero, x_index|
      if astero != "."
        picture[astero] = {x: x_index, y: y_index}
      end
    end
  end
  return picture
end

p first_picture = astero_coordinates(first_picture_array)
# {"A"=>{:x=>0, :y=>0}, "B"=>{:x=>0, :y=>2}}
p second_picture = astero_coordinates(second_picture_array)
# {"A"=>{:x=>1, :y=>0}, "B"=>{:x=>0, :y=>1}}

def calculate_new_dist(first_picture, second_picture)
  third_picture = {}
  first_picture.each do |astero, coord|
    dist_x = second_picture[astero][:x] - coord[:x] # 0
    dist_y = second_picture[astero][:y] - coord[:y] # 1
    speed_x = dist_x.fdiv(TIME1) # 0
    speed_y = dist_y.fdiv(TIME1) # 1
    new_dist_x = TIME2 * speed_x
    new_dist_y = TIME2 * speed_y
    new_coord_x = (second_picture[astero][:x] + new_dist_x).to_i
    new_coord_y = (second_picture[astero][:y] + new_dist_y).to_i
    if (0..H - 1).include?(new_coord_x) && (0..H - 1).include?(new_coord_y)
      third_picture[astero] = {x: new_coord_x, y: new_coord_y}
    end
  end
  return third_picture
end

p third_picture = calculate_new_dist(first_picture, second_picture)

def build_third_picture_array(third_picture)
  third_picture_array = ([""] * H).map do
    "." * H
  end
  # third_picture_array # [".....", ".....", ".....", ".....", "....."]

  # {"A"=>{:x=>0, :y=>2}}
  third_picture.each do |astero, coord|
    char = third_picture_array[coord[:y]][coord[:x]]
    third_picture_array[coord[:y]][coord[:x]] = astero unless char.nil? || (char != "." && char.ord < astero.ord)
  end

  return third_picture_array
end

third_picture_array = build_third_picture_array(third_picture) # ["..A..", ".....", ".....", ".....", "....."]

third_picture_array.each do |row|
  puts row
end
