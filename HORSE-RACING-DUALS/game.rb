N = 10
powers = [10, 5, 15, 17, 3, 8, 11, 28, 6, 55, 7]

# Trier le tableau par ordre croissant pour avoir un seul passage
# à effectuer dans le tableau ensuite
powers.sort!
# p powers

diff = 10**5
for i in (0...N - 1) do
  d = powers[i + 1] - powers[i]
  diff = d if d < diff
end

puts diff
