table = {"html"=>"text/html", "png"=>"image/png", "gif"=>"image/gif"}
fnames = ["animated.gif", "portrait.png", "index.html"]
fnames.each do |fname|
  extension = (fname.count('.') >= 1 && fname[-1] != '.' && fname.split('.')[-1].nil? == false) ? fname.split('.')[-1].downcase : ""
  count += 1
  # For each of the Q filenames, display on a line the corresponding MIME type. If there is no corresponding type, then display UNKNOWN.
  puts table.has_key?(extension) ? table[extension] : "UNKNOWN"
end
