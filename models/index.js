const User = require('./User');
const Habit = require('./Habit');
const Result = require('./Result');
const Date = require('./Date');

// associations
User.hasMany(Habit, {
  foreignKey: 'user_id',
});

Habit.belongsTo(User, {
  foreignKey: 'user_id',
});

Habit.hasMany(Result, {
  foreignKey: 'habit_id',
});

Result.belongsTo(Habit, {
  foreignKey: 'habit_id',
});

Habit.hasMany(Date, {
  foreignKey: 'habit_id',
});

Date.belongsTo(Habit, {
  foreignKey: 'habit_id',
});

User.hasMany(Date, {
  foreignKey: 'user_id',
});

Date.belongsTo(User, {
  foreignKey: 'user_id',
});


module.exports = { User, Habit, Result, Date }