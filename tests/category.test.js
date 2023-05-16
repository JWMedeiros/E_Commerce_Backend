const { DataTypes } = require('sequelize');
const Category = require('../models/Category');

describe('Category model', () => {
  test('should have modelName set to "Category"', () => {
    expect(Category.name).toBe('category');
  });

  test('should have correct data types for each property', () => {
    const properties = Category.rawAttributes;

    expect(properties.id.type.constructor.key).toEqual('INTEGER');
    expect(properties.id.allowNull).toBe(false);
    expect(properties.id.primaryKey).toBe(true);

    expect(properties.category_name.type.constructor.key).toEqual('STRING');
    expect(properties.category_name.allowNull).toBe(false);
  });
});
