const express = require("express");
const game = require("./gameObjsect");

const router = express.Router();



router
    .get("./pictures", (req, res) => res.send(game.pictures) )
    .get("./quotes", (req, res) => res.send(game.quotes) )

module.export.router = router;