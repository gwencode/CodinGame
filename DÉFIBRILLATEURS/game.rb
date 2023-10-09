include Math

defibs = []

file = File.open('defibs.txt', 'r')
file.each_line do |line|
  defibs << line.strip
end
file.close

lon = '3,874054'.gsub(',', '.').to_f * PI / 180.0
lat = '43,606779'.gsub(',', '.').to_f * PI / 180.0
n = 167

# p defibs

# Initialiser une réponse vide et une distance très grande
answer = ''
min_dist = 10 ** 100
# Pour chaque défibrilateur
defibs.each do |defi|
  # Récupérer les valeurs intéressantes et convertir longitude et latitude en radian
  d_details = defi.split(';')
  d_name = d_details[1]
  d_lon = d_details[4].gsub(',', '.').to_f * PI / 180.0
  d_lat = d_details[5].gsub(',', '.').to_f * PI / 180.0
  # Calculer la distance
  x = (lon - d_lon) * cos((d_lat + lat) / 2)
  y = lat - d_lat
  d = sqrt((x**2) + (y**2)) * 6731
  # Si la distance est inférieure à la dernière, ré-assigner distance et réponse
  if d < min_dist
    min_dist = d
    answer = d_name
    p "min_dist after= #{min_dist}"
  end
end
# Retourner réponse
puts answer
