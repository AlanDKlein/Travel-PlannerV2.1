import 'regenerator-runtime/runtime'
var checkGEO = require('../src/client/js/RetrieveGeoData')
//Check SaveTrip exist
var validateGEO = checkGEO.retrieveGeoData;
describe('Test, the function "retrieveGeoData" should exist' , () => {
    test('It should return true', async () => {
        expect(validateGEO).toBeDefined();
    });
});
describe('Test "retrieveGeoData()" should be a function' , () => {
    test('It should be a function', async () => {
        expect(typeof validateGEO).toBe("function");
    });
});