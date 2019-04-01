const chai = require('chai');
const assert = require('chai').assert;
const expect = require('chai').expect;
const request = require('supertest');
const app = require('../../app')


describe('POST/adddocument', () => {
  it('adding a new recipe in the database', (done) => {
    request(app)
      .post('/documents/adddocument')
      .send([{
        recipeName: 'Pizza Toscana',
        cookingTime: '45m',
        ingredients: 'pizza stuff',
        method: 'oven'
      }])
      .expect((resp) => {
        const body = resp.body;

        expect(body[0]).to.contain.property('_id')
        assert.equal(body[0].recipeName, 'Pizza Toscana')
        assert.equal(body[0].method, 'oven')
    })
    .expect(200, done);
  });

  it('adding new recipe with the 4 properties requested', (done) => {
    request(app)
      .post('/documents/adddocument')
      .send({
        recipeName: 'Pizza Toscana',
        cookingTime: '120 mins',
        ingredients: 'pizza stuff',
        method: 'pizza can of style'
      })
      .expect((resp) => {
        const body = resp.body;

        expect(body).to.contain.property('_id')
        expect(body).to.contain.property('recipeName')
        expect(body).to.contain.property('cookingTime')
        expect(body).to.contain.property('ingredients')
        expect(body).to.contain.property('method')
    })
    .expect(200, done);
  });


// HAVE A LOOK TO THIS TEST AND MAKE SURE IS CORRECT.
  it('should delete a recipe', (done) => {
    request(app)
      .post('/documents/adddocument')
      .send({
        recipeName: 'Nidi di agretti',
        cookingTime: '12 mins',
        ingredients: 'good stuff',
        method: 'forno'
      })
      .end((err, resp) => {
        let newRecipe = resp.body;
        request(app)
          .delete('/documents/adddocument/' + newRecipe._id)
          .end((err, resp) => {
            expect(resp.body).to.eql(newRecipe);
            done();
          });
      })
  });


  it('add recipe and find it by id', (done) => {
    request(app)
      .post('/documents/adddocument')
      .send([{title: 'Pizza Toscana'}, {title: 'Pizza Tre Formaggi'}])
      .expect((resp) => {
          const idFirstRecipe = resp.body[0]._id

          assert.equal(resp.body[0]._id, idFirstRecipe)
      })
      .expect(200, done)
  });
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
