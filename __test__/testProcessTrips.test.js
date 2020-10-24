import 'regenerator-runtime/runtime'
var checkTrips = require('../src/client/js/processTripData')
//Check SaveTrip exist
var validateSaveTrip = checkTrips.saveThisTrip;
describe('Test, the function "saveThisTrip" should exist' , () => {
    test('It should return true', async () => {
        expect(validateSaveTrip).toBeDefined();
    });
});
describe('Test "saveThisTrip()" should be a function' , () => {
    test('It should be a function', async () => {
        expect(typeof validateSaveTrip).toBe("function");
    });
});

//Check Retrieve Trip exists
var validateGetSavedTrip = checkTrips.getSavedTrip;
describe('Test, the function "getSavedTrip" should exist' , () => {
    test('It should return true', async () => {
        expect(validateGetSavedTrip).toBeDefined();
    });
});
describe('Test "getSavedTrip()" should be a function' , () => {
    test('It should be a function', async () => {
        expect(typeof validateGetSavedTrip).toBe("function");
    });
});

//Che Countdown exists
var validateDelete = checkTrips.deleteTrip;
describe('Test, the function "deleteTrip" should exist' , () => {
    test('It should return true', async () => {
        expect(validateDelete).toBeDefined();
    });
});
describe('Test "deleteTrip()" should be a function' , () => {
    test('It should be a function', async () => {
        expect(typeof validateDelete).toBe("function");
    });
});
