var express = require('express');
var router = express.Router();
var http = require('https');
var config = require('../../config');
var apiActions = require('../api-actions');

router.get('/documentlist', function(req, res) {
    var userId = 'j:"' + req.cookies.cookinguser + '"';

    apiActions.getDocuments(req.db.get(config.dataBase), userId, function(data) {
        res.json(data);
    });
});

router.get('/documentlist/:query', function(req, res) {
    var userId = 'j:"' + req.cookies.cookinguser + '"';
    var query = decodeURI(req.params.query);

    apiActions.getDocument(req.db.get(config.dataBase), userId, query, function (data) {
        res.json(data);
    });
});

router.post('/adddocument', function(req, res) {
    var collection = req.db.get(config.dataBase);

    apiActions.addDocument(collection, req.body, function(data) {
        res.json(data)
    });
});

router.delete('/deletedocument/:id', function(req, res) {
    var collection = req.db.get(config.dataBase);
    var id = req.params.id;

    apiActions.removeDocument(collection, id, function() {
        res.send()
    })
});

// MY FIX in progress FOR THE CODE ABOVE
// router.delete('/adddocument/:id', function(req, res) {
//     var collection = req.db.get(config.dataBase);
//     var id = req.params.id;
//
//     apiActions.removeDocument(collection, id, function(data) {
//       console.log('______________________')
//       console.log(data)
//         res.send(data)
//     })
// });

router.get('/recipesearch/:query', function(req, res){
    var httpDetails = {
        query: req.params.query,
        host: 'www.food2fork.com',
        path: '/api/search?key=c0172c962f73f5feeaddc283613ce9ef&q='
    }
    apiActions.makeHttpRequest(httpDetails, res, function(returnValue){
        res.json(returnValue);
    });
});

module.exports = router;
