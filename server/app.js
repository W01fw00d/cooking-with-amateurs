const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const routes = require('./api/routes/routes');

exports.init = (dirname, port, isProdEnv) => {
  console.log('DIRNAME', dirname); // TODO: remove this after testing in Heroku

  const app = express();

  const allowAllOrigins = () => {
    app.use((req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
      next();
    });
  };

  // TODO init: Workaround for a current issue with Heroku build. We run Heroku on dev env temporary
  /*   if (isProdEnv) {
    app.use(express.static(__dirname.replace('\\server', '')));
  } else {
    allowAllOrigins();
  } */

  app.use(express.static(dirname));
  if (!isProdEnv) {
    allowAllOrigins();
  }

  // TODO end

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  routes(app);

  // send the user to index html page inspite of the url
  // TODO: needed only for Heroku?
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(dirname, 'index.html'));
  });

  app.use(({ originalUrl }, res) =>
    res.status(404).send(`"${originalUrl}" endpoint was not found`),
  );

  app.listen(port);
};
