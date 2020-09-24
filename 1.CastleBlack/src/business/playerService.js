const gameDb = require('../data/gameDb')


const allPlayer=()=>{
    return gameDb.players
}

const addPlayer=(player)=>{
    gameDb.players.push(player)
}

const playerById=(id)=>{
    return gameDb.players.filter(player=>player.id==id)
}

const armPlayer = (playerId,objectId)=>{
    const player = gameDb.players.find(item => item.id == playerId);  
    player.bag.push(parseInt(objectId));
    gameDb.players.forEach(item=> {item = item.id == item.id ? player : item});
    return gameDb.players
}
const killPlayer = (id) =>{
   gameDb.players = gameDb.players.filter(item => item.id != id);
   return gameDb.players
}



module.exports = {
    allPlayer, 
    addPlayer,
    playerById,
    armPlayer,
    killPlayer
};