const assert = require('assert');
const calculateTotalPoints = require('./calculateTotalPoints');

describe('calculateTotalPoints', () => {
    describe('positive wind and gate', () => {
		it('without decimal', () => {
            const actual = calculateTotalPoints(120, 'normal', 110, [12.5, 16, 18, 13, 20], 20, 30);
    
            const expected = 177;
    
            assert.equal(actual, expected);
        });
		
		it('negative wind and gate', () => {
            const actual = calculateTotalPoints(253, 'mammoth', 225, [20, 20, 19, 19.5, 20], -13.4, -8.2);

            const expected = 191.5;

            assert.equal(actual, expected);
        });

        it('0 passed as wind and gate points', () => {
            const actual = calculateTotalPoints(123, 'big', 115, [18, 16.5, 17.5, 17.5, 18], 0, 0);

            const expected = 127.4;

            assert.equal(actual, expected);
        });
    });
});