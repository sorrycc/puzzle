var puzzle = require('../index');
var expect = require('expect.js');

describe('puzzle', function() {

    it('puzzle is existed', function() {
        expect(puzzle).to.be.ok();
        expect(puzzle.init).to.be.ok();
        expect(puzzle.push).to.be.ok();
        expect(puzzle.notExistedFunction).to.not.be.ok();
    });
});

