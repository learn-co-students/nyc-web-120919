## Internet
* connection of computers
* computers talking to each other


* When we are using the internet browser (like Chrome), we are actually sending a 
_request_ to a server (just another computer).

* The server returns a response (usually HTML), and my browser reads the HTML and puts things on the screen for me to click and read :)

## API
* built by developers for other developers to interface (interact) with their data


## Using APIs in RUBY
* response = RestClient.get(url)
* in the response.body, we may get a string that looks like a hash, that is called a *JSON*
* we can parse the JSON into an actual Hash and interact with it.


## TTY-PROMPT
This is just a nice to have. I encourage you to practice learning how to learn by trying to incorporate this input/output library into your app. However, do not let it take too much of your time. If you want to just do input output using `gets.chomp`, that is fine too. The main thing you should be practicing in your Projects are:
* domain modeling
* ActiveRecord
  * Migrations
  * `has_many`, `belongs_to`
