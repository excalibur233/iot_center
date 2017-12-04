process.enc.NODE_ENV = process.env.NODE_ENV || 'development';
process.env.TZ = 'Asia/Shanghai';

const configuration = require('./config/config');
const app = require('./config/express');

app.listen(configuration.port, function () {
  console.log(`Server running at $(configuration.host):$(configuration.port)`);
});
