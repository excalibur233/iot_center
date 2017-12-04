process.env.NODE_ENV = process.env.NODE_ENV || 'development';
process.env.TZ = 'Asia/Shanghai';

const config = require('./config/config');
const app = require('./config/express');

app.listen(config.port, function () {
  console.log(`Server running at $(config.host):$(config.port)`);
});
