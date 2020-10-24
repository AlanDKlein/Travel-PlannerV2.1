import 'regenerator-runtime/runtime'
var checkDates = require('../src/client/js/calculateDates')
//Check Edits exist
var validateEdits = checkDates.editDates;
describe('Test, the function "editDates" should exist' , () => {
    test('It should return true', async () => {
        expect(validateEdits).toBeDefined();
    });
});
describe('Test "handleditDateseSubmit()" should be a function' , () => {
    test('It should be a function', async () => {
        expect(typeof validateEdits).toBe("function");
    });
});

//Check Date difference exists
var validateEdits = checkDates.date_diff_indays;
describe('Test, the function "date_diff_indays" should exist' , () => {
    test('It should return true', async () => {
        expect(validateEdits).toBeDefined();
    });
});
describe('Test "date_diff_indays()" should be a function' , () => {
    test('It should be a function', async () => {
        expect(typeof validateEdits).toBe("function");
    });
});

//Che Countdown exists
var validateCountdown = checkDates.countdown;
describe('Test, the function "countdown" should exist' , () => {
    test('It should return true', async () => {
        expect(validateCountdown).toBeDefined();
    });
});
describe('Test "countdown()" should be a function' , () => {
    test('It should be a function', async () => {
        expect(typeof validateCountdown).toBe("function");
    });
});
