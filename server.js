const mongoDB = require('./server/mongoDB');
const app = require('./server/app');

const PORT = process.env.PORT || 5000;
const PRODUCTION_ENV = 'production';
const isProdEnv = process.env.NODE_ENV === PRODUCTION_ENV;

mongoDB.init(process.env.MONGODB_URL);
app.init(__dirname, PORT, isProdEnv);

console.log(`RESTful API server started on: ${PORT}`);
