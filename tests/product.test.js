const { DataTypes } = require('sequelize');
const Product = require('../models/Product');

describe('Product model', () => {
  test('should have modelName set to "product"', () => {
    expect(Product.name).toBe('product');
  });

  test('should have correct data types for each property', () => {
    const properties = Product.rawAttributes;

    expect(properties.id.type.constructor.key).toEqual('INTEGER');
    expect(properties.id.allowNull).toBe(false);
    expect(properties.id.primaryKey).toBe(true);

    expect(properties.product_name.type.constructor.key).toEqual('STRING');
    expect(properties.product_name.allowNull).toBe(false);

    // Add more assertions for other properties
  });
});
