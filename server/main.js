const mongoDB = require('./mongoDB');
const app = require('./app');

const PORT = process.env.PORT || 5000;
const PRODUCTION_ENV = 'production';
const isProdEnv = process.env.NODE_ENV === PRODUCTION_ENV;

mongoDB.init(isProdEnv);
app.init(PORT, isProdEnv);

console.log(`RESTful API server started on: ${PORT}`);
