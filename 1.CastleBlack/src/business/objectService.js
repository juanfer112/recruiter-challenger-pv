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

const updateObject=(object) => {
    gameDb.objects.forEach(item => 
        (item.id == object.id) ? item.value = object.value : item.value
        );
}

const destroyObject = (id) => {
    index = gameDb.objects.findIndex(item => item.id == id);
    gameDb.objects.splice(index, 1);
    //gameDbgameDb.objects.filter(item => item.id != id);
}


module.exports = {
    allObjects, 
    addObject,
    objectById,
    updateObject,
    destroyObject
};