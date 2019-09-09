browser->server: HTTP GET https://fullstack-exampleapp.herokuapp.com/spa
server-->browser: response 304 (not-modified)
note over server:
there is no need for the server to transfer a representation of the target resource 
because the request indicates that the client, which made the request conditional, 
already has a valid representation; the server is therefore redirecting 
the client to make use of that stored representation as if it were the payload of a 200 OK response.
taken from: https://httpstatuses.com/304
end note
browser->server: HTTP GET https://fullstack-exampleapp.herokuapp.com/main.css
server-->browser: main.css
browser->server: HTTP GET https://fullstack-exampleapp.herokuapp.com/spa.js
server-->browser: spa.js

note over browser:
browser starts executing js-code
that requests JSON data from server 
end note

browser->server: HTTP GET https://fullstack-exampleapp.herokuapp.com/data.json
server-->browser: [{ content: "HTML is easy", date: "2019-05-23" }, ...]

note over browser:
browser executes the event handler
that renders notes to display
end note