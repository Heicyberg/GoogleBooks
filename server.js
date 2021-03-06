const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const socketIo = require("socket.io")
const app = express();
const http = require("http");
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

const server = http.createServer(app);


// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks");

const io = socketIo(server)
// Start the socket server
server.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
