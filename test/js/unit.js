const fs = require('fs');
const path = require('path');
const expect = require('expect');
const mocha = require('mocha');
const request = require('supertest');



describe('loading express', () => {
  let app, httpServer;
  beforeEach(() => {
    app = require('./../../server/server.js');
    httpServer = require('http').createServer(app);
    httpServer.listen(3001);
  });
  afterEach((done) => {
    httpServer.close(done);
    console.log('after each');
  });
  it('responds to /', () => {
    request(app)
      .get('/nada')
      .expect(200);
  });

  it('unique ID field added', () => {

  });

  it('does not overwrite first game', () => {

  });
});