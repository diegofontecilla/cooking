const assert = require('assert');
const request = require('supertest');
const app = require('../../app')
const sinon = require('sinon');
const chai = require('chai');
const should = chai.should();
const nock = require('nock')

var food2fork = nock('food2fork.com/')

// describe('food2fork api', function () {
//   it('body should return appropiate value', function(done) {
//     food2fork.get("/api/search?key=c0172c962f73f5feeaddc283613ce9ef&q=pasta")
//       .reply(200, {
//         count: 1,
//         recipes: [
//           {
//             publisher: "The Pioneer Woman",
//             f2f_url: "http://food2fork.com/view/47025",
//             title: "Pasta with Pesto Cream Sauce",
//             source_url: "http://thepioneerwoman.com/cooking/2011/06/pasta-with-pesto-cream-sauce/",
//             recipe_id: "47025",
//             image_url: "http://static.food2fork.com/pestoa0e7.jpg",
//             social_rank: 100,
//             publisher_url: "http://thepioneerwoman.com"
//           }
//         ]
//       });
//     request(app)
//       .get('/documents/recipesearch/pasta')
//       .expect(function(resp) {
//         console.log('1')
//         assert.equal(resp.body.recipes[0].title, "should not pass");
//       })
//       .expect(200, done());
//   });
// });

describe('food2fork api', function () {
  it('body should return appropiate value', function(done) {
    request(app)
      .get('/documents/recipesearch/pasta')
      .expect(function(resp) {
        assert.equal(resp.body.parsed[0].title, "Pasta with Pesto Cream Sauce");
      })
      .expect(200, done);
  });
});

// const APImock = nock('food2fork.com')
//   .get('/api/search?key=c0172c962f73f5feeaddc283613ce9ef&q=')
//   .reply(200, {
//     count: 1,
//     recipes: [
//         {
//           publisher: "Closet Cooking",
//           f2f_url: "http://food2fork.com/view/35382",
//           title: "Jalapeno Popper Grilled Cheese Sandwich",
//           source_url: "http://www.closetcooking.com/2011/04/jalapeno-popper-grilled-cheese-sandwich.html",
//           recipe_id: "35382",
//           image_url: "http://static.food2fork.com/Jalapeno2BPopper2BGrilled2BCheese2BSandwich2B12B500fd186186.jpg",
//           social_rank: 100,
//           publisher_url: "http://closetcooking.com"
//         }
//       ]
//     }
//   })

// describe('food2fork API', function () {
//   beforeEach(() => {
//      app.get = sinon.stub(request, 'get');
//    });
//    afterEach(() => {
//      request.restore();
//    });
//
//   it('should return all the pasta recipes', function(done) {
//     request(app)
//        .get('/documents/recipesearch/pasta')
//        res.statusCode.should.eql(200);
//   });
// });
//
// describe('food2fork api', function () {
//   it('body should return appropiate value', function(done) {
//     request(app)
//       .get('/documents/recipesearch/pasta')
//       .expect(function(resp) {
//         assert.equal(resp.body.recipes[0].title, "Jalapeno Popper Grilled Cheese Sandwich");
//       })
//       .expect(200, done);
//   });
// });
