// development configuration options
const development_config = {
  // server config
  port: 3000,
  host: 'http://localhost',

  // mysql config
  mysqlConfig: {
    host: 'localhost',
    port: 3306,
    database: 't_iot_center',
    username: 'root',
    password: 'root',
  },
};

module.exports = development_config;
