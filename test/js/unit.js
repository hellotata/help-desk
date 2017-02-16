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
    httpServer.listen('3001');
  });
  afterEach((done) => {
    httpServer.close(done);
  });

  it('responds to /', (done) => {
    request(app)
      .get('/')
      .expect(200, done);
  });

  it('unique ID field added', (done) => {
    done();
  });

  it('does not overwrite first game', (done) => {
    done();
  });
});