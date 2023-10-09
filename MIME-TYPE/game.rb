# Auto-generated code below aims at helping you parse
# the standard input according to the problem statement.

# n = 3 # Number of elements which make up the association table.
# q = 3 # Number Q of file names to be analyzed.
# table = {}
# n.times do
#   # ext: file extension
#   # mt: MIME type.
#   ext, mt = gets.split(" ")
#   table[ext.downcase] = mt
# end

table = {"html"=>"text/html", "png"=>"image/png", "gif"=>"image/gif"}
fnames = ["animated.gif", "portrait.png", "index.html"]
count = 0
fnames.each do |fname|
  extension = (fname.count('.') >= 1 && fname[-1] != '.' && fname.split('.')[-1].nil? == false) ? fname.split('.')[-1].downcase : ""
  count += 1
  # For each of the Q filenames, display on a line the corresponding MIME type. If there is no corresponding type, then display UNKNOWN.
  puts table.has_key?(extension) ? table[extension] : "UNKNOWN"
end
