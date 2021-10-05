const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const recipeModel = require('./server/api/models/recipe-model');
const routes = require('./server/api/routes/routes');

const PRODUCTION_ENV = 'production';
const port = process.env.PORT || 5000;
// TODO: can we rename this as "main" and move it into the server folder?
// TODO: modularize this into smaller files with a specific "action/feature/function"

const app = express();

app.use(express.static(__dirname)); // This was not used in back-server.js

mongoose.Promise = global.Promise;

const mongoDBUrl =
  process.env.NODE_ENV === PRODUCTION_ENV
    ? // TODO: this string should be secret and not included in the repo
      'mongodb+srv://escapingBoredom:CM9pW7gYwVuptOk7@' +
      'escaping-boredom-au4px.mongodb.net/test?' +
      'retryWrites=true&w=majority'
    : 'mongodb://localhost/Tododb';

mongoose.connect(mongoDBUrl, () => {
  recipeModel.initData(recipeModel);
});

app.use(function(req, res, next) {
  // We allow all origins for the moment for development purposes
  // TODO: fix this, this shouldn't be used in prod, right?
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

// Send the user to index html page inspite of the url
// This was not used in back-server.js
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.use(({ originalUrl }, res) => res.status(404).send(`"${originalUrl}" endpoint was not found`));

app.listen(port);

console.log(`RESTful API server started on: ${port}`);
