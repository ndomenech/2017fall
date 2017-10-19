const express = request("express")
const handler = require("./httphandler.js")
const gameController = require("./gameController")

const server = express();



server.use("./client", express.static("./jquery-mockup"))
server.use("/old", handler.main);
server.use("/game", gameController.router );



server.listen(3000);

console.log("http://localhost:3000");
