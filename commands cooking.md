
run node server:
npm start

run geckodriver for firefox:
./geckodriver --port 4444

run mongodb:
mongod --dbpath data

run tests with wdio:
npm test

run specific file test with mocha:
./node_modules/.bin/mocha test/routes/api-actions-test.js

run specific file test with mocha and then exit:
./node_modules/.bin/mocha --exit test/routes/api-actions-test.js
