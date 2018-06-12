const assert = require('assert');
const calculateDistancePoints = require('./calculateDistancePoints');

describe('calculateDistancePoints', () => {
    describe('normall hill', () => {
        it('distance larger than kPoint', () => {
            const actual = calculateDistancePoints(100, 'normal', 80);
    
            const expected = 100;
    
            assert.equal(actual, expected);
        });

        it('distance smaller than kPoint', () => {
            const actual = calculateDistancePoints(80, 'normal', 100);
    
            const expected = 20;
    
            assert.equal(actual, expected);
        });
        it('distance the same like kPoint', () => {
            const actual = calculateDistancePoints(80, 'normal', 80);
    
            const expected = 60;
    
            assert.equal(actual, expected);
        });
    });

    describe('big hill', () => {
        it('distance larger than kPoint', () => {
            const actual = calculateDistancePoints(145, 'big', 120);
    
            const expected = 105;
    
            assert.equal(actual, expected);
        });

        it('distance smaller than kPoint', () => {
            const actual = calculateDistancePoints(110, 'big', 120);
    
            const expected = 42;
    
            assert.equal(actual, expected);
        });
        it('distance the same like kPoint', () => {
            const actual = calculateDistancePoints(122, 'big', 122);
    
            const expected = 60;
    
            assert.equal(actual, expected);
        });
    });

    describe('mammoth hill', () => {
        it('distance larger than kPoint', () => {
            const actual = calculateDistancePoints(225, 'mammoth', 210);
    
            const expected = 138;
    
            assert.equal(actual, expected);
        });

        it('distance smaller than kPoint', () => {
            const actual = calculateDistancePoints(190, 'mammoth', 200);
    
            const expected = 108;
    
            assert.equal(actual, expected);
        });
        it('distance the same like kPoint', () => {
            const actual = calculateDistancePoints(211, 'mammoth', 211);
    
            const expected = 120;
    
            assert.equal(actual, expected);
        });
    });
});