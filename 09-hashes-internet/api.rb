require 'pry'
require 'rest-client'
require 'tty-prompt'

prompt =  TTY::Prompt.new
URL = "https://www.googleapis.com/books/v1/volumes?q="


user_input = prompt.ask("hello, enter something to search for books")
response = RestClient.get(URL + user_input)
parsed_response = JSON.parse(response.body)


user_input = prompt.select("Please Select a title") do |menu|
  parsed_response["items"].each do |book|
    menu.choice book["volumeInfo"]["title"], -> do
      puts "here is more info about that book:"
      puts "Title: #{book["volumeInfo"]["title"]}"
      puts "Description: #{book["volumeInfo"]["description"]}"
      puts "Author(s): #{book["volumeInfo"]["authors"][0]}"
    end
  end

  menu.choice "exit", -> { puts "sorry to see you go :(" }

end



# binding.pry