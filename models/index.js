const User = require("./User");
const Habit = require("./Habit");
const Result = require("./Result");


//one-to-many result through table
Result.belongsTo(Habit, {
  foreignKey: "habit_id",
  onDelete: 'cascade',
  hooks: true, 
});

Habit.hasMany(Result, {
  foreignKey: "habit_id",
  onDelete: 'cascade',
  hooks: true, 
});

// user habit associations one-to-many
User.hasMany(Habit, {
  foreignKey: "user_id",
  onDelete: 'cascade',
  hooks: true, 
});

Habit.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: 'cascade',
  hooks: true, 
});

//user result association one-to-many
// answer conflict
User.hasMany(Result, {
  foreignKey: "user_id",
  onDelete: 'cascade',
  hooks: true, 
});

Result.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: 'cascade',
  hooks: true, 
});

module.exports = { User, Habit, Result };