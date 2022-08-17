const User = require("./User");
const Habit = require("./Habit");
const Result = require("./Result");


//one-to-many result through table
Result.belongsTo(Habit, {
  foreignKey: "habit_id",
});

Habit.hasMany(Result, {
  foreignKey: "habit_id",
});

// user habit associations one-to-many
User.hasMany(Habit, {
  foreignKey: "user_id",
});

Habit.belongsTo(User, {
  foreignKey: "user_id",
});

//user result association one-to-many
// answer conflict
User.hasMany(Result, {
  foreignKey: "user_id",
});

Result.belongsTo(User, {
  foreignKey: "user_id",
});

module.exports = { User, Habit, Result };
