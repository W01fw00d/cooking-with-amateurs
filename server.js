const express = require('express');
const path = require('path');
const port = process.env.PORT || 5000;
const app = express();

// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));

const mongoose = require('mongoose'),
  recipeModel = require('./server/api/models/recipe-model'),
  bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect(
  'mongodb+srv://escapingBoredom:CM9pW7gYwVuptOk7@' +
    'escaping-boredom-au4px.mongodb.net/test?' +
    'retryWrites=true&w=majority',
  () => {
    recipeModel.initData(recipeModel);
  },
);

app.use(function(req, res, next) {
  // We allow all origins for the moment for development purposes
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const routes = require('./server/api/routes/routes');
routes(app);

// send the user to index html page inspite of the url
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.use(({ originalUrl }, res) => res.status(404).send(`"${originalUrl}" endpoint was not found`));

app.listen(port);

console.log('React App started on: ' + port);
console.log('RESTful API server started on: ' + port);
