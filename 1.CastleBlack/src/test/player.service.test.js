const playerService = require("../business/playerService");
const objectService = require("../business/objectService");

            /*PLAYER TEST*/ 
describe("playerService.playerById method", () => {
    test('Check player is not exits', () => {
        expect(playerService.playerById(1000)).toHaveLength(0);
    });

    test('Check player exits', () => {
        expect(playerService.playerById(3)).not.toBe(null);
    });
});

describe("objectService.objectById method", () => {
    test('Check object is not exits', () => {
        expect(objectService.objectById(1000)).toHaveLength(0);
    });

    test('Check object exits', () => {
        expect(objectService.objectById(3)).not.toBe(null);
    });
});


             /*OBJECT TEST*/ 
describe("objectService.objectById method", () => {
    test('Check object is not exits', () => {
        expect(objectService.objectById(1000)).toHaveLength(0);
    });

    test('Check object exits', () => {
        expect(objectService.objectById(3)).not.toBe(null);
    });
});



describe("objectService.objectById method", () => {
    test('Check object is not exits', () => {
        expect(objectService.objectById(1000)).toHaveLength(0);
    });

    test('Check object exits', () => {
        expect(objectService.objectById(3)).not.toBe(null);
    });
});
