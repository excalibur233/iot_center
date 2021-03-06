const production_config = {
  // server config
  port: 3000,
  host: 'http://localhost',

  // mysql config
  mysqlConfig: {
    host: 'localhost',
    port: 3306,
    database: 'p_iot_center',
    username: 'root',
    password: 'root',
  },

  // mongodb config
  mongodbConfig: {
    db: 'mongodb://localhost/iot_app',
  }
};

module.exports = production_config;
