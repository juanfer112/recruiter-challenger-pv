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

module.exports = {
    allPlayer, 
    addPlayer,
    playerById
};