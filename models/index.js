const User = require("./User");
const Habit = require("./Habit");
const Result = require("./Result");
const DateModel = require("./Date");

//one-to-many result through table
Result.belongsTo(Habit, {
  foreignKey: "habit_id",
});

Result.belongsTo(DateModel, {
  foreignKey: "date_id",
});

Habit.hasMany(Result, {
  foreignKey: "habit_id",
});

DateModel.hasMany(Result, {
  foreignKey: "date_id",
});

// user habit associations one-to-many
User.hasMany(Habit, {
  foreignKey: "user_id",
});

Habit.belongsTo(User, {
  foreignKey: "user_id",
});

//user result association one-to-many
User.hasMany(Result, {
  foreignKey: "user_id",
});

Result.belongsTo(User, {
  foreignKey: "user_id",
});

module.exports = { User, Habit, Result, DateModel };
