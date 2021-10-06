const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const routes = require('./api/routes/routes');

const DIRNAME = __dirname.replace('\\server', '');

exports.init = port => {
  const app = express();

  app.use(express.static(DIRNAME)); // This was not used in back-server.js

  app.use((req, res, next) => {
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
    res.sendFile(path.resolve(DIRNAME, 'index.html'));
  });

  app.use(({ originalUrl }, res) =>
    res.status(404).send(`"${originalUrl}" endpoint was not found`),
  );

  app.listen(port);
};
