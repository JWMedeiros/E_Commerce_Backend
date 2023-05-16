const { ProductTag, sequelize, DataTypes } = require('../models');

describe('ProductTag model', () => {
  beforeAll(async () => {
    await ProductTag.sync(); // Use ProductTag.sync() instead of sequelize.sync()
  });

  test('should have modelName set to "product_tag"', () => {
    expect(ProductTag.name).toBe('product_tag'); // Check the name property instead of modelName
  });

  test('should have correct data types for each property', () => {
    const properties = ProductTag.rawAttributes;

    expect(properties.id.type.key).toEqual('INTEGER');
    expect(properties.id.allowNull).toBe(false);
    expect(properties.id.primaryKey).toBe(true);

    expect(properties.id.type.key).toEqual('INTEGER');
    // Add more assertions for the product_id property

    expect(properties.tag_id.type.constructor.key).toEqual('INTEGER');
    // Add more assertions for the tag_id property
  });
});
