const sequelize = require('../config/connection');

describe('Connection', () => {
  test('should establish a database connection', () => {
    expect(sequelize.authenticate()).resolves.toBeTruthy();
  });
});