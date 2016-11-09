let sum = require("../sum-array").sum;
let expect = require('chai').expect;

describe("sum(arr)", function () {
    it('should return 3 for [1,2]', function () {
        let expectedSum = 3;
        let actualSum = sum([1,2]);
        expect(actualSum).to.be.equal.to(expectedSum)
    })
});

console.log(sum([2,3]));