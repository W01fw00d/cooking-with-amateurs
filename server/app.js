const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./api/routes/routes');

exports.init = (dirname, port, isProdEnv) => {
  const app = express();

  const allowAllOrigins = () => {
    app.use((req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
      next();
    });
  };

  if (isProdEnv) {
    app.use(express.static(dirname));
  } else {
    allowAllOrigins();
  }

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  routes(app);

  app.use(({ originalUrl }, res) =>
    res.status(404).send(`"${originalUrl}" endpoint was not found`),
  );

  app.listen(port);
};
