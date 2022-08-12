const User = require('./users');
const Habit = require('./habits');
const Result = require('./result');
const Date = require('./date');

 //one-to-many result through table
  Result.belongsTo(Habit, {
    foreignKey: 'habit_id'
  });

  Result.belongsTo(Date, {
    foreignKey: 'date_id'
  })

  Habit.hasMany(Result, {
    foreignKey: 'habit_id',
  });

  Date.hasMany(Result, {
    foreignKey: 'date_id'
  })

// user habit associations one-to-many
User.hasMany(Habit, {
  foreignKey: 'user_id',
});

Habit.belongsTo(User, {
  foreignKey: 'user_id',
});

module.exports = { User, Habit, Result, Date }