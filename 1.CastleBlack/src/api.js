const { Router } = require("express");
const api = Router();
const playerService = require('./business/playerService')
const objectService = require('./business/objectService')


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

// ENDPOINT: UPGRADE OBJECT
api.put("/objects", function(req, res){
  const object = req.body;
  objectService.updateObject(object);
  res.json({message:"object updated"});
});

// ENDPOINT: DESTROY OBJECT
api.delete("/objects/:objectId", function(req,res){
  objectService.destroyObject(req.params.objectId);
  res.json({message: "object has been destroyed"});
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

// ENDPOINT: ARM A PLAYER
api.put("/players/arm/:playerId/:objectId", function(req, res) {
    const playerId = req.params.playerId;
    const objectId =req.params.objectId;
    res.json(playerService.armPlayer(playerId,objectId));
});

// ENDPOINT: KILL A PLAYER
api.delete("/players/:playerId", function(req, res) {     
  const player = playerService.killPlayer(req.params.playerId);
  res.json({"msg":"you killed a player","player dead":player});
});


module.exports = api;
