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