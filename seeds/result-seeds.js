const { Result} = require('../models');

const resultData = [
  {
    is_completed: true,
    habit_id: 1,
    date_id: 3,
    user_id: 1
  },
  {
    is_completed: true,
    habit_id: 2,
    date_id: 7,
    user_id: 1
  },
  {
    is_completed: true,
    habit_id: 1,
    date_id: 4,
    user_id: 1
  },
  {
    is_completed: true,
    habit_id: 1,
    date_id: 3,
    user_id: 2
  },
  {
    is_completed: true,
    habit_id: 2,
    date_id: 7,
    user_id: 2
  },
  {
    is_completed: true,
    habit_id: 1,
    date_id: 4,
    user_id: 2
  },
];
const seedResults = () => Comment.bulkCreate(resultData);

module.exports = seedResults;