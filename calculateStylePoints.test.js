const assert = require('assert');
const calculateStylePoints = require('./calculateStylePoints');

describe('calculateStylePoints', () => {
    describe('all diffrent notes', () => {
        it('should return intiger number', () => {
            const actual = calculateStylePoints([5,15,10,3,12]);
    
            const expected = 27;
    
            assert.equal(actual, expected);
        });

        it('should return number with .5 ennding', () => {
            const actual = calculateStylePoints([5.5,10,12,14,6.5]);
    
            const expected = 28.5;
    
            assert.equal(actual, expected);
        });
    });

    describe('notes are repeated', () => {
        it('one number is repeated', () => {
            const actual = calculateStylePoints([5,5,10,3,12]);

            const expected = 20;

            assert.equal(actual, expected);
        });

        it('few numbers are repeated', () => {
            const actual = calculateStylePoints([5,5,10,10,5]);

            const expected = 20;

            assert.equal(actual, expected);
        });

        it('all numbers are repeated', () => {
            const actual = calculateStylePoints([7.5,7.5,7.5,7.5,7.5]);

            const expected = 22.5;

            assert.equal(actual, expected);
        });
    });

    describe('exceptions', () => {
        it('should return \'Invalid data!\' if no value is passed', () => {
            const actual = calculateStylePoints();

            const expected = 'Invalid data!';

            assert.equal(actual, expected);
        });

        it('should return \'invalid data\' if less than 5 notes passed', () => {
            const actual = calculateStylePoints([15,10.5,3,12]);

            const expected = 'Invalid data!';

            assert.equal(actual, expected);
        });

        it('should return \'invalid data\' if more than 5 notes passed', () => {
            const actual = calculateStylePoints([5,2,15.5,10,3,12]);

            const expected = 'Invalid data!';

            assert.equal(actual, expected);
        });
    });
});