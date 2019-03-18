
run node server:
npm start

run geckodriver for firefox:
./geckodriver --port 4444

run mongodb:
mongod --dbpath data

run tests with wdio:
npm test

run specific tests with mocha:
./node_modules/.bin/mocha test/routes/api-actions-test.js


node --expose-internals ./node_modules/.bin/mocha test/routes/api-actions-test.js
