const gameDb = require('../data/gameDb')

const allObjects=()=>{
    return gameDb.objects
}
const addObject=(object)=>{
    gameDb.objects.push(object)
}

const objectById=(id)=>{
    return gameDb.objects.filter(object => object.id==id)
}

module.exports = {
    allObjects, 
    addObject,
    objectById
};