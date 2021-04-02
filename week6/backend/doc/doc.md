# Backend
- `npm install -g npx`
- we also did `npm install` to install node modules and `npm audit fix --force` to fix vulnerabilities that we got warning about
- we can start the program using `node index.js` but we added to package.json script `"start": "node index.js"` so now we can start program using `npm run start`

## 1 Linting
- `npm install eslint` to install eslint
- to add eslint conf file `eslint init`, we confirmed we want to *check syntax, find problems and enforce code style* and we would like to import *JavaScript modules (import/export)*, no framework, no typescript, code runs with node, style will be defined with a guide, guide will be google, format JavaScript. We had to install eslint-config-google latest dependency and eslintrc.js was added.
- we added scripts to package.json. After this we got 35 errors which 30 out of those could be fixed with lint. Now we can run `eslint ./server ./test --fix` (we updated this in our script too). After we did so we got 5 errors left. Reports can be found in our doc folder.
- We fixed following errors manually:

in todoTest.js
*This line has a length of 93. Maximum allowed is 80  *
`it('returns an empty array (since the previous element has been deleted)', function(done) {`
The line was too long, we just deleted additional info
`it('returns an empty array', function(done) {`

In todo.js
*Expected an error object to be thrown 
`throw 'Duplicate item'`;
We change into `throw new Error('Duplicate item')`
Also same issue at another line with ` throw 'Item not found'` which we fixed.

We then ended up with 2 errors only which were both for Missing JSDOc comment, so we added that as well (for delete and contains methods). We do not have any more errors.

## JSDoc
- `npm install jsdoc`
- `jsdoc ./server` generating JSDoc for the project

### 2 Apidoc
- `npm install apidoc` installing apidoc.js
- apidocs is like using javadoc for our java application, but this time for REST apps.

Steps we have taken to create apidoc:

1. created a description file apidoc.json in root `touch apidoc.json` and added attributes to it (for to be generated apidocs some extra information)
2. we added apidoc comments in our for todo.js rest endpoints
3. generated documentation `apidoc -i ./server -o apidoc/`. We put this optionally as a script as well
Then, we tried to test it but we were not able to see display apidoc on localhost, only by opening the generated file (which was not possible to test routes then). Because of the app is using express, we had to tell express to serve apidoc on server so we can test the routes via apidoc. Therefore, we created a public folder and told express to serve that folder in server.js `app.use(express.static('public'));`
We then generated apidoc to this directory (and deleted previous one) with `apidoc -i ./server -o ./server/public/apidoc/`. Now, we can run it on localhost (3000/apidoc) and test all our routes! They are all working except that what we don't like, apidocs doesn't output response that have status code only.

## 3 Testing the code
### Mocha
- we installed and added mocha to our script, so we now run test and it is running correctly.
- We are able to run test without running the server and its it because ... Test are not dependent on server? Find this answer later on
- We can also run mocha with different reporters using `npx mocha --reporter <reportername>`, for example dot, nyan, etc.
- Next, we have installed html reporter with `npm install mocha-simple-html-reporter` and then created the html reporter output with `npx mocha --reporter mocha-simple-html-reporter --reporter-options output=./doc/mocha-report.html` which generated our report to doc directory. Also, we added this as script to package.json.

### Istanbul
- next we installed instanbul `npm install istanbul` and then run it to see code coverage `istanbul cover ./test/todoTest.js` 
- We had to install nyc `npm i -D nyc` to execute report `npx nyc --reporter=html --reporter=text mocha` (added to script too)

Scripts overview generated files:
test-report: generates report into /mocha
test-coverage: creates .nyc_output
test-coverage:html: /.coverage

## 4 Nodemon
`npm install nodemon`and adding it to package.json

## Gitlab CI
TODO: finish pipelines and write additional tests and describe nodemon
javadoc for pipeline? buil azure pipeline?
https://docs.microsoft.com/en-us/azure/devops/pipelines/ecosystems/javascript?view=azure-devops&tabs=code

