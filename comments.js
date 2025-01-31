// Create web server
// Create a web server that listens on port 3000 and serves the comments.json file.
// Create a web server that listens on port 3000 and serves the comments.json file.
// The comments.json file contains an array of objects, each with a name and comment property.
// The server should respond to GET requests to the root URL (/) with the contents of the comments.json file.
// The server should respond to POST requests to the root URL (/) by adding a new comment object to the comments.json file.
// The new comment object should have a name property and a comment property, and the name property should be set to "Anonymous" if not provided in the request body.
// The server should respond to PUT requests to the root URL (/) by updating an existing comment object in the comments.json file.
// The request body should contain the index of the comment object to update, as well as the new name and comment properties.
// The server should respond to DELETE requests to the root URL (/) by deleting an existing comment object from the comments.json file.
// The request body should contain the index of the comment object to delete.
// The server should respond with a 404 status code if the requested comment object does not exist.
// The server should respond with a 400 status code if the request body is missing or invalid.
// The server should respond with a 500 status code if an error occurs while reading or writing the comments.json file.
// The server should respond with a 200 status code and the updated comments.json file for successful POST, PUT, and DELETE requests.
// The server should respond with a 200 status code and the comments.json file for successful GET requests.
// The server should respond with a 405 status code for all other request methods.
// The server should respond with a 404 status code for all other request URLs.
// The server should respond with a 500 status code for all other errors.
// The server should log the request method, URL, and status code to the console for each request.
// The server should be implemented using the http module.
// Use the following code to start the server:

// const http = require('http');
// const fs = require('fs');
// const path = require('path');

// const server = http.createServer((req, res) => {
//   // Implement server logic here
// });

// const PORT = 3000;
// server.listen(PORT, () => {