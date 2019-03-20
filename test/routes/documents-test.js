const chai = require('chai');
const expect = require('chai').expect;
const assert = require('chai').assert;
const request = require('supertest');
const app = require('../../app')
const mongoose = require('mongoose');
// const server = require('../../bin/www');
// app.get('env') = 'test'

describe('documentlist api', () => {
  it('document list is empty', (done) => {
    request(app)
      .get('/documents/documentlist')
      .expect((resp) => {
        expect(resp.body.length).to.equal(0);
    })
    .expect(200, done);
  });

  it('document list should return an object', (done) => {
    request(app)
      .get('/documents/documentlist')
      .expect((resp) => {
        assert.typeOf(resp.body, 'array');
    })
    .expect(200, done);
  });

  // it('adding recipe and getting it back', (done) => {
  //   request(app)
  //     .post('/documents/adddocument')
  //     .send({title: 'Spaghetti Carbonara'})
  //     .expect((resp) => {
  //       request(app)
  //         .get('/documents/documentlist')
  //         .expect((resp) => {
  //           const body = resp.body;
  //           expect(body.lenght).to.equal(1);
  //         })
  //         .expect(200, done);
  //     });
  // });

  describe('POST/adddocument', () => {
    it('adding a new recipe', (done) => {
      request(app)
        .post('/documents/adddocument')
        .send({title: 'Pizza Toscana'})
        .expect((resp) => {
          const body = resp.body;

          expect(body).to.contain.property('_id')
          assert.equal(body.title, 'Pizza Toscana')
      })
      .expect(200, done);
    });
  })
});





















// before((done) => {
//   server.listen(port)
//     .then(() => done())
//     .catch((err) => done(err));
// })
//
// after((done) => {
//   server.close()
//     .then(() => done())
//     .catch((err) => done(err));
// })


// it('geting the document list', (done) => {
//   request(app)
//     .get('/documents/documentlist')
//     .send({name: 'diego', text: 'fontecilla'})
//     .then((res) => {
//       const body = res.body;
//
//       expect(body).to.equal([]);
//       done();
//   })
// });
