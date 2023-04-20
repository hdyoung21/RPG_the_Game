const User = require('./User');
const Character = require('./Character');
const Weapon = require('./Weapon');
const Armor = require('./Armor');
const Dead = require('./Dead');
const Monster = require('./Monster');

// Define associations between models using Sequelize's associations
User.hasMany(Character, {
    foreignKey: 'user_id'
});

Character.belongsTo(User, {
    foreignKey: 'user_id'
});

User.hasMany(Dead, {
    foreignKey: 'user_id'
});

Dead.belongsTo(User, {
    foreignKey: 'user_id'
});

Monster.hasMany(Dead, {
    foreignKey: 'monster_id'
});

Dead.belongsTo(Monster, {
    foreignKey: 'monster_id'
});

Weapon.hasMany(Character, {
    foreignKey: 'weapon_id'
});

Character.belongsTo(Weapon, {
    foreignKey: 'weapon_id'
});

Armor.hasMany(Character, {
    foreignKey: 'armor_id'
});

Character.belongsTo(Armor, {
    foreignKey: 'armor_id'
});

// Export all models as an object
module.exports = {
    User,
    Character,
    Weapon,
    Armor,
    Dead,
    Monster
}