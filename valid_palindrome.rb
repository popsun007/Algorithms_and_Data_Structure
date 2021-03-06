# Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

# For example,
# "A man, a plan, a canal: Panama" is a palindrome.
# "race a car" is not a palindrome.

# Note:
# Have you consider that the string might be empty? This is a good question to ask during an interview.

# For the purpose of this problem, we define empty string as valid palindrome.

def is_palindrome(s)
  if s.nil? || s.length === 0
    return true
  end

  characters = []
  for i in 0...s.length
    ascii_char = s[i].ord
    if (ascii_char > 64 && ascii_char < 91) || (ascii_char > 96 && ascii_char < 123) || (ascii_char > 47 && ascii_char < 58) # only run if s[i] is an alphanumeric character
      characters.push(s[i].downcase)
    end
  end

  return characters.join("") === characters.reverse.join("")
end

def is_palindrome(s)
  if s.nil?
    return false
  end

  parse_s = ""
  s.chars.each do |char|
    current_char = char.downcase.ord - "a".ord 
    if (current_char >= 0 && current_char <= 26) || (char.ord >= 48 && char.ord <= 57) # ord value 48 == 0, ord value 57 == 9
      parse_s += char.downcase
    end
  end

  0.upto(parse_s.size / 2) do |i|
    if parse_s[i] != parse_s[parse_s.size - 1 - i]
      return false
    end
  end

  return true
end

# Two pointer:
def is_palindrome(s)
  if s.nil?
    return false
  end

  start_idx = 0
  end_idx = s.size - 1

  while start_idx < end_idx
    while start_idx < end_idx && is_alphanumeric(s[start_idx])
      start_idx += 1
    end    
      
    while start_idx < end_idx && is_alphanumeric(s[end_idx])
      end_idx -= 1
    end

    if s[start_idx].downcase != s[end_idx].downcase
      return false
    end

    start_idx += 1
    end_idx -= 1
  end

  return true
end

def is_alphanumeric(char)
  !(("a".."z").include?(char.downcase) || ("0".."9").include?(char))
end

puts is_palindrome("`l;`` 1o1 ??;l`")