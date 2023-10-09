message = "CC"

chars = message.split('')
bits = ""
encod_message = ""

chars.each do |char|
  bits += char.ord.to_s(2).rjust(7, '0')
end

groupes = bits.scan(/(0+|1+)/)

groupes.each do |groupe|
  first_bloc = groupe[0][0] == "1" ? "0" : "00"
  second_bloc = "0" * groupe[0].length
  encod_message += "#{first_bloc} #{second_bloc} "
end

puts encod_message.strip
