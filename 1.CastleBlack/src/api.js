const { Router } = require("express");
const api = Router();
const playerService = require('./business/playerService')
const objectService = require('./business/objectService')

// This will be your data source
// const players = [
//   { id: 1, name: "Jon Snow", age: 23, health: 100, bag: [1] },
//   { id: 2, name: "Littlefinger", age: 35, health: 100, bag: [2] },
//   { id: 3, name: "Daenerys Targaryen", age: 20, health: 100, bag: [3] },
//   { id: 4, name: "Samwell Tarly", age: 18, health: 100, bag: [4] }
// ];
// const objects = [
//   { id: 1, name: "spoon", value: -1 },
//   { id: 2, name: "knife", value: -10 },
//   { id: 3, name: "sword", value: -20 },
//   { id: 4, name: "potion", value: +20 }
// ];

//**************OBJECTS***************************/
// EXAMPLE ENDPOINT: LIST ALL OBJECTS
api.get("/objects", function(req, res) {
  res.json(objectService.allObjects());
});

// ENDPOINT: ADD AN OBJECT
api.post("/objects", function(req, res) {
    const object = req.body
    objectService.addObject(object)
    res.json({"msg":"you added a object","new object":object})
});

// ENDPOINT: GET AN OBJECT BY ID
api.get("/objects/:objectId", function(req, res) {
  const object = objectService.objectById(req.params.objectId)  
  res.json(object);
});

//**************PLAYERS***************************/
// EXAMPLE ENDPOINT: LIST ALL PLAYER
api.get("/players", function(req, res) {
  res.json(playerService.allPlayer());
});

// ENDPOINT: ADD A PLAYER
api.post("/players", function(req, res) {
    const player = req.body
    playerService.addPlayer(player)
    res.json({"msg":"you added a player","new player":player})
});

// ENDPOINT: GET A PLAYER BY ID
api.get("/players/:playerId", function(req, res) {
  const player = playerService.playerById(req.params.playerId)  
  res.json(player);
});



module.exports = api;
