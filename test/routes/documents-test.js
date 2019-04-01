const chai = require('chai');
const assert = require('chai').assert;
const expect = require('chai').expect;
const request = require('supertest');
const app = require('../../app')























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
