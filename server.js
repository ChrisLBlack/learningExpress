const http = require("http");
let PortOne = 7000;
let PortTwo = 7500;
let serverOne = http.createServer(handleRequestPortOne);
let serverTwo = http.createServer(handleRequestPortTwo)

// Create a generic function to handle requests and responses
function handleRequestPortOne(request, response) {

    // Send the below string to the client when the user visits the PORT URL
    response.end("What's cookin', good lookin'?");
};

function handleRequestPortTwo (request, response) {
    
    response.end("Eh, not you're best attempt of putting yourself together...");
};


// Start our server so that it can begin listening to client requests.
serverOne.listen(PortOne, function () {

    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PortOne);
});

serverTwo.listen(PortTwo, function () {

    console.log("Server listening on: http://localhost:" + PortTwo);
})