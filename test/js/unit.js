const fs = require('fs');
const path = require('path');
const expect = require('expect');
const mocha = require('mocha');
const testJsonFile = ('../testdb.json');


describe('db unit tests', () => {

  before(() => {
    fs.writeFileSync(testJsonFile, JSON.stringify([], null, 2));
    let testData = JSON.parse(fs.readFileSync(testJsonFile));
    console.log(testData);
  });

  describe('#create', () => {
    it('test', () => {

    });

    it('unique ID field added', () => {

    });

    it('does not overwrite first game', () => {

    });
  });
});