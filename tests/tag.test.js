const { DataTypes } = require('sequelize');
const Tag = require('../models/Tag');

describe('Tag model', () => {
    test('should have modelName set to "Tag"', () => {
      expect(Tag.name).toBe('tag');
    });
  
    test('should have correct data types for each property', () => {
        const properties = Tag.rawAttributes;
    
        expect(properties.id.type.constructor.key).toEqual('INTEGER');
        expect(properties.id.allowNull).toBe(false);
        expect(properties.id.primaryKey).toBe(true);
    
        expect(properties.tag_name.type.constructor.key).toEqual('STRING');
        expect(properties.tag_name.allowNull).toBe(true);
      });
    });