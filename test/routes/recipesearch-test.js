const chai = require('chai');
const assert = require('chai').assert;
const expect = require('chai').expect;
const should = chai.should();
const request = require('supertest');
const nock = require('nock');
const app = require('../../app')
const response = require('../response');
nock.disableNetConnect()
nock.enableNetConnect('127.0.0.1')

describe('recipesearch/:query api', () => {
  beforeEach(() => {
    nock('https://www.food2fork.com')
      .get('/api/search?key=c0172c962f73f5feeaddc283613ce9ef&q=pasta')
      .reply(200, response);
   });

   it('response should have 200 status code', (done) => {
     request(app)
       .get('/documents/recipesearch/pasta')
       .expect((resp) => {
         assert(resp.statusCode.should.eql(200));
       })
       .expect(200, done);
   });

   it('value of key "parsed" is an array', (done) => {
     request(app)
      .get("/documents/recipesearch/pasta")
      .expect((resp) => {
        assert.typeOf(resp.body.parsed, 'array');
      })
      .expect(200, done);
   });

    it('body response is an object', (done) => {
      request(app)
       .get('/documents/recipesearch/pasta')
       .expect((resp) => {
         assert.typeOf(resp.body, 'object');
         const recipes = resp.body.parsed

         assert.equal(recipes[3].title, 'Creamy Avocado Pasta');
       })
       .expect(200, done);
    });

   it('each recipe has a "source_url" and a "publisher" properties', (done) => {
     request(app)
      .get('/documents/recipesearch/pasta')
      .expect((resp) => {
        const recipes = resp.body.parsed
        recipes.forEach((recipe) => {
          expect(recipe).to.have.own.property('source_url');
          expect(recipe).to.have.own.property('publisher');
        })
      })
      .expect(200, done)
   });

   it('response should contain key called "parsed" with length of 4', (done) => {
     request(app)
      .get('/documents/recipesearch/pasta')
      .expect((resp) => {
        expect(resp.body).to.have.property('parsed').with.lengthOf(4);
      })
      .expect(200, done);
   });

   describe('makes request to food2fork and return result', () => {
     it('title of first recipe should corresponde', (done) => {
        request(app)
          .get('/documents/recipesearch/pasta')
          .expect((resp) => {
            assert.equal(resp.body.parsed[0].title, "Pasta with Pesto Cream Sauce");
          })
          .expect(200, done);
      });

      it('f2f_url of second recipe should corresponde', (done) => {
        request(app)
          .get('/documents/recipesearch/pasta')
          .expect((resp) => {
            assert.equal(resp.body.parsed[1].f2f_url, "http://food2fork.com/view/8f3e73");
          })
          .expect(200, done);
      });

      it('recipe_id of third recipe should correspond', (done) => {
        request(app)
          .get('/documents/recipesearch/pasta')
          .expect((resp) => {
            assert.equal(resp.body.parsed[2].recipe_id, "47032");
          })
          .expect(200, done);
      });

      it('social_rank of fourth recipe should correspond', (done) => {
        request(app)
          .get('/documents/recipesearch/pasta')
          .expect((resp) => {
            assert.equal(resp.body.parsed[3].social_rank, "99.99999999999989");
          })
          .expect(200, done);
      });
   });
});
