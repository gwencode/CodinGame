players = [
  {:num=>133, :sign=>"P", wins:[]},
  {:num=>284, :sign=>"R", wins:[]},
  {:num=>420, :sign=>"L", wins:[]},
  {:num=>229, :sign=>"C", wins:[]},
  {:num=>805, :sign=>"L", wins:[]},
  {:num=>262, :sign=>"R", wins:[]},
  {:num=>34, :sign=>"R", wins:[]},
  {:num=>45, :sign=>"L", wins:[]}
]

def round_same_sign(player1, player2)
  winner = player1[:num] < player2[:num] ? player1 : player2
  winner == player1 ? winner[:wins] << player2[:num] :  winner[:wins] << player1[:num]
  return winner
end

def round(player1, player2)
  sign1 = player1[:sign]
  sign2 = player2[:sign]
  case sign1
  when 'R'
    winner = %w[P S].include?(sign2) ? player2 : player1
  when 'P'
    winner = %w[C L].include?(sign2) ? player2 : player1
  when 'C'
    winner = %w[R S].include?(sign2) ? player2 : player1
  when 'L'
    winner = %w[R C].include?(sign2) ? player2 : player1
  when 'S'
    winner = %w[L P].include?(sign2) ? player2 : player1
  end
  winner == player1 ? winner[:wins] << player2[:num] :  winner[:wins] << player1[:num]
  winner
end

# p round( {:num=>420, :sign=>"L", wins:[]},
#   {:num=>229, :sign=>"C", wins:[]})

# Parcourir players tant que players.length > 1
while players.length > 1
  # Instantier winners à liste vide
  winners = []
  l = players.length
  (0..(l / 2 - 1)).to_a.each do |index|
    player1 = players[index * 2]
    player2 = players[index * 2 + 1]
    # Pour chaque paire de joueurs
    # Méthode qui décide du gagnant pour 2 joueurs et qui retourne le joueur gagnant
    if player1[:sign] == player2[:sign]
      winner = round_same_sign(player1, player2)
    else
      winner = round(player1, player2)
    end
    # Pusher le winner dans winners
    winners << winner
  end
  # Lorsque fini de parcourir players, remplacer players par winners
  players = winners
end

# p players
puts players.first[:num]
puts players.first[:wins].join(' ')
